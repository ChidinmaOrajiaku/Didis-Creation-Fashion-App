/* eslint-disable */
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
/* eslint-enable */

import ReactDOM from 'react-dom';
import routes from './routes.jsx';
import rootReducer from './rootReducer';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension && process.env.NODE_ENV === 'development' ? window.devToolsExtension() : f => f
  )
);

ReactDOM.render(
  <Provider store={store}>
   { routes }
  </ Provider>,
  /* eslint-disable */ 
  document.getElementById('app')
  /* eslint-enable */
);

export default store;
