const articles = require('./data/init_db.json');

const DB_URI =
  process.env.REACT_APP_DB_URI || 'mongodb://localhost:27017/frontDB';

mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection
  .once('open', function () {
    const arrayArticles = JSON.parse(articles);
    console.log(arrayArticles);
    // let collection = db.collection(`articles`);
    // await collection.insertAll(articles);
  })
  .on('error', function (error) {
    console.log('[DB]: Connection Failed: ', error);
  });
