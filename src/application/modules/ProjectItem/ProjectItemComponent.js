import React from 'react';

export const ProjectItemComponent = ({ project: { title, description } }) => (
  <div className="card border-light mb-3">
    <div className="card-header">{title}</div>
    <div className="card-body">
      <p className="card-text">
        {description}
      </p>
    </div>
  </div>
);
