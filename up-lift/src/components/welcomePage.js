import React, { Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const WelcomePage = () => {

    return (
        <>
            <nav class="navbar bg-dark">
                <h1>
                    <Link to='/'><FontAwesomeIcon icon={faDumbbell} /> UpLift</Link>
                </h1>
                <ul>
                    <li><Link to="/register">Register</Link></li>                    
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
            <section className="landing">
                <div className="dark-overlay">
                    <div className="landing-inner">
                        <h1 className="x-large">UpLift</h1>
                        <p className="lead">
                            Connect with others who enjoy to be active together. 
                            Share favorite workouts or motivational videos and
                            lift each other up to become better than they were before!
                        </p>
                        <div className="buttons">
                            <Link to="/register" className="btn btn-primary">Sign Up</Link>
                            <Link to="/login" className="btn btn-light">Login</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default WelcomePage;