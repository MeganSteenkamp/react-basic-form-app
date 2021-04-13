"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
/// --- FORM FIELD FUNCTIONAL COMPONENT --- ///
var FormField = function (_a) {
    var id = _a.id, label = _a.label, value = _a.value, _b = _a.errors, errors = _b === void 0 ? {} : _b, setState = _a.setState;
    var handleChange = function (event) {
        var _a = event.target, name = _a.name, value = _a.value;
        setState(function (prevState) {
            var _a;
            return (__assign(__assign({}, prevState), (_a = {}, _a[name] = value, _a)));
        });
    };
    return (<>
      <label htmlFor={id}>{label}</label>
      <input className={"input " + (errors[id] ? 'has-error' : '')} type="text" name={id} id={id} value={value} onChange={handleChange}/>
      <span className={"error-message " + id}>{errors[id]}</span>
      <br />
    </>);
};
/// --- FORM FUNCTIONAL COMPONENT --- ///
var Form = function (_a) {
    var handleSubmit = _a.handleSubmit;
    var initialState = {
        name: '',
        job: '',
        errors: {},
    };
    var _b = react_1.useState(initialState), state = _b[0], setState = _b[1];
    var onFormSubmit = function (event) {
        event.preventDefault();
        var errors = {};
        var formIsValid = true;
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
        }
        else {
            setState(function (prevState) { return (__assign(__assign({}, prevState), { errors: errors,
                formIsValid: formIsValid })); });
        }
    };
    return (<form onSubmit={onFormSubmit}>
      <FormField id="name" label="Name" value={state.name} errors={state.errors} setState={setState}/>
      <FormField id="job" label="Job" value={state.job} errors={state.errors} setState={setState}/>
      <button type="submit">Submit</button>
    </form>);
};
exports.default = Form;
