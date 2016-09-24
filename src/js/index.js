import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

import dbWorker from './utils/dbWorker.js';
import todoApp from './reducers';
import App from './components/App';

import '../css/app.css';

const logger = createLogger();
const store = createStore(
  todoApp,
  applyMiddleware(thunk, promise, logger)
);

const Login = <div>login</div>;
const MainApp = <Provider store={store}><App /></Provider>;

render(
  dbWorker.checkData() ? MainApp : Login,
  document.getElementById('root')
);
