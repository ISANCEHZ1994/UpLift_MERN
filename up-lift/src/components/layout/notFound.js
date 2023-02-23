import React from "react";

const NotFound = () => {

    return (
        <>
            <h1 style={{'textAlign': 'center'}}>404 PAGE NOT FOUND</h1>
            <>
                <h1 className="x-large text-primary">
                    <i className="fas fa-exclamation-triangle" /> PAGE NOT FOUND
                </h1>
                <h3>Unfortunately the page you are looking for is not here..maybe the URL is incorrect or you don't have permissions..</h3>
                <br></br>
                <h3>Do it right my guy!</h3>
            </>
        </>
    )
};

export default NotFound;