// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category,{
  foreginKey:'id',
  onDelete:'CASCADE'
});
// Categories have many Products
Category.hasMany(Product,{
  foreginKey: 'id',
  onDelete: 'CASCADE'
})
// Products belongToMany Tags (through ProductTag)
ProductTag.hasMany(Tag,{
  foreginKey: 'id',
  onDelete: 'CASCADE'
}).belongsTo(Tag, {
  foreginKey : 'id',  
})

// Tags belongToMany Products (through ProductTag)
ProductTag.hasMany(Product,{
  foreginKey: 'id',
  onDelete: 'CASCADE'
}).belongsTo(Product, {
  foreginKey : 'id',  
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
