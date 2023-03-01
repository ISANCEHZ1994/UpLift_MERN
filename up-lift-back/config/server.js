const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./db');
// const http = require("http");
// const { Server } = require("socket.io");

const PORT = process.env.PORT || 3001;
connectDB();

app.use(express.json({ extended: false }));
app.use(cors());

app.get('/', (req, res) => res.send('This is the API and it. Is. RUNNING!!'));
app.use('/users', require('../routes/users'));
app.use('/auth', require('../routes/auth'));
app.use('/posts', require('../routes/posts'));
app.use('/profile', require('../routes/profile'));

app.listen(PORT, () => console.log(`SERVER started on port ${PORT}`));

