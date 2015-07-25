/**
 * HotelController
 *
 * @description :: Server-side logic for managing Hotels
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getHotel: function(req, res){
		Hotel.find(req.param("name")).exec(function(err, result){
			return res.send(result);
		})
	},
	addHotel: function(req, res){
		Hotel.create({country:req.param("name"), name: req.param("hotelName"), description: "someText"}).exec(function(err, hotel){
			console.log("loh");
			return res.send(hotel);
		})
	},
	deleteHotel: function(req, res){
		Hotel.destroy({name:req.param("hotels")}).exec(function(err){
			return res.send(err);
		})
	}
	
};

