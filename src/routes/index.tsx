import React from 'react';

import { Switch, Route } from 'react-router-dom';

import AppProvider from '../hooks';

import Dashboard from '../pages/Dashboard';
import Import from '../pages/Import';
import SignIn from '../pages/Login';

const Routes: React.FC = () => (
  <AppProvider>
    <Switch>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/" exact component={SignIn} />
      <Route path="/import" component={Import} />
    </Switch>
  </AppProvider>
);

export default Routes;
