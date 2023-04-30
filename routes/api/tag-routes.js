const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      // attributes:[]
      include:[Product]    
  
    }).catch((err) => {
      return res.status(404).json(err);
    });
    return res.status(200).json(tagData);
  } catch (error) {
    return res.status(500).json(error);
  }
  
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id,{
      // attributes:[]
      include:[Product]    
  
    }).catch((err) => {
      return res.status(404).json(err);
    });
    return res.status(200).json(tagData);
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    if (req.body) {
      
      // if (category_name) {
        const resultData = await Tag.create(req.body);
      // }      
      return res.status(200).json(resultData);
    }
    return res.status(400).send("Missing Request Body");
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value

});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value

});

module.exports = router;
