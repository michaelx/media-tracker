export default (
  state = { tv: [], movie: [] },
  { type, payload, category },
) => {
  switch (type) {
    case 'FETCH_ALL_DONE_OF_CATEGORY':
      return {
        ...state,
        [category]: payload.filter(
          (el) => el.done === true,
        ),
      };
    default:
      return state;
  }
};
