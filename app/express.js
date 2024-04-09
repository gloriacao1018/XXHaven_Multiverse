// /characters: GET (retrieve all characters), POST (create a new character)
// /characters/:id: GET (retrieve a specific character), PUT (update a character), DELETE (delete a character)
// /items: GET (retrieve all items), POST (create a new item)
// /items/:id: GET (retrieve a specific item), PUT (update an item), DELETE (delete an item)

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Connect to MongoDB (replace with actual connection string)
mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// Define a schema for uploaded images
const imageSchema = new mongoose.Schema({
    path: String, // Path to the image (e.g., backgroundImage, itemImage1, characterImage1)
    imageUrl: String // URL or path to the image file
});

const Image = mongoose.model('Image', imageSchema);

// Route to handle image uploads
router.post('/upload', async (req, res) => {
    const { path, imageUrl } = req.body;
    try {
        const existingImage = await Image.findOne({ path });
        if (existingImage) {
            // If an image with the same path already exists, update it
            existingImage.imageUrl = imageUrl;
            await existingImage.save();
            res.status(200).send('Image replaced successfully');
        } else {
            // If no existing image found, create a new one
            const newImage = new Image({ path, imageUrl });
            await newImage.save();
            res.status(201).send('Image uploaded successfully');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error uploading image');
    }
});

// Route to handle image replacement
router.put('/replace/:path', async (req, res) => {
    const { path } = req.params;
    const { imageUrl } = req.body;
    try {
        const updatedImage = await Image.findOneAndUpdate({ path }, { imageUrl }, { new: true });
        if (updatedImage) {
            res.status(200).send('Image replaced successfully');
        } else {
            res.status(404).send('Image not found');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error replacing image');
    }
});

module.exports = router;

//-------------------------------------------------------------------------------

const express = require('express');
const router = express.Router();

// Endpoint for managing character images
router.post('/characters', (req, res) => {
  // Logic to handle uploading character images
  res.status(200).json({ message: 'Character images uploaded successfully' });
});

// Endpoint for managing item images
router.post('/items', (req, res) => {
  // Logic to handle uploading item images
  res.status(200).json({ message: 'Item images uploaded successfully' });
});

// Endpoint for managing background images
router.post('/backgrounds', (req, res) => {
  // Logic to handle uploading background images
  res.status(200).json({ message: 'Background images uploaded successfully' });
});

module.exports = router;
