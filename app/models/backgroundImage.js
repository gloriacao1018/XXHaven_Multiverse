const mongoose = require('mongoose');

const backgroundImageSchema = new mongoose.Schema({
  image: String,
});

module.exports = mongoose.model('BackgroundImage', backgroundImageSchema);
