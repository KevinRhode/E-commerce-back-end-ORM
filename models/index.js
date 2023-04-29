// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');


// Categories have many Products
Category.hasMany(Product,{
  foreginKey: 'id',
  onDelete: 'CASCADE'
});

// Products belongsTo Category
Product.belongsTo(Category,{
  foreginKey:'id',
  onDelete:'CASCADE'
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag,{through:'ProductTag'});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product,{through:'ProductTag'});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
