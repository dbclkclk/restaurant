
var Waterline = require('waterline');
var config = require("./connection");

var orm = new Waterline();
var fs = require('fs');
var path      = require("path");

fs.readdirSync(__dirname+"/../models/").filter(function(file) {
    return (file.indexOf(".") !== 0);
  }).forEach(function(file) {
    var model = require(path.join(__dirname+"/../models/", file));
    orm.loadCollection(model);
  });

module.exports = {waterline: orm, config: config.connections};