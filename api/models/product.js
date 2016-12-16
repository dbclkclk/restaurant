
var Waterline = require('waterline');


var Product = Waterline.Collection.extend({

  identity: 'product',
  connection: 'mongoConnection',

  attributes: {
    name: "string",
    imageUrl: "string",
    description: "string",
    ingredients: [{name:"string"}],
    // Add a reference to allergy
    allergies: {
      collection: 'allergy',
      via: 'products',
      dominant:true
    }
  }
});

module.exports = Product;