const express = require('express');
const Book = require('../models/Book');

const router = express.Router();

// Add Book Route
router.post('/add', async (req, res) => {
  const { title, author, categoryId } = req.body;

  try {
    const newBook = new Book({ title, author, categoryId });
    await newBook.save();

    res.status(201).json({ message: 'Book added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding book' });
  }
});

module.exports = router;
