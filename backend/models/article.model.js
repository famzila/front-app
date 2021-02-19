const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const articleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: false,
      trim: true,
      minlength: 3,
    },
    cover: {
      type: String,
      required: true,
      unique: false,
      trim: true,
    },
    subtitle: {
      type: String,
      required: true,
      unique: false,
      trim: true,
      minlength: 3,
    },
    author: {
      type: String,
      required: true,
      unique: false,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      unique: false,
      trim: true,
      minlength: 3,
    },
    body: {
      type: String,
      required: true,
      unique: false,
      trim: true,
      minlength: 3,
    },
    duration: {
      type: Number,
      required: true,
      unique: false,
      trim: true,
    },
    type: {
      type: String,
      required: true,
      unique: false,
      trim: true,
      minlength: 3,
    },
    tags: {
      type: Array,
      default: [],
      required: true,
      unique: false,
      trim: true,
      minlength: 3,
    },
  },
  {
    timestamps: true,
  },
);

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
