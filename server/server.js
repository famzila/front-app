const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();
const mongoose = require('mongoose');
const articlesRouter = require('./routes/articles.js');
const contactsRouter = require('./routes/contacts.js');

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

// CORS
app.use(cors());
// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../build')));
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build','index.html'));
  });
}

app.use('/articles', articlesRouter);
app.use('/contacts', contactsRouter);

// Setting up a route for our API
app.get('/api', (req, res) => {
  return res.status(200).json({
    status: 'success',
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
