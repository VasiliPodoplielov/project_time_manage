import React from 'react';
import { connect } from 'react-redux';
import ProjectsListComponent from './ProjectsListComponent';

const ProjectsListContainerInner = ({ projects }) => (
  <ProjectsListComponent
    projects={projects}
  />
);

const mapStateToProps = (state) => ({
  projects: state.projects.projects,
});

export const ProjectsListContainer = connect(mapStateToProps, null)(ProjectsListContainerInner);
