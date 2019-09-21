const initialState = {
  category: '',
  results: [],
};

export default (
  state = initialState,
  { type, results, category },
) => {
  switch (type) {
    case 'FETCH_TRENDING':
      return { ...state, results, category };
    default:
      return state;
  }
};
