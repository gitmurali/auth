import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import PropTypes from 'prop-types';

class Feature extends Component {

    componentWillMount() {
        this.props.dispatch(actions.fetchMessage());
    }
    render() {
        return (
            <div className="col-md-12">
                {this.props.message}
            </div>
        );
    }
}

Feature.propTypes = {};
Feature.defaultProps = {};

function mapStateToProps(state) {
    return {
        message: state.auth.message
    }
}

export default connect(mapStateToProps, actions)(Feature);
