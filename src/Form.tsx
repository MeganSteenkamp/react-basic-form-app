import React, { FormEventHandler, useState } from 'react';
import { ICharacter } from './App';

interface iInitialState {
  character: ICharacter;
  errors: ICharacter;
}

interface IFormField {
  id: 'name' | 'job'; // String literal types required for indexing errors in html
  label: string;
  value: string;
  errors: ICharacter;
  setState: React.Dispatch<React.SetStateAction<iInitialState>>;
}

/// --- FORM FIELD FUNCTIONAL COMPONENT --- ///
const FormField: React.FC<IFormField> = ({
  id,
  label,
  value,
  errors,
  setState,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value }: { name: string; value: string } = event.target;

    setState((prevState) => ({
      ...prevState,
      character: {
        ...prevState.character,
        [name]: value,
      },
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
const Form: React.FC<{ handleSubmit: (character: ICharacter) => void }> = ({
  handleSubmit,
}) => {
  const initialState: iInitialState = {
    character: { name: '', job: '' },
    errors: { name: '', job: '' },
  };

  const [state, setState] = useState(initialState);

  const onFormSubmit: FormEventHandler<HTMLFormElement> = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    let errors: ICharacter = { name: '', job: '' }; // Error object has same format as ICharacter
    let formIsValid = true;
    const character = state.character;

    if (character.name === '') {
      formIsValid = false;
      errors.name = 'Enter a name.';
    }

    if (character.job === '') {
      formIsValid = false;
      errors.job = 'Enter a job.';
    }

    if (formIsValid) {
      handleSubmit(character);
      setState(initialState);
    } else {
      setState((prevState) => ({
        ...prevState,
        errors,
      }));
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <FormField
        id="name"
        label="Name"
        value={state.character.name}
        errors={state.errors}
        setState={setState}
      />
      <FormField
        id="job"
        label="Job"
        value={state.character.job}
        errors={state.errors}
        setState={setState}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
