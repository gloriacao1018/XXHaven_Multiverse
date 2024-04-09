// /characters: GET (retrieve all characters), POST (create a new character)
// /characters/:id: GET (retrieve a specific character), PUT (update a character), DELETE (delete a character)
// /items: GET (retrieve all items), POST (create a new item)
// /items/:id: GET (retrieve a specific item), PUT (update an item), DELETE (delete an item)

const express = require('express');
const mongoose = require('mongoose');
const BackgroundImage = require('./models/backgroundImage');
const ItemImage = require('./models/itemImage');
const CharacterImage = require('./models/characterImage');

const app = express();
const PORT = 3001; 

app.use(express.json());

//change to database name
mongoose.connect('mongodb://localhost:27017/INSERT-DATABASE-NAME', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Route to handle background image upload
app.post('/api/background', async (req, res) => {
  try {
    const { image } = req.body;
    const newBackgroundImage = new BackgroundImage({ image });
    await newBackgroundImage.save();
    res.status(201).json({ message: 'Background image uploaded successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to handle item image upload
app.post('/api/item', async (req, res) => {
  try {
    const { image } = req.body;
    const newItemImage = new ItemImage({ image });
    await newItemImage.save();
    res.status(201).json({ message: 'Item image uploaded successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to handle character image upload
app.post('/api/character', async (req, res) => {
  try {
    const { image } = req.body;
    const newCharacterImage = new CharacterImage({ image });
    await newCharacterImage.save();
    res.status(201).json({ message: 'Character image uploaded successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
