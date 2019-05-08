import React from 'react';
import { Route, Switch } from 'react-router';
import { Home } from '../components/containers';

export default (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
);
