import { CREATE_PROJECT } from './types';

export const createProject = (project) => ({
  type: CREATE_PROJECT,
  payload: project,
});
