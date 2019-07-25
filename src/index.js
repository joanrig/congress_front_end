import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import 'semantic-ui-css/semantic.min.css'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middleware = [logger, thunk]
let store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)))

 ReactDOM.render(
  <Provider store = {store}>
      <App />
  </Provider>
, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
