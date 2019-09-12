import { combineReducers } from 'redux';

import allTodosReducer from './allTodosReducer';
import doneTodosReducer from './doneTodosReducer';
import mediaDetailsReducer from './mediaDetailsReducer';
import mediaEpisodesReducer from './mediaEpisodesReducer';
import searchReducer from './searchReducer';
import todoReducer from './todoReducer';
import trendingReducer from './trendingReducer';
import uiReducer from './uiReducer';

export default combineReducers({
  allTodos: allTodosReducer,
  doneTodos: doneTodosReducer,
  mediaDetails: mediaDetailsReducer,
  mediaEpisodes: mediaEpisodesReducer,
  searchResult: searchReducer,
  selectedTodo: todoReducer,
  trendingMedia: trendingReducer,
  ui: uiReducer,
});
