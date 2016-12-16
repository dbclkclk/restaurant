
var sailsMongoAdapter = require('sails-mongo');

module.exports.connections = {
  adapters: {
    mongodb: sailsMongoAdapter
  },

  connections: {
    mongoConnection: {
      adapter: 'mongodb',
      host: process.env.MONGO_HOST ? process.env.MONGO_HOST : "database",
      port:process.env.MONGO_PORT ? process.env.MONGO_PORT : 27017,
      database: process.env.MONGO_DB ? process.env.MONGO_DB : "test",
      user: process.env.MONGO_USER ? process.env.MONGO_USER : "",
      password: process.env.MONGO_PASSWORD ? process.env.MONGO_PASSWORD : ""
    }
  }
};