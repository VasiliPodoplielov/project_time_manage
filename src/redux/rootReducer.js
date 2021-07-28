import { combineReducers } from 'redux';
import { projectsReducer } from '../application/pages/CreateProject/projectsReducer';

export const rootReducer = combineReducers({
  projects: projectsReducer,
});
