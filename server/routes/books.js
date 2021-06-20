let router = require('express').Router();
const path = require('path');
let Book = require('../models/book.model');
let SentBook = require('../models/sent-book.model');
const nodemailer = require('nodemailer');

// Add a book to the database
router.route('/add').post((req, res) => {
  const name = req.body.name;
  const title = req.body.title;
  const content = req.body.content;
  const price = req.body.price;
  const available = req.body.available;

  const newBook = new Book({
    name,
    title,
    content,
    price,
    available,
  });

  // Add email to DB
  newBook
    .save()
    .then(() => console.log('Book added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Send book
router.route('/send').post((req, res) => {
  const email = req.body.email;
  const name = req.body.name;

  const newSentBook = new SentBook({
    name,
    email,
  });

  // Save email
  newSentBook
    .save()
    .then(() => console.log('Book added!'))
    .catch((err) => res.status(400).json('Error: ' + err));

  //Send email
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.REACT_APP_EMAIL,
      pass: process.env.REACT_APP_EMAIL_PASS,
    },
  });

  let mailOptions = {
    from: 'famzil.contact@gmail.com',
    to: email,
    subject: `[FRONT]- Here is your e-Book!`,
    html: `Enjoy learning!`,
    attachments: [
      {
        filename: `${name}.pdf`,
        path: path.join(__dirname, `../../src/assets/books/${name}.pdf`),
        contentType: 'application/pdf',
      },
    ],
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      res.json(err);
    } else {
      res.json(info);
    }
  });
});

module.exports = router;
