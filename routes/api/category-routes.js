const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      // attributes:[]
      include:[Product]    
  
    }).catch((err) => {
      return res.status(404).json(err);
    });
    return res.status(200).json(categoryData);
  } catch (error) {
    return res.status(500).json(error);
  }
  
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {

    if (req.params.id) {
      
      const categoryData = await Category.findByPk(req.params.id,{
        // attributes:[]
        include:[Product],  
        // where:{
        //   id: req.params.id,
        // }
      }).catch((err) => {
        return res.status(404).json(err);
      });
      return res.status(200).json(categoryData);

    }

    return res.status(400).send('Missing Id');

    
  } catch (error) {
    return res.status(500).json(error);
  }

});

router.post('/', async (req, res) => {
  // create a new category
  try {
    if (req.body) {
      const {category_name} = req.body;
      // if (category_name) {
        const resultData = await Category.create({category_name});
      // }      
      return res.status(200).json(resultData);
    }
    return res.status(400).send("Missing Request Body");
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  
  if (req.params.id) {
   
    // return res.status(400).send("Missing the Id");
  }

  // create a new category
  try {
    if (req.body) {
      const {category_name} = req.body;
      // if (category_name) {
        const result = await Category.update(
          { 
          "category_name": category_name,},{
         where:{
          id:`${req.params.id}`
         }
         } );
        // The database now has "Ada" for name, but still has the default "green" for favorite color
        // await Category.save();
        // Now the database has "Ada" for name and "blue" for favorite color
      // }      
      return res.status(200).json(result);
    }
    return res.status(400).send("Missing Request Body");
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
