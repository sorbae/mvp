const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/collection');

mongoose.connection.on('error', console.error.bind(console, 'connection error'));
mongoose.connection.once('open', function() { console.log('Database connected!') })

const photoEntry = mongoose.Schema({
  id: {type: String, unique: true, index: true},
  photographer: String,
  description: String,
  url: String,
  thumbnail: String,
  portfolio: String
})

let Photo = mongoose.model('Photo', photoEntry);

module.exports.createNewPhotoEntry = function(photo) {
  let photoDetails = {
    id: photo.id,
    photographer: photo.user.name,
    description: photo.description,
    url: photo.urls.full,
    thumbnail: photo.urls.thumb,
    portfolio: photo.user.portfolio_url
  }

  return new Photo(photoDetails).save(function(err) {
    if (err) return console.error('error saving new photo entry: ', err)
  })
}

module.exports.fetchUserCollection = function() {
  return Photo.find(function(err, photos) {
    if (err) return console.error('error retrieving user collection: ', err)
  })
}

module.exports.removeEntryFromCollection = function(photoId) {
  return Photo.remove({id: photoId}, function(err) {
    if (err) return console.error('error deleting entry from user collection: ', err)
  })
}
