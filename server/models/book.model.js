const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: false,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      unique: false,
      trim: true,
    },
    content: {
      type: Array,
      required: true,
      unique: false,
      trim: true,
    },
    price: {
      type: Number,
      required: false,
      unique: false,
      trim: true,
    },
    available: {
      type: Boolean,
      required: false,
      unique: false,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;
