export default (
  state = { results: [], category: '' },
  { type, results, category },
) => {
  switch (type) {
    case 'FETCH_TRENDING':
      return { ...state, results, category };
    default:
      return state;
  }
};
