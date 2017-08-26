import React, {Component} from 'react';
import { connect } from 'react-redux';
import {reduxForm, Field} from "redux-form";
import * as actions from '../../actions';
import PropTypes from 'prop-types';

class Signup extends Component {

    handleFormSubmit({email, password, passwordConfirm}) {
        console.log(email, password, passwordConfirm);
        // this.props.dispatch(actions.signinUser({email, password}));
    }

    renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
        <div>
            <div>
                <input {...input} placeholder={label} type={type} className="form-control"/>
                {touched && ((error && <div className="alert alert-danger">{error}</div>) || (warning && <span>{warning}</span>))}
            </div>
        </div>
    )

    render() {
        const { handleSubmit, fields: { email, password, passwordConfirm} } = this.props;

        return (
            <div className="col-md-12">
                <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                    <div className="row">
                        <label>Email</label>
                        <div>
                            <Field
                                name="email"
                                component={this.renderField}
                                type="text"
                                className="form-control"
                                placeholder="Email here.."
                            />
                        </div>
                    </div>
                    <div className="row">
                        <label>Password</label>
                        <div>
                            <Field
                                name="password"
                                component={this.renderField}
                                type="password"
                                className="form-control"
                                placeholder="password"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <label>Confirm Password</label>
                        <div>
                            <Field
                                name="passwordConfirm"
                                component={this.renderField}
                                type="password"
                                className="form-control"
                                placeholder="confirm password"
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Sign up</button>
                </form>
            </div>
        );
    }
}

Signup.propTypes = {};
Signup.defaultProps = {};

Signup = connect(
    null,
    actions
)(Signup)

// redux-form validate
function validate(formProps) {
    const errors = {};
    if(!formProps.email){
        errors.email = 'please enter a email';
    }
    if(!formProps.password) {
        errors.password = 'please enter a password';
    }
    if(!formProps.passwordConfirm) {
        errors.passwordConfirm = 'please enter a password confirmation';
    }
    if(formProps.password !== formProps.passwordConfirm) {
        errors.password = 'passwords must watch';
    }
    return errors;
}

export default reduxForm({
    form: 'signin',
    fields: ['email', 'password', 'passwordConfirm'],
    validate,
})(Signup);
