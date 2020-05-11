import React from "react";
import ReactDOM from "react-dom";
import createSagaMiddleware from "redux-saga";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import rootSaga from "./sagas";

import { composeWithDevTools } from "redux-devtools-extension";

/* eslint-disable no-underscore-dangle */
const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(sagaMiddleware);

// const composeEnhancers =
//   (window.__REDUX_DEVTOOLS_EXTENSION__ &&
//     window.__REDUX_DEVTOOLS_EXTENSION__()) ||
//   compose;

const store = createStore(reducer, composeWithDevTools(middleware));

/* eslint-enable */

sagaMiddleware.run(rootSaga);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
