const express = require('express');
const server = express();
const posts = require('./routes/posts');

const port = 4000;

server.use(express.json());
server.use('/api/posts', posts);

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
