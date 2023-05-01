const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/', async (req, res) => {
  // find all products
  // be sure to include its associated Category and Tag data
  try {
    const productData = await Product.findAll({
      // attributes:[]
      include:[Category,Tag]     
  
    }).catch((err) => {
      res.status(404).json(err);
    });
    res.status(200).json(productData);
  } catch (error) {
    return res.status(500).json(error);
  }
  
});

// get one product
router.get('/:id', async (req, res) => {
  // find a single product by its `id`
  // be sure to include its associated Category and Tag data
  try {
    const productData = await Product.findByPk(req.params.id,{
      // attributes:[]
      include:[Category,Tag]     
  
    }).catch((err) => {
      res.status(404).json(err);
    });
    res.status(200).json(productData);
  } catch (error) {
    return res.status(500).json(error);
  }
});

// create new product
router.post('/', async (req, res) => {

  try {
    if(req.body.tagIds.length){
      const product = await Product.create(req.body);
      const productTagIdArr = req.body.tagIds.map((tag_id) => {
        return {
          product_id: product.id,
          tag_id,
        };
      });
      const productTags = await ProductTag.bulkCreate(productTagIdArr);
      return res.status(200).json({product,productTags});
            
    }
    if (req.body) {
      
      // if (category_name) {

        const resultData = await Product.create(req.body);

      // }      
      return res.status(200).json(resultData);
    }
    return res.status(400).send("Missing Request Body");
  } catch (error) {
    return res.status(500).json(error);
  }
  
});

// update product
router.put('/:id', async (req, res) => {
  // update product data

  try {
    const productData = await Product.update(req.body, { where: { id: req.params.id}}).catch((err) => {
      res.status(404).json(err);
    });
    const productTagData = await ProductTag.findAll({ where: { product_id: req.params.id } }).catch((err) => {
      res.status(404).json(err);
    });
    
    const productTagIds = productTagData.map(({ tag_id }) => tag_id);
    // create filtered list of new tag_ids
    const newProductTags = req.body.tagIds
      .filter((tag_id) => !productTagIds.includes(tag_id))
      .map((tag_id) => {
        return {
          product_id: req.params.id,
          tag_id,
        };
      });
    // figure out which ones to remove
    const productTagsToRemove = productTagData
      .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
      .map(({ id }) => id);

    // run both actions
    const TagUpdate = await Promise.all([
      ProductTag.destroy({ where: { id: productTagsToRemove } }),
      ProductTag.bulkCreate(newProductTags),
    ]);

    return res.status(200).json({productData,TagUpdate})

    // res.status(200).json(productData);
  } catch (error) {
    return res.status(500).json(error);
  }

});

// delete product
router.delete('/:id',async (req, res) => {
  // delete one product by its `id` value
  try {
    const resultDestoryData = await Product.destroy({
      where:{
        id:req.params.id
      }    
    }).catch((err) => {
      return res.status(404).json(err);
    });
    const resultDestoryDataTags = await ProductTag.destroy({ where: { product_id: req.params.id } }).catch((err) => {
      return res.status(404).json(err);
    });
    return res.status(200).json({resultDestoryData,resultDestoryDataTags});
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;
