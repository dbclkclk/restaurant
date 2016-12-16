
var Waterline = require('waterline');
var sailsMemoryAdapter = require('sails-mongo');

var orm = new Waterline();

var Allergy = Waterline.Collection.extend({

  identity: 'allergy',
  connection: 'mongoConnection',

  attributes: {
    name: "string",
    severity: "integer",
    severityDescription: "string",

    users: {
      collection: 'user',
      via:"allergies"
    },
    products: {
      collection: 'product',
      via :"allergies"
    }
  }
});


module.exports = Allergy;
