import React from 'react';
import { Link } from 'react-router-dom';
import classes from './CreateProject.module.css';

const CreateProjectContainer = ({ controls, onChange, onSubmit }) => (
  <div className={`card border-dark mb-3 ${classes.container}`}>
    <div className="card-header">
      <p style={{ marginBottom: 0 }}>Please fill fields below and press save.</p>
    </div>
    <form className={classes.form}>
      <fieldset>
        <div className="form-group">
          <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={controls.title.value}
            onChange={onChange}
          />
          <small id="title" className="form-text text-danger">Validation error</small>
        </div>
        <div className="form-group">
          <label htmlFor="description" className="form-label mt-4">Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            rows="3"
            value={controls.description.value}
            onChange={onChange}
          />
        </div>
        <div className={`form-group d-flex justify-content-center ${classes.buttonGroup}`}>
          <Link to="/">
            <button type="button" className={`btn btn-warning ${classes.button}`}>Cancel</button>
          </Link>
          <button
            type="button"
            className={`btn btn-primary ${classes.button}`}
            onClick={onSubmit}
          >
            Save
          </button>
        </div>
      </fieldset>
    </form>
  </div>
);

export default CreateProjectContainer;
