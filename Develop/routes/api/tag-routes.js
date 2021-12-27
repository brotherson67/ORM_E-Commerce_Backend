const router = require('express').Router();
const { DataTypes } = require('sequelize/types');
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll()
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err)
    });
});

router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(dbUserData => {
    if(!dbUserData) {
      res.status(404).json({ message: 'There was not a tag found with that data'})
    }
  })
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No tag was found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
