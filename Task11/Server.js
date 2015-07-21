

var express = require('express');
var app = express();
var request = require('request');
var fs = require("fs");


	
	app.get('/country', function (req, res) {
   fs.readFile( __dirname + "/" + "countries.txt", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

app.get('/country/:name', function (req, res) {
   fs.readFile( __dirname + "/" + "hotelList.txt", 'utf8', function (err, data) {
       data = JSON.parse( data );
       var country = data[ req.params.name ] 
       console.log( country );
       res.end( JSON.stringify(country));
   });
})

app.get('/:id', function (req, res) {
   fs.readFile( __dirname + "/" + "hotelInfornation.txt", 'utf8', function (err, data) {
       data = JSON.parse( data );
       var hotel = data["hotel_" + req.params.id] 
       res.end( JSON.stringify(hotel));
   });
})








var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
	




