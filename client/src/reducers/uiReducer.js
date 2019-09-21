const initialState = {
  activeCategory: 'tv',
  activeNavItem: '',
  activeSeason: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UI_NAV_ITEM_SELECTED':
      return { ...state, activeNavItem: action.payload };
    case 'UI_CATEGORY_SELECTED':
      return { ...state, activeCategory: action.payload };
    case 'UI_SEASON_SELECTED':
      return { ...state, activeSeason: action.payload };
    case 'UI_CLEAR_SEASON_SELECTED':
      return { ...state, activeSeason: null };
    default:
      return state;
  }
};
