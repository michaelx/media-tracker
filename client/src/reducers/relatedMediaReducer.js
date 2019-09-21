export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_RELATED_MEDIA':
      return action.payload;
    default:
      return state;
  }
};
