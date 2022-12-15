import React, { Fragment } from "react";
import io from "socket.io-client";
import { useState } from "react";

const socket = io.connect("http://localhost:3005");

const FeedPage = () => {

    return (
        <Fragment>
            <div className="profile-grid my-1">
                <h2>this should be where we are see the feed</h2>
                <div className="profile-exp bg-white p-2">

                </div>
            </div>            
        </Fragment>
    )
};

export default FeedPage;