
var sailsMongoAdapter = require('sails-mongo');

module.exports.connections = {
  adapters: {
    mongodb: sailsMongoAdapter
  },

  connections: {
    mongoConnection: {
      adapter: 'mongodb',
      host: 'database',
      port:27017,
      database: 'test'
    }
  }
};