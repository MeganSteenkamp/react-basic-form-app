import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            name: "",
            job: "",
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

        if (this.state.name === "") {
            formIsValid = false;
            errors["name"] = "Enter a name.";
        }

        if (this.state.job === "") {
            formIsValid = false;
            errors["job"] = "Enter a job.";
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
                <label htmlFor="name">Name</label>
                <input
                    className={
                        "input " +
                        (this.state.errors["name"] ? "has-error" : "")
                    }
                    type="text"
                    name="name"
                    id="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <span className="error-message name">
                    {this.state.errors["name"]}
                </span>
                <label htmlFor="job">Job</label>
                <input
                    className={
                        "input " + (this.state.errors["job"] ? "has-error" : "")
                    }
                    type="text"
                    name="job"
                    id="job"
                    value={this.state.job}
                    onChange={this.handleChange}
                />
                <span className="error-message job">
                    {this.state.errors["job"]}
                </span>
                <br />
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default Form;
