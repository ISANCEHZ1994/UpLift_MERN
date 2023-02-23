import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const NavBar = () => {

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

export default NavBar;