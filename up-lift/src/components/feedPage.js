import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
// import io from "socket.io-client";
import { useState } from "react";
import NavBar from "./layout/navBar";

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
            <NavBar/>
            <br></br>
            <br></br>
            <div className="profile-grid my-1">
                <h2>this should be where we are see the feed</h2>
                <div className="profile-exp bg-white p-2">
                    <>
                        <h3>Dashboard</h3>
                        
                    </>
                    <div>
                        Maybe something else should be here too..
                        <Link ></Link>
                    </div>
                    {/* <>
                        <h2>Join a Chat</h2>
                        <input type="text" placeholder="Room ID" onChange={(e) => setRoom(e.target.value)}/>
                        <input type="text" placeholder="name" onChange={(e) => setUsername(e.target.value)}/>
                        <button>Join The Room</button>
                    </> */}
                </div>
                
            </div>   
            <footer>sign out down here: <Link>SIGN OUT</Link></footer>         
        </Fragment>
    )
};

export default FeedPage;