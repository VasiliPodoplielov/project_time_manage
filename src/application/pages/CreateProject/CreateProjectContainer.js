import React from 'react';
import CreateProjectComponent from './CreateProjectComponent';
import { useForm } from '../../../packages/hooks/useForm/useForm';

const initialState = {
  title: {
    value: '',
  },
  description: {
    value: '',
  },
};

export const CreateProjectContainer = () => {
  const { form, onChange } = useForm(initialState);

  const onSubmit = () => {
    console.log(form);
  };

  return (
    <CreateProjectComponent
      controls={form.controls}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};
