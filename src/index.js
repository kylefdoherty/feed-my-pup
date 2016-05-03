import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import signUpReducer from './reducers';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import App from './App';

const store = createStore(signUpReducer);

const rootElement = document.getElementById('root');

render(
  <Provider store={ store }>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  rootElement
)
