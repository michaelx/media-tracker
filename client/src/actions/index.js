import mediaTracker from '../apis/mediaTracker';
import TMDb from '../apis/TMDb';


// UI
export const selectNavItem = (item) => ({
  type: 'UI_NAV_ITEM_SELECTED',
  payload: item,
});


export const selectCategory = (item) => ({
  type: 'UI_CATEGORY_SELECTED',
  payload: item,
});

export const selectSeason = (item) => ({
  type: 'UI_SEASON_SELECTED',
  payload: item,
});

export const clearSelectedSeason = () => ({
  type: 'UI_CLEAR_SEASON_SELECTED',
});


// Tracking (the To Do’s)
export const fetchAllTodos = (category) => async (dispatch) => {
  const response = await mediaTracker.get(`/${category}`);

  dispatch({
    type: 'FETCH_ALL_TODOS_OF_CATEGORY',
    payload: response.data,
    category,
  });
};


export const fetchTodo = (id, category) => async (dispatch) => {
  const response = await mediaTracker.get(`/${category}?id=${id}`);

  dispatch({
    type: 'FETCH_TODO',
    payload: response.data[0],
    category,
  });
};


export const addTodo = (data, category, extraData) => async (dispatch) => {
  const { id, poster_path } = data; // eslint-disable-line camelcase
  const mappedData = {
    id,
    [data.name ? 'name' : 'title']: data.name ? data.name : data.title,
    poster_path,
    tracked: true,
    done: false,
  };

  if (category === 'tv') {
    mappedData.seasons = [];
  }

  // Merge extra data and mappedData
  const response = await mediaTracker.post(`/${category}`, { ...mappedData, ...extraData });

  dispatch({
    type: 'ADD_TODO',
    payload: response.data,
    category,
  });
};


export const updateTodo = (id, category, data) => async (dispatch, getState) => {
  // Check store if todo data for the media exists
  const { tracked } = getState().selectedTodo;

  // If not, add it before updating the data
  if (tracked === undefined) {
    const { mediaDetails } = getState();
    await dispatch(addTodo(mediaDetails, category));
  }

  const response = await mediaTracker.patch(`/${category}/${id}`, data);

  dispatch({
    type: 'UPDATE_TODO',
    payload: response.data,
    id,
    category,
  });
};


export const updateTodoSeason = (id, category, seasonData) => async (dispatch, getState) => {
  // Check store if todo data for the media exists
  const { seasons } = getState().selectedTodo;

  // If not, add it before updating the data
  let response = null;
  if (seasons) {
    response = await mediaTracker.patch(`/${category}/${id}`, { seasons: { ...seasons, ...seasonData } });
  } else {
    const { mediaDetails } = getState();
    await dispatch(addTodo(mediaDetails, category, { tracked: true }));
    response = await mediaTracker.patch(`/${category}/${id}`, { seasons: seasonData });
  }

  dispatch({
    type: 'UPDATE_SEASONS_TODO',
    payload: response.data,
  });
};


export const clearSelectedTodo = () => ({
  type: 'CLEAR_SELECTED_TODO',
});


// @TODO: Refactor
export const fetchAllDone = (category) => async (dispatch) => {
  const response = await mediaTracker.get(`/${category}`);

  dispatch({
    type: 'FETCH_ALL_DONE_OF_CATEGORY',
    payload: response.data,
    category,
  });
};


// Search and Trending
export const searchMedia = (term, category) => async (dispatch) => {
  const response = await TMDb.get(`/search/${category}`, {
    params: {
      query: term,
    },
  });

  dispatch({
    type: 'SEARCH_MEDIA',
    results: response.data.results,
    term,
    category,
  });
};

export const clearSearchResult = () => ({
  type: 'CLEAR_SEARCH_RESULT',
});

export const fetchTrending = (category) => async (dispatch) => {
  const response = await TMDb.get(`/trending/${category}/day`);

  dispatch({
    type: 'FETCH_TRENDING',
    results: response.data.results,
    category,
  });
};


// Get media details from 3rd-party API
export const fetchMediaDetails = (id, category) => async (dispatch) => {
  const response = await TMDb.get(`/${category}/${id}`);

  dispatch({
    type: 'FETCH_MEDIA_DETAILS',
    payload: response.data,
  });
};

export const fetchMediaEpisodes = (id, season) => async (dispatch) => {
  const response = await TMDb.get(`/tv/${id}/season/${season}`);

  dispatch({
    type: 'FETCH_MEDIA_EPISODES',
    payload: response.data.episodes,
  });
};

export const clearMediaDetails = () => ({
  type: 'CLEAR_MEDIA_DETAILS',
});
