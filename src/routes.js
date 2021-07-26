import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ProjectSelectionPage } from './application/pages/ProjectSelectionPage';
import { CreateProject } from './application/pages/CreateProject';

export const ROUTES = (
  <Switch>
    <Route path="/" exact component={ProjectSelectionPage} />
    <Route path="/create-project" component={CreateProject} />
  </Switch>
);
