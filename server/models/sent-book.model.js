const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SentBookSchema = new Schema(
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
  },
  {
    timestamps: true,
  },
);

const SentBook = mongoose.model('SentBook', SentBookSchema);

module.exports = SentBook;
