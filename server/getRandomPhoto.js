const rp = require('request-promise');
const config = require('../config.js');

let getUnsplashPhoto = function(query) {
  let unsplash = {
    url: 'https://api.unsplash.com/photos/random',
    headers: {
      Authorization: `Client-ID ${config.CONFIG.AUTHORIZATION}`,
    },
    query: query
  };

  return rp(unsplash)
    // .then(function(photo) {
    //   console.log(photo);
    // })
    // .catch(function(err) {
    //   console.log('Get error occured: ', err);
    // })
}
