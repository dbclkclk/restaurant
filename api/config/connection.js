
var sailsMongoAdapter = require('sails-mongo');

module.exports.connections = {
  adapters: {
    mongodb: sailsMongoAdapter
  },

  connections: {
    mongoConnection: {
      adapter: 'mongodb',
      host: process.env.MONGO_HOST,
      port:process.env.MONGO_PORT,
      database: process.env.MONGO_DB,
      user: process.env.MONGO_USER,
      password: process.env.MONGO_PASSWORD
    }
  }
};