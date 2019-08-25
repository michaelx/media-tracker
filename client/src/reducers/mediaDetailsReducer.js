export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_MEDIA_DETAILS':
      return action.payload;
    case 'CLEAR_MEDIA_DETAILS':
      return {};
    default:
      return state;
  }
};
