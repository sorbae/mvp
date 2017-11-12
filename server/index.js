const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const unsplash = require('./getRandomPhoto.js');
const db = require('../database/db.js');
const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`listening on port ${port}`));

app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.get('/dailyPic', (req, res) => {
  unsplash.getUnsplashPhoto()
  .then(photo => res.json(photo))
  .catch(err => console.error(err))
});

app.get('/usercollection', (req, res) => {
  db.fetchUserCollection()
  .then(collection => {
    res.json(collection)
  })
  .catch(err => console.log(err))
})

app.post('/usercollection', (req, res) => {
  db.createNewPhotoEntry(req.body.data)
  .then(result => res.json(result))
  .catch(err => console.log(err))
})
// app.post()
//   save received data to database
