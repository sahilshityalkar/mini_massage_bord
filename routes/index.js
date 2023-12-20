// routes/index.js

const express = require('express');
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  const author = req.body.author;
  const message = req.body.message;
  res.redirect('/');
  res.render('index', { title: 'Mini Messageboard', messages });
});

// routes/index.js

/* POST new message. */
router.post('/new', function(req, res, next) {
  // Accessing form data from req.body
  const author = req.body.author;
  const messageText = req.body.messageText;

  // Now you can use these variables as needed
  console.log('Author:', author);
  console.log('Message Text:', messageText);
  messages.push({
    text: messageText,
    user: author, // Assuming author corresponds to the user
    added: new Date()
  });
  // Redirect back to the home page or do something else
  res.redirect('/');
});

module.exports = router;
