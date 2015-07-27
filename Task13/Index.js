

var express = require("express");
var bodyParser = require("body-parser");
var socketio = require("socket.io");


var app = express();

var server = app.listen(8080);
var io = socketio.listen(server);


var staticDir = __dirname + "/public/";
app.use(bodyParser.urlencoded({extended: false}));

var messages = [];


app.get("/sockets", function(req, res){
	res.sendFile(staticDir + "index_io.html");
});


app.get("/messages", function(req, res){
	res.json(messages);
});

app.post("/messages", function(req, res){
	var message = req.body;
	messages.push(message);
	res.json(message);
})

io.on("connection", function(socket){
	
	console.log("Client connected");
	
	socket.on("disconnected", function(msg){
		console.log("Client disconnected");
	});
	
	socket.on("chat message", function(msg){
		messages.push(msg);
		io.emit("chat message", msg);
	});
	
	socket.emit("chat history", messages);
	
	
})