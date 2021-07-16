import React from 'react';
import { Link } from 'react-router-dom';
import { ProjectsList } from '../../modules/ProjectsList';
import classes from './ProjectsSelectionPage.module.css';

const ProjectsSelectionPageComponent = () => (
  <div className={classes.wrapper}>
    <div className={`card border-dark mb-3 ${classes.container}`}>
      <div className={`card-header ${classes.cardHeader}`}>
        <p className="h4" style={{ marginBottom: 0 }}>Choose the project or create the new one.</p>
        <Link to="/create-project">
          <button type="button" className="btn btn-primary">Create project</button>
        </Link>
      </div>
      <div className="card-body">
        <ProjectsList />
      </div>
    </div>
  </div>
);

export default ProjectsSelectionPageComponent;
