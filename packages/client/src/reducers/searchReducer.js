export default (
  state = { results: [], term: '', category: '' },
  {
    type,
    results,
    term,
    category,
  },
) => {
  switch (type) {
    case 'SEARCH_MEDIA':
      return {
        ...state, results, term, category,
      };
    case 'CLEAR_SEARCH_RESULT':
      return { results: [], term: '', category: '' };
    default:
      return state;
  }
};
