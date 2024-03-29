import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { logout } from '../../actions/auth';

const NavBar = ({
    auth: {
        isAuthenticated, loading
    }, logout
}) => {

    // create an auth that we can reflect and change this when someone signs in

    // ternary to change the view 

    return (
        <>
            <nav className="navbar bg-dark">
                <h1>
                    <Link to='/'><FontAwesomeIcon icon={faDumbbell} /> UpLift</Link>
                </h1>
                <ul>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
        </>
    )
}

NavBar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {logout})(NavBar);