const rp = require('request-promise');
const config = require('../config.js');

module.exports.getUnsplashPhoto = function() {
  let unsplash = {
    url: 'https://api.unsplash.com/photos/random',
    headers: {
      Authorization: `Client-ID ${config.CONFIG.AUTHORIZATION}`,
    }
  };

  return rp(unsplash)
}
