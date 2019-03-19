const express = require('express');
const db = require('../data/db');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    res.status(200).json();
  } catch (error) {
    res.status(500).json();
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).json();
  } catch (error) {
    res.status(500).json();
  }
});

router.post('/', async (req, res) => {
  try {
    const { body: post } = req;
    if (!post.title || !post.contents) {
      res.status(400).json({ errorMessage: 'Please provide title and contents for the post.' });
    } else {
      const { id: newPostId } = await db.insert(post);
      const newPost = await db.findById(newPostId);
      res.status(201).json(newPost);
    }
  } catch (error) {
    res.status(500).json({ error: 'There was an error while saving the post to the database' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).json();
  } catch (error) {
    res.status(500).json();
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).json();
  } catch (error) {
    res.status(500).json();
  }
});

module.exports = router;
