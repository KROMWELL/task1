/**
 * CountryController
 *
 * @description :: Server-side logic for managing countries
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
 


module.exports = {
	
	getAll: function(req, res){
		Country.find().exec(function(err, result){
			return res.send(result);
			
		})
	},
	getCountry: function(req, res){
		Country.find({name:req.param("name")}).exec(function(err, result){
			return res.send(result);
			
		})
	},
	addCountry: function(req, res){
		
		var countryName = req.param("name");
		Country.create({name:countryName, description:"someText"}).exec(function(err, country){
			return res.send(country);
		});
		
	},
	badRequest: function(req, res){
             res.send('404 Not Found');
	},
	badTemplate: function(req, res){
             res.view('myTemplate');
	}
};


