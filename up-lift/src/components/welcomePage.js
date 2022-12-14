import React, { Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const WelcomePage = () => {

    return (
        <Fragment>
            {/* <h1>This should be the landing page - what the user sees FIRST</h1> */}
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <link
                    href="https://fonts.googleapis.com/css?family=Raleway"
                    rel="stylesheet"
                />
                <link
                    rel="stylesheet"
                    href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
                    integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
                    crossorigin="anonymous"
                />

                <link rel="stylesheet" href="css/style.css" />
                <title>Welcome To The Developer Connector</title>
            </head>
            <body>
                <nav class="navbar bg-dark">
                    <h1>
                        <Link to='/'><FontAwesomeIcon icon={faDumbbell} /> UpLift</Link>                        
                    </h1>
                    <ul>
                        <li><a href="register.html">Register</a></li>
                        <li><a href="login.html">Login</a></li>
                    </ul>
                </nav>
                <section class="landing">
                    <div class="dark-overlay">
                        <div class="landing-inner">
                            <h1 class="x-large">UpLift</h1>
                            <p class="lead">
                                Connect with others who enjoy to be active together. Share favorite workouts or motivational videos and lift each other up to become better than they were before!
                            </p>
                            <div class="buttons">
                                <Link to='/register' class="btn btn-primary">Sign Up</Link>
                                <Link to='/login' class="btn btn-light">Login</Link>               
                            </div>
                        </div>
                    </div>
                </section>
            </body>
        </Fragment>
    )
};

export default WelcomePage;