const express = require('express');
const compression = require('compression');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();
const mongoose = require('mongoose');
const articlesRouter = require('./routes/articles.js');
const contactsRouter = require('./routes/contacts.js');
const booksRouter = require('./routes/books.js');

// Express port
const port = process.env.PORT || 5000;
const DB_URI =
  process.env.REACT_APP_DB_URI || 'mongodb://localhost:27017/frontDB';
mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// Open connection
const connection = mongoose.connection;
connection
  .once('open', function () {
    console.log('[DB]: Connected Successfully');
  })
  .on('error', function (error) {
    console.log('[DB]: Connection Failed: ', error);
  });
// start app
const app = express();

const shouldCompress = (req, res) => {
  if (req.headers['x-no-compression']) {
    // Will not compress responses, if this header is present
    return false;
  }
  // Resort to standard compression
  return compression.filter(req, res);
};

// Compress all HTTP responses
app.use(
  compression({
    // filter: Decide if the answer should be compressed or not,
    // depending on the 'shouldCompress' function above
    filter: shouldCompress,
    // threshold: It is the byte threshold for the response
    // body size before considering compression, the default is 1 kB
    threshold: 0,
  }),
);

// CORS
app.use(cors());
// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/articles', articlesRouter);
app.use('/contacts', contactsRouter);
app.use('/books', booksRouter);

app.use(express.static(path.join(__dirname, '../build')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
