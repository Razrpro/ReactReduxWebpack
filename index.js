import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { applyMiddleware, createStore } from 'redux';
import rootReducer from './src/store/rootReducer';

import App from "./src";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  window.document.getElementById("react-root"),
);
