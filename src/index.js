import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { render } from 'react-dom';
import 'rxjs';
import Home from './components/Home';
import reducer from './reducers';
import rootEpic from './epics';
import './index.css';

const epicMiddleware = createEpicMiddleware(rootEpic);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(epicMiddleware)),
);

render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root'),
);
