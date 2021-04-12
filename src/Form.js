import React, { Component } from 'react';

const FormField = ({ id, label, value, errors = {}, handleChange }) => (
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

class Form extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      name: '',
      job: '',
      errors: {},
    };

    this.state = this.initialState;
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleValidation() {
    let formIsValid = true;
    let errors = {};

    if (this.state.name === '') {
      formIsValid = false;
      errors['name'] = 'Enter a name.';
    }

    if (this.state.job === '') {
      formIsValid = false;
      errors['job'] = 'Enter a job.';
    }

    this.setState({ errors: errors });

    return formIsValid;
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    if (this.handleValidation()) {
      this.props.handleSubmit(this.state);
      this.setState(this.initialState);
    }
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <FormField
          id="name"
          label="Name"
          value={this.state.name}
          errors={this.state.errors}
          handleChange={this.handleChange}
        />
        <FormField
          id="job"
          label="Job"
          value={this.state.job}
          errors={this.state.errors}
          handleChange={this.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
