const initialState = {
  movie: [],
  tv: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ALL_DONE_OF_CATEGORY':
      return {
        ...state,
        [action.category]: action.todos.filter(
          (el) => el.done === true,
        ),
      };
    default:
      return state;
  }
};
