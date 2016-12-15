var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var Product = require("./app/models/product");
var User = require("./app/models/user");
var mongoose = require('mongoose');


var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } }; 



var mongodbUri = 'mongodb://database:27017/test';
 
mongoose.connect(mongodbUri, options);

var conn = mongoose.connection;             
 
conn.on('error', console.error.bind(console, 'connection error:'));  
 
conn.once('open', function() {


			app.use(bodyParser.urlencoded({ extended: true }));
			app.use(bodyParser.json());


			var port = process.env.PORT || 8080;        


			var router = express.Router();              

			router.put('/user:id', function(req, res){



			});

			router.get('/products', function(req, res){

			   	console.log(console.log(mongoose.connection.readyState));
			   	  Product.find(function(err, products) {
			            if (err)
			                res.send(err);

			            res.json(products);
			        });

			} );


			app.use('/api', router);


			app.listen(port);
			console.log('Listening on port ' + port);


                        
});



