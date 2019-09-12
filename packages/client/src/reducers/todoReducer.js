export default (state = {}, { type, payload, category }) => {
  // Set the highest season number of done episodes.
  // Default to 1 for actively tracked media and never tracked media.
  const addData = {};
  if (payload && payload.seasons) {
    addData.newestActiveSeason = Math.max(...Object.keys(payload.seasons), 1);
  } else if (category === 'tv') {
    addData.newestActiveSeason = 1;
  }

  switch (type) {
    case 'FETCH_TODO':
      return { ...state, ...payload, ...addData };
    case 'UPDATE_TODO':
      return { ...state, ...payload, ...addData };
    case 'ADD_TODO':
      return { ...state, ...payload, ...addData };
    case 'UPDATE_SEASONS_TODO':
      return { ...state, ...payload, ...addData };
    case 'CLEAR_SELECTED_TODO':
      return {};
    default:
      return state;
  }
};
