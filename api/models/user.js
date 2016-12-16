
var Waterline = require('waterline');
var sailsMemoryAdapter = require('sails-mongo');

var orm = new Waterline();


var User = Waterline.Collection.extend({

  identity: 'user',
  connection: 'mongoConnection',

  attributes: {
    name: {type:"string",required:true},
    age: {type:"integer",required:false},
    // Add a reference to allergy
    allergies: {
      collection: 'allergy',
      via: 'users',
      dominant:true
    }
  }
});



module.exports = User;