const initialState = {
  movie: [],
  tv: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ALL_TODOS_OF_CATEGORY':
      return {
        ...state,
        [action.category]: action.todos.filter(
          (el) => el.tracked === true && el.done === false,
        ),
      };
    default:
      return state;
  }
};
