import React, { useState } from 'react';

/// --- FORM FIELD FUNCTIONAL COMPONENT --- ///
const FormField = ({ id, label, value, errors = {}, setState }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        className={`input ${errors[id] ? 'has-error' : ''}`}
        type="text"
        name={id}
        id={id}
        value={value}
        onChange={handleChange}
      />
      <span className={`error-message ${id}`}>{errors[id]}</span>
      <br />
    </>
  );
};

/// --- FORM FUNCTIONAL COMPONENT --- ///
const Form = ({ handleSubmit }) => {
  const initialState = {
    name: '',
    job: '',
    errors: {},
  };

  const [state, setState] = useState(initialState);

  const onFormSubmit = (event) => {
    event.preventDefault();
    
    let errors = {};
    let formIsValid = true;

    if (state.name === '') {
      formIsValid = false;
      errors['name'] = 'Enter a name.';
    }

    if (state.job === '') {
      formIsValid = false;
      errors['job'] = 'Enter a job.';
    }

    if (formIsValid) {
      handleSubmit(state);
      setState(initialState);
    } else {
      setState((prevState) => ({
        ...prevState,
        errors,
        formIsValid,
      }));
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <FormField
        id="name"
        label="Name"
        value={state.name}
        errors={state.errors}
        setState={setState}
      />
      <FormField
        id="job"
        label="Job"
        value={state.job}
        errors={state.errors}
        setState={setState}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
