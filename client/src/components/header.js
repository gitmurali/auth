import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
    render() {
        return (
            <div className="nav navbar-light">
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                        Sign in
                    </li>
                </ul>
            </div>
        );
    }
}

Header.propTypes = {};
Header.defaultProps = {};

export default Header;
