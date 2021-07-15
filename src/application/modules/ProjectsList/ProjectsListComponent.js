import React from 'react';
import {ProjectItem} from "../ProjectItem";
import classes from './ProjectsList.module.css'

const ProjectsListComponent = () => {
  return (
    <div className={classes.wrapper}>
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
    </div>
  );
};

export default ProjectsListComponent;