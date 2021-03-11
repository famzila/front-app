let router = require('express').Router();
let Contact = require('../models/contact.model');
const nodemailer = require('nodemailer');

router.route('/send').post((req, res) => {
  const userName = req.body.name;
  const userMail = req.body.email;
  const message = req.body.message;

  const newContact = new Contact({
    name: userName,
    email: userMail,
    message: message,
  });
  Contact.find({ email: userMail })
    .limit(1)
    .then((result) => {
      if (result.length === 0) {
        newContact.save().then(() => {
          console.log('Contact is added!');
        });
      }
    })
    .catch((err) => res.status(400).json('Error: ' + err));

  //Send email
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'famzil.contact@gmail.com',
      pass: 'amzilamzil123',
    },
  });

  let mailOptions = {
    from: userMail,
    to: 'famzil.contact@gmail.com',
    subject: `[FRONT]-Contact from ${userName}`,
    html: `${message} <br/> from ${userMail}`,
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
