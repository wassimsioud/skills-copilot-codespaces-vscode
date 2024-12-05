// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const comment = require('./comments');

// Set up middleware
app.use(bodyParser.json());

// Set up routes
app.post('/comment', comment.create);

// Start server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
