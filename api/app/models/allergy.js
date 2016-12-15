var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var Allergy = require('allergy');


var AllergySchema   = new Schema({
    name: String,
    severity: Number,
    severityDescription: String
});

 
module.exports =  mongoose.model("Allergy",AllergySchema);