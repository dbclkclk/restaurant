var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;


var ProductSchema   = new Schema({
    name: String,
    imageUrl: String,
    description: String,
    ingredients: [{name:String}],
    allergies: [{   
    	type: mongoose.Schema.Types.ObjectId,
        ref: 'Allergy'
    }],
    count: Number
});

 
module.exports =  mongoose.model("Product",ProductSchema);