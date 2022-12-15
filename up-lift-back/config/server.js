const express = require('express');
const app = express();
const http = require("http");
const cors = require('cors');
const { Server } = require("socket.io");

// const connectDB = require('./db');
// connectDB();
app.use(express.json({ extended: false }));
app.use(cors());

const server = http.createServer(app);
const io = new Server ( server, {
    cors: {
        // which url origin will be called
        origin: "http://localhost:3005",
        methods: [ "GET", "POST" ]
    }
});

io.on("connection", ( socket ) => {
    console.log(socket.id);

    socket.on("disconnect", () => {
        console.log("USER DISCONNECTED", socket.id);
    })
});

app.get('/', (req, res) => res.send('This is the API and it. Is. RUNNING!!'));
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`SERVER started on ${PORT}`));

//Define Routes
// app.use('/api/users', require('./routes/api/users'));
// app.use('/api/auth', require('./routes/api/auth'));
// app.use('/api/profile', require('./routes/api/profile'));
// app.use('/api/posts', require('./routes/api/posts'));
