import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App'
import DogInfo from './components/dog_info';
import UserInfo from './components/user_info';
import UserDash from './components/user_dash';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={DogInfo} />
    <Route path='create-account' component={UserInfo} />
    <Route path='users/:id/dashboard' component={UserDash} />
  </Route>
);
