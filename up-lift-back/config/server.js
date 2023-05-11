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
// changed the folder path to '/routes/API/{route}' so that there is less confusion with routes '/' => BEING MORE SPECIFIC
app.use('/api/users', require('../routes/api/users'));
app.use('/api/auth', require('../routes/api/auth'));
app.use('/api/posts', require('../routes/api/posts'));
app.use('/api/profile', require('../routes/api/profile'));

app.listen(PORT, () => console.log(`SERVER started on port ${PORT}`));

