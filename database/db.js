const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/index.js');

mongoose.connection.on('error', console.error.bind(console, 'connection error'));
mongoose.connection.once('open', function() { console.log('Database connected!') })

const photoEntry = mongoose.Schema({
  id: String,
  photographer: String,
  description: String,
  location: String,
  url: String,
  thumbnail: String,
  portfolio: String
})

let Photo = mongoose.model('Photo', photoEntry);

let createNewPhotoEntry = function(photo) {
  let photoDetails = {
    id: photo.id,
    photographer: photo.user.name,
    description: photo.description,
    location: `${photo.location.city}, ${photo.location.country}`,
    url: photo.urls.full,
    thumbnail: photo.urls.thumb,
    portfolio: photo.user.portfolio_url
  }

  new Photo(photoDetails).save(function(err) {
    if (err) return console.error(err);
  });

}
