const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/index.js');

mongoose.connection.on('error', console.error.bind(console, 'connection error'));
mongoose.connection.once('open', function() { console.log('Database connected!') })

const photoEntry = mongoose.Schema({
  //
})

let Photo = mongoose.model('Photo', photoEntry);
