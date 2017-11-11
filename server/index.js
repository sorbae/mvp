const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const unsplash = require('./getRandomPhoto.js');
const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`listening on port ${port}`));

app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.get('/hello', (req, res) => {
  unsplash.getUnsplashPhoto()
  .then((photo) => res.json(photo))
  .catch(err => console.error(err))
});

// app.post()
//   save received data to database

// getPhotoFromUnsplash
