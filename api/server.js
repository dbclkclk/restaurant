var express = require("express");
var server = express();
var bodyParser = require('body-parser');
var models = require('./config');

var Foursquare = require("./custom_modules/custom_foursquare");



models.waterline.initialize(models.config, function(err, modelss) {
	if(err) throw err;
  

	var router = express.Router(); 



	server.use(bodyParser.urlencoded({ extended: true }));
	server.use(bodyParser.json());



	router.get('/products', function(req, res){

		
		modelss.collections.user.findOne({id:req.query.userid}).populate("allergies").exec(function(err,user){
			
			var allergyIds = user.allergies.map((a) => (a.id));

			modelss.collections.product.find().populate("allergies",{id:allergyIds}).exec(function(err,products){

				res.json(products);
			});


		});
	} );



	router.get('/allergies', function(req, res){

		modelss.collections.allergy.find().exec(function(err,allergies){
			res.json(allergies);

		});
	} );


	router.post('/user', function(req, res){

		if(req.id)
			throw new Error("Id for this user, shouldn't be set");

			modelss.collections.user.create(req.body).exec(function(err,user){

			if(!err)
			{
				if(req.body.allergies)
				{
					user.allergies.add(req.body.allergies);

					user.save(function(err)
					{
					    var result = null;
						if(err)
							result = err;
						else
							result = "/user:"+user.id;
						res.json(result);	
					});
				}
				else
				{
					result = "/user:"+user.id;
					res.json(result);	
				}
			}
			else
			{
				res.json(err)	
			}


			
		});

	});


	router.post('/foursquare/explore', function(req, res){

	    Foursquare.Venues.explore(req.body.lat, req.body.lng, req.body.near, req.body,null, function (error, data) {
	        var result = null;
	        if(error) {
	          result = error.message;
	        }
	        else {
	          result = data;

	        }
	        res.json(result);
	      });
	} );



	router.post('/foursquare/search', function(req, res){

	    Foursquare.Venues.search(req.body.lat, req.body.long, req.body.near, req.body,null, function (error, data) {
	        var result = null;
	        if(error) {
	          result = error.message;
	        }
	        else {
	          result = data;

	        }
	        res.json(result);
	      });
	} );



	router.post('/foursquare/suggestcompletion', function(req, res){

	    Foursquare.Venues.getSuggestcompletion(req.body.lat, req.body.long, req.body.query, req.body,null, function (error, data) {
	        var result = null;
	        if(error) {
	          result = error.message;
	        }
	        else {
	          result = data;

	        }
	        res.json(result);
	      });
	} );



	router.get('/foursquare/categories', function(req, res){

	    Foursquare.Venues.getCategories(null,null, function (error, data) {
	        var result = null;
	        if(error) {
	          result = error.message;
	        }
	        else {
	          result = data;

	        }
	        res.json(result);
	      });
	} );



	router.post('/foursquare/trending', function(req, res){

	    Foursquare.Venues.getTrending(req.body.lat,req.body.lng, req.body,null,function (error, data) {
	        var result = null;
	        if(error) {
	          result = error.message;
	        }
	        else {
	          result = data;

	        }
	        res.json(result);
	      });
	} );




	router.post('/foursquare/photos', function(req, res){

	    Foursquare.Venues.getPhotos(req.body.VENUE_ID,req.body.group,req.body,null,function (error, data) {
	        var result = null;
	        if(error) {
	          result = error.message;
	        }
	        else {
	          result = data;

	        }
	        res.json(result);
	      });
	} );


	router.post('/foursquare/events', function(req, res){

	    Foursquare.Venues.getEvents(req.body.VENUE_ID,null,function (error, data) {
	        var result = null;
	        if(error) {
	          result = error.message;
	        }
	        else {
	          result = data;

	        }
	        res.json(result);
	      });
	} );



	router.post('/foursquare/likes', function(req, res){

	    Foursquare.Venues.getLikes(req.body.VENUE_ID,null,function (error, data) {
	        var result = null;
	        if(error) {
	          result = error.message;
	        }
	        else {
	          result = data;

	        }
	        res.json(result);
	      });
	} );


	router.post('/foursquare/nextvenues', function(req, res){

	    Foursquare.Venues.getNextVenues(req.body.VENUE_ID,null,function (error, data) {
	        var result = null;
	        if(error) {
	          result = error.message;
	        }
	        else {
	          result = data;

	        }
	        res.json(result);
	      });
	} );



	router.post('/foursquare/hours', function(req, res){

	    Foursquare.Venues.getHours(req.body.VENUE_ID,null,function (error, data) {
	        var result = null;
	        if(error) {
	          result = error.message;
	        }
	        else {
	          result = data;

	        }
	        res.json(result);
	      });
	} );


	router.post('/foursquare/links', function(req, res){

	    Foursquare.Venues.getLinks(req.body.VENUE_ID,null,function (error, data) {
	        var result = null;
	        if(error) {
	          result = error.message;
	        }
	        else {
	          result = data;

	        }
	        res.json(result);
	      });
	} );




	router.post('/foursquare/menu', function(req, res){

	    Foursquare.Venues.getMenu(req.body.VENUE_ID,null,function (error, data) {
	        var result = null;
	        if(error) {
	          result = error.message;
	        }
	        else {
	          result = data;

	        }
	        res.json(result);
	      });
	} );




	router.post('/foursquare/tips', function(req, res){

	    Foursquare.Venues.getTips(req.body.VENUE_ID,req.body,null,function (error, data) {
	        var result = null;
	        if(error) {
	          result = error.message;
	        }
	        else {
	          result = data;

	        }
	        res.json(result);
	      });
	} );




	router.post('/foursquare/listed', function(req, res){

	    Foursquare.Venues.getListed(req.body.VENUE_ID,req.body,null,function (error, data) {
	        var result = null;
	        if(error) {
	          result = error.message;
	        }
	        else {
	          result = data;

	        }
	        res.json(result);
	      });
	} );

	server.use('/api', router);
	var port = process.env.PORT || 8080;
  	// Start Server
	server.listen(port);
	console.log("Listening on port "+port);

});




