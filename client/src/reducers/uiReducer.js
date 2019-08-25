export default (
  state = { activeNavItem: '', activeCategory: 'tv', activeSeason: null },
  { type, payload },
) => {
  switch (type) {
    case 'UI_NAV_ITEM_SELECTED':
      return { ...state, activeNavItem: payload };
    case 'UI_CATEGORY_SELECTED':
      return { ...state, activeCategory: payload };
    case 'UI_SEASON_SELECTED':
      return { ...state, activeSeason: payload };
    case 'UI_CLEAR_SEASON_SELECTED':
      return { ...state, activeSeason: null };
    default:
      return state;
  }
};
