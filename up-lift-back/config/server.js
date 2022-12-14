const express = require('express');
const app = express();
const connectDB = require('./db');
const http = require("http");
const { Server } = require("socket.io");

// connectDB();
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('This is the API and it. Is. RUNNING!!'));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
//Define Routes
// app.use('/api/users', require('./routes/api/users'));
// app.use('/api/auth', require('./routes/api/auth'));
// app.use('/api/profile', require('./routes/api/profile'));
// app.use('/api/posts', require('./routes/api/posts'));


