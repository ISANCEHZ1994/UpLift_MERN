const express = require('express');
const app = express();
const http = require("http");
const cors = require('cors');
const { Server } = require("socket.io");
const connectDB = require('./db');

const PORT = process.env.PORT || 3001;
connectDB();

app.use(express.json({ extended: false }));
app.use(cors());

const server = http.createServer(app);

const io = new Server ( server, {
    cors: {
        // which url origin will be called
        origin: "http://localhost:3000",
        methods: [ "GET", "POST" ]
    }
});

io.on("connection", ( socket ) => {    
    console.log(`User Connected: ${socket.id}`);

    socket.on("join_room", (data) => {
        socket.join(data);
        console.log(`USER with ID: ${socket.id} joined room: ${data}`)
    });

    socket.on("disconnect", () => {
        console.log("USER DISCONNECTED", socket.id);
    });
});

app.get('/', (req, res) => res.send('This is the API and it. Is. RUNNING!!'));
app.use('/users',   require('../routes/users'));
app.use('/posts',   require('../routes/posts'));
app.use('/profile', require('../routes/profile'));

app.listen(PORT, () => console.log(`SERVER started on ${PORT}`));

// cant be the same port as express/node port..
server.listen( 3000, () => {
    console.log('server running using SOCKETIO')
});
