export default (
  state = { tv: [], movie: [] },
  { type, payload, category },
) => {
  switch (type) {
    case 'FETCH_ALL_TODOS_OF_CATEGORY':
      return {
        ...state,
        [category]: payload.filter(
          (el) => el.tracked === true && el.done === false,
        ),
      };
    default:
      return state;
  }
};
