import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ProjectSelectionPage } from './application/pages/ProjectSelectionPage';

export const ROUTES = (
  <Switch>
    <Route path="/" component={ProjectSelectionPage} />
  </Switch>
);
