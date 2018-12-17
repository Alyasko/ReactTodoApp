import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import App from './App';
import reducers from "./store/reducers";

const store = createStore(combineReducers(reducers));

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
