import { CREATE_PROJECT } from './types';

const initialState = {
  projects: [],
};

export const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload],
      };
    default:
      return state;
  }
};
