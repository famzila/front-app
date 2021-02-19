const router = require('express').Router();
let Contact = require('../models/contact.model');
const nodemailer = require('nodemailer');

router.route('/send').post((req, res) => {
  const userName = req.body.name;
  const userMail = req.body.email;
  const message = req.body.message;

  const newContact = new Contact({ userName, userMail, message });
  newContact
    .save()
    .then(() => {
      res.json('Contact added!');
      const transport = nodemailer.createTransport({
        host: 'smtp.mailtrap.io',
        port: 2525,
        auth: {
          user: '798b7d75151926',
          pass: '6943f1e7181ee9',
        },
      });

      const mailOptions = {
        from: userMail,
        to: 'famzil.contact@gmail.com',
        subject: 'Contact',
        text: message,
        html: `<b>Hey there! </b><br> ${message} />`,
        attachments: [
          {
            filename: 'logo.png',
            path: 'assets/img/brand/logo.png',
          },
        ],
      };

      transport.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
      });
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
