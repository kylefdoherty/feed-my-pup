import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App'
import DogInfo from './components/dog_info';
import UserInfo from './components/user_info';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={DogInfo} />
    <Route path='create-account' component={UserInfo} />
  </Route>
);
