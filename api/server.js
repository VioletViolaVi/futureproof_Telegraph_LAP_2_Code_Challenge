const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

const newPostRoutes = require('./routes/newPost')
const postsRoutes = require('./routes/posts')

server.use('/books', booksRoutes)
server.use('/authors', authorsRoutes)

server.get('/', (req, res) => res.send('Welcome to anonymous poster'))

module.exports = server