import React, { Fragment } from "react";
import NavBar from "./navBar";
import { Link } from 'react-router-dom'; 

const WelcomePage = () => {

    return (
        <>
            <NavBar/>
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