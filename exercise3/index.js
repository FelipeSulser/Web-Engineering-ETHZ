var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var fs = require('fs');

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
	 var myname;
	 console.log(myr_ix);
	 remote_ix++;
	 console.log(availScreens);
	 socket.on('remoteConnection', function(){
	 	console.log("A remote was connected");
	 	console.log(socket.id);
	 	type = "remote";
	 	remoteList[socket.id] = screenList;
	 	userId = socket.id;

    screen_names = Object.keys(availScreens).map(function(key) {
      return availScreens[key];
    });
	 	socket.emit('changescreens',screen_names);
	 });

   socket.on("image_changed",function(image_url){
     console.log("Sending image")
     remote_id = socket.id
     screen_ids = Object.keys(screenList)
     idx = 0
     for (i = 0; i < image_url.length; i++) {
       key = screen_ids[i]
       if(remoteList[remote_id][key] == 0){
            io.to(key).emit('change_image',image_url[i])
       }
     }
   });

   socket.on("toggle_switch",function(id) {
     //Search for the socket_id of the screen
     keys = Object.keys(availScreens)
     screen_id = 0.0
     for(i = 0;i<keys.length;i++){
       if(availScreens[keys[i]] === id){
          remoteList[socket.id][keys[i]] = 1 - remoteList[socket.id][keys[i]]
          break
       }
     }
   });



	 socket.on('screenConnection',function(name){
	 	console.log("A screen was connected");
	 	console.log(socket.id);
	 	type = "screen";
	 	userId = socket.id;
	 	myname = name;
	 	screenList[socket.id] = 1;
	 	availScreens[socket.id] = name;
    //Add Screen to all remotes
    remote_socket_ids = Object.keys(remoteList)
    for(i = 0; i < remote_socket_ids.length; i++) {
      key = remote_socket_ids[i]
      remoteList[key][socket.id] = 1;
    }
	 	//Broadcast the remotes that a screen connected
    screen_names = Object.keys(availScreens).map(function(key) {
      return availScreens[key];
    });

    console.log(screen_names + " screen was added" + screen_names.length)
	 	io.emit('changescreens', screen_names);
	 });

	 socket.on('disconnect', function(){
	 	if(type === "remote"){
      console.log("Disconnected Remote")
	 		delete remoteList[socket.id];

	 		//broadcast connected screens of disconnection
	 	}
	 	if(type === "screen"){
      console.log("Disconnected Screen")
      remote_socket_ids = Object.keys(remoteList)
	 		//Broadcast remotes of screen disconnection
	 		delete screenList[socket.id];
	 		delete availScreens[socket.id];
      remote_socket_ids = Object.keys(remoteList)
      for(i = 0; i < remote_socket_ids.length; i++) {
        key = remote_socket_ids[i]
        delete remoteList[key][socket.id];
      }
      screen_names = Object.keys(availScreens).map(function(key) {
        return availScreens[key];
      });
      console.log(screen_names)
	 		io.emit('changescreens',screen_names);
	 	}
	 })
});
