import React, { Fragment } from "react";
import io from "socket.io-client";
import { useState } from "react";

// const socket = io.connect("http://localhost:3000");

const FeedPage = () => {

    // const [ username, setUsername ] = useState("");
    // const [ room, setRoom ] = useState("");

    // const joinRoom = () => {
    //     if( username !== "" && room !== "" ){
    //         socket.emit("join_room", room)
    //     };
    // };

    

    return (
        <Fragment>
            <div className="profile-grid my-1">
                <h2>this should be where we are see the feed</h2>
                <div className="profile-exp bg-white p-2">
                    
                    {/* <>
                        <h2>Join a Chat</h2>
                        <input type="text" placeholder="Room ID" onChange={(e) => setRoom(e.target.value)}/>
                        <input type="text" placeholder="name" onChange={(e) => setUsername(e.target.value)}/>
                        <button>Join The Room</button>
                    </> */}
                </div>
            </div>            
        </Fragment>
    )
};

export default FeedPage;