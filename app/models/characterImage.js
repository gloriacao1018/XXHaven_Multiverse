const mongoose = require('mongoose');

const characterImageSchema = new mongoose.Schema({
  image: String,
});

module.exports = mongoose.model('CharacterImage', characterImageSchema);
