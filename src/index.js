import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import reducer from './store/reducers';

import App from './App';

const reducers = combineReducers(reducer);
const store = createStore(reducers);

const container = (
  <Provider store={store}>
    <App />
  </Provider>
);

// store.subscribe(() => {
//   console.log(store.getState());
// });

ReactDOM.render(
  container,
  document.getElementById('root'),
);
