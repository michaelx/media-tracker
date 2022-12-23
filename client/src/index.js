import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import 'semantic-ui-css/semantic.min.css';

import App from './components/App';
import reducers from './reducers';

// Enable Redux DevTools
// eslint-disable-next-line no-underscore-dangle, no-undef
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk)),
);

// eslint-disable-next-line no-undef
const container = document.getElementById('app');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
