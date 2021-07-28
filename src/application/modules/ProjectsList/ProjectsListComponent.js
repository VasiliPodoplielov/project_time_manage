import React from 'react';
import { ProjectItem } from '../ProjectItem';
import classes from './ProjectsList.module.css';
import { generateId } from '../../../packages/utils/generateId';

const ProjectsListComponent = ({ projects }) => (
  <div className={classes.wrapper}>
    {projects.map((project) => (
      <ProjectItem
        key={generateId('project')}
        project={project}
      />
    ))}
  </div>
);

export default ProjectsListComponent;
