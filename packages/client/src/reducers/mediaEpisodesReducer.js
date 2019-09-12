export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_MEDIA_EPISODES':
      return action.payload;
    default:
      return state;
  }
};
