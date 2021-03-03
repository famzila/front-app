const router = require('express').Router();
let Article = require('../models/article.model.js');

router.get('/all', (req, res) => {
  Article.find()
    .then((articles) => res.json(articles))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const subtitle = req.body.subtitle;
  const cover = req.body.cover;
  const author = req.body.author;
  const description = req.body.description;
  const body = req.body.body;
  const duration = Number(req.body.duration);
  const type = req.body.type;
  const tags = Array(req.body.tags);

  const newArticle = new Article({
    title,
    cover,
    author,
    subtitle,
    description,
    body,
    duration,
    type,
    tags,
  });

  newArticle
    .save()
    .then(() => res.json('Article added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.get('/:type', (req, res) => {
  Article.find({ type: req.params.type })
    .then((articles) => res.json(articles))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:type&:duration').get((req, res) => {
  Article.find({ type: req.params.type }, { duration: req.params.duration })
    .then((articles) => res.json(articles))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:type&:duration&:tag').get((req, res) => {
  Article.find(
    { type: req.params.type },
    { duration: req.params.duration },
    { tag: req.params.tag },
  )
    .then((articles) => res.json(articles))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:type/:tags').get((req, res) => {
  Article.find({ type: req.params.type, tags: req.params.tags })
    .then((articles) => res.json(articles))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Article.findByIdAndDelete(req.params.id)
    .then(() => res.json('Article deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Article.findById(req.params.id)
    .then((articles) => {
      articles.title = req.body.title;
      articles.cover = req.body.cover;
      articles.author = req.body.author;
      articles.subtitle = req.body.subtitle;
      articles.description = req.body.description;
      articles.body = req.body.body;
      articles.duration = Number(req.body.duration);
      articles.type = Date.parse(req.body.type);
      articles.tags = Date.parse(req.body.tags);

      exercise
        .save()
        .then(() => res.json('Article updated!'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
