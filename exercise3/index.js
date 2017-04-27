var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(express.static('public'));

http.listen(8080, function(){
    console.log('listening on *:8080');
});

var remoteList = {};
var screenList = {};
var availScreens = {};
var remote_ix = 1;
io.on('connection', function(socket){
	 var userId;
	 var type;
	 var myr_ix = remote_ix;
	 console.log(myr_ix);
	 remote_ix++;
	 console.log(availScreens);
	 socket.on('remoteConnection', function(){
	 	console.log("A remote was connected");
	 	console.log(socket.id);
	 	type = "remote";
	 	remoteList[socket.id] = 1;
	 	userId = socket.id;
	 	socket.emit('roomix',myr_ix);
	 	socket.emit('changescreens',availScreens);

	 });

	 socket.on('screenConnection',function(name){
	 	console.log("A screen was connected");
	 	console.log(socket.id);
	 	type = "screen";
	 	userId = socket.id;
	 	screenList[socket.id] = 1;
	 	availScreens[name] = 1;

	 	//Broadcast the remotes that a screen connected
	 });

	 socket.on('disconnect', function(){
	 	if(type === "remote"){
	 		delete remoteList[userId];
	 		console.log(myr_ix);
	 		//broadcast connected screens of disconnection
	 	}
	 	if(type === "screen"){
	 		//Broadcast remotes of screen disconnection
	 		delete screenList[userId];
	 	}
	 })
});