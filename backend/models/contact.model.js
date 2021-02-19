const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: false,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: false,
      trim: true,
    },
    message: {
      type: String,
      required: false,
      unique: false,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
