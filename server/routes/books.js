let router = require('express').Router();
const path = require('path');
let Book = require('../models/book.model');
let SentBook = require('../models/sent-book.model');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');

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

  sendMail(name, email)
    .then((result) => res.json(result))
    .catch((error) => res.json(error.message));
});

/**
 * Sending the email with ebook
 */
async function sendMail(name, email) {
  const CLIENT_EMAIL = process.env.REACT_APP_EMAIL;
  const CLIENT_ID = process.env.REACT_APP_EMAIL_CLIENT_ID;
  const CLIENT_SECRET = process.env.REACT_APP_EMAIL_CLIENT_SECRET;
  const REDIRECT_URI = process.env.REACT_APP_EMAIL_CLIENT_REDIRECT_URI;
  const REFRESH_TOKEN = process.env.REACT_APP_EMAIL_REFRESH_TOKEN;
  const OAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI,
  );

  OAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
  try {
    const accessToken = await OAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: CLIENT_EMAIL,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: `FRONT <${CLIENT_EMAIL}>`,
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

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
}

module.exports = router;
