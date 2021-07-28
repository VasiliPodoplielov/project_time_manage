import { useState } from 'react';

/**
 * example
 * const initial = [
 *  inputName: {
 *    value: 'inputValue',
 *  },
 *  inputName1: {
 *    value: 'inputValue2',
 *  },
 * ];
*/

export const useForm = (initialFormData) => {
  const initialState = {
    isFormValid: true,
    controls: {},
  };

  const formDataKeys = Object.keys(initialFormData);

  formDataKeys.forEach((key) => {
    initialState.controls[key] = {
      value: initialFormData[key].value,
      isTouched: false,
      isValid: true,
    };
  });

  const [form, setForm] = useState(initialState);

  const onChange = (e) => {
    const { value, name } = e.target;

    setForm({
      ...form,
      controls: {
        ...form.controls,
        [name]: {
          isTouched: true,
          value,
          isValid: true,
        },
      },
    });
  };

  const resetForm = () => {
    setForm(initialState);
  };

  return { form, onChange, resetForm };
};
