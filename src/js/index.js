import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

import todoApp from './reducers';
import App from './components/App';

import '../css/app.css';

const logger = createLogger();
const store = createStore(
  todoApp,
  applyMiddleware(thunk, promise, logger)
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
