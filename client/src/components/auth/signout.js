import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import PropTypes from 'prop-types';

class Signout extends Component {

    componentWillMount(){
        this.props.signoutUser();
    }

    render() {
        return (
            <div className="col-md-12">
                Sorry, to see you go...
            </div>
        );
    }
}

Signout.propTypes = {};
Signout.defaultProps = {};

export default connect(null, actions)(Signout);
