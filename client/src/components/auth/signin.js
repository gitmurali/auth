import React, {Component} from 'react';
import {reduxForm, Field} from "redux-form";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../../actions';

class Signin extends Component {

    handleFormSubmit({email, password}) {
        this.props.dispatch(actions.signinUser({email, password}));
    }

    renderAlert() {
        if(this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>Oops!</strong>{this.props.errorMessage}
                </div>
            )
        }
    }

    render() {
        const { handleSubmit, fields: { email, password} } = this.props;

        return (
            <div className="col-md-12">
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
                {this.renderAlert()}
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
            </div>
        );
    }
}

Signin.propTypes = {};
Signin.defaultProps = {};

Signin = connect(
    mapStateToProps,
    actions
)(Signin)

function mapStateToProps(state){
    return {errorMessage: state.auth.error}
}

export default reduxForm({
    form: 'signin',
    fields: ['email', 'password']
})(Signin);
