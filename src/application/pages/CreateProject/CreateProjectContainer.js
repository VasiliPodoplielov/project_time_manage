import React from 'react';
import { connect } from 'react-redux';
import CreateProjectComponent from './CreateProjectComponent';
import { useForm } from '../../../packages/hooks/useForm/useForm';
import { createProject } from './actions';

const initialState = {
  title: {
    value: '',
  },
  description: {
    value: '',
  },
};

const CreateProjectContainerInner = (props) => {
  const { form, onChange, resetForm } = useForm(initialState);

  const onSubmit = () => {
    props.createProject({
      title: form.controls.title.value,
      description: form.controls.description.value,
    });

    resetForm();
  };

  return (
    <CreateProjectComponent
      controls={form.controls}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

const mapDispatchToProps = {
  createProject,
};

export const CreateProjectContainer = connect(
  null, mapDispatchToProps,
)(CreateProjectContainerInner);
