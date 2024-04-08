// /characters: GET (retrieve all characters), POST (create a new character)
// /characters/:id: GET (retrieve a specific character), PUT (update a character), DELETE (delete a character)
// /items: GET (retrieve all items), POST (create a new item)
// /items/:id: GET (retrieve a specific item), PUT (update an item), DELETE (delete an item)


//DATABASE-----------------------------------------------------------

const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/mydatabase';

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB', err));
//change to actual database connection

//API CONNECT -------------------------------------------------------------------------
const express = require('express')
const app = express()

app.get('', (req, res) => {
  res.send('hello world')
})

app.listen(3000)