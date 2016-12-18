var Foursquare = require("node-foursquare")(require("../config/foursquare"));

Foursquare.Venues.getNextVenues = function (venueId, accessToken, callback)
{

	 	var core = require('node-foursquare/lib/core')(require("../config/foursquare"));

		var path = require('path');

	    if (!venueId) {
	      callback(new Error('Venues.getNextVenues: venueId is required.'));
	      return;
	    }
	    Foursquare.Venues.getVenueAspect(venueId, 'nextvenues', {}, accessToken, callback);

}

module.exports = Foursquare;