const initialState = {
  category: '',
  results: [],
  term: '',
};

export default (
  state = initialState,
  {
    category,
    results,
    term,
    type,
  },
) => {
  switch (type) {
    case 'SEARCH_MEDIA':
      return {
        ...state,
        category,
        results,
        term,
      };
    case 'CLEAR_SEARCH_RESULT':
      return initialState;
    default:
      return state;
  }
};
