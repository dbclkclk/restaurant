var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;


var UserSchema   = new Schema({
    name: String,
    age: Number,
    allergies: [{   
    	type: mongoose.Schema.Types.ObjectId,
        ref: 'Allergy'
    }],
});

 
module.exports =  mongoose.model("User",UserSchema);