const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models'); // Import ProductTag from models

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
    try {
      const tags = await Tag.findAll({
        include: [
          {
            model: Product,
            through: ProductTag
          }
        ]
      });
      res.json(tags);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  });
  
  // GET a single tag by its ID along with associated product data
  router.get('/:id', async (req, res) => {
    try {
      const tag = await Tag.findByPk(req.params.id, {
        include: [
          {
            model: Product,
            through: ProductTag
          }
        ]
      });
      if (!tag) {
        return res.status(404).json({ error: 'Tag not found' });
      }
      res.json(tag);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  });
  
  // Create a new tag
  router.post('/', async (req, res) => {
    try {
      const tag = await Tag.create(req.body);
      res.status(201).json(tag);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  });
  
  // Update a tag's name by its ID
  router.put('/:id', async (req, res) => {
    try {
      const tag = await Tag.findByPk(req.params.id);
      if (!tag) {
        return res.status(404).json({ error: 'Tag not found' });
      }
      await tag.update(req.body);
      res.json(tag);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  });
  
  // Delete a tag by its ID
  router.delete('/:id', async (req, res) => {
    try {
      const tag = await Tag.findByPk(req.params.id);
      if (!tag) {
        return res.status(404).json({ error: 'Tag not found' });
      }
      await tag.destroy();
      res.sendStatus(204);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  });
  
  module.exports = router;
