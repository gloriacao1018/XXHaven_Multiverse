const mongoose = require('mongoose');

const itemImageSchema = new mongoose.Schema({
  image: String,
});

module.exports = mongoose.model('ItemImage', itemImageSchema);
