import React, {Component} from 'react';
import {reduxForm, Field} from "redux-form";
import PropTypes from 'prop-types';

class Signin extends Component {

    handleFormSubmit({email, password}) {
        console.log(email, password);
    }

    render() {
        const { handleSubmit, fields: { email, password} } = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <div>
                    <label>Email</label>
                    <div>
                        <Field
                            name="email"
                            component="input"
                            type="text"
                            className="form-control"
                            placeholder="Email here.."
                        />
                    </div>
                </div>
                <div>
                    <label>Password</label>
                    <div>
                        <Field
                            name="password"
                            component="input"
                            type="text"
                            className="form-control"
                            placeholder="Password"
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
        );
    }
}

Signin.propTypes = {};
Signin.defaultProps = {};

export default reduxForm({
    form: 'signin',
    fields: ['email', 'password'],
})(Signin);
