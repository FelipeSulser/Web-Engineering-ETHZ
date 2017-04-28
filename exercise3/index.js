  var express = require('express');
  var app = express();
  var http = require('http').Server(app);
  var io = require('socket.io')(http);
  var fs = require('fs');

  app.use(express.static('public'));

  http.listen(8080, function() {
    console.log('listening on *:8080');
  });

  var remoteList = {};
  var screenList = {};
  var availScreens = {};


  io.on('connection', function(socket) {
    var userId;
    var type;
    var myname;
    socket.on('remoteConnection', function() {
      console.log("A remote was connected");
      type = "remote";
      key = Object.keys(screenList)
      remoteList[socket.id] = {}
      for(i = 0;i < key.length;i++){
        remoteList[socket.id][key[i]] = 1
      }
      screen_names = Object.keys(availScreens).map(function(key) {
        return availScreens[key];
      });
      socket.emit('changescreens', screen_names);
    });

    socket.on("image_changed", function(image_idx) {
      console.log("Sending image")
      remote_id = socket.id
      screen_ids = Object.keys(screenList)
      idx = 0
      for (i = 0; i < image_idx.length; i++) {
        key = screen_ids[i]
        console.log(remoteList[remote_id][key])
        if (remoteList[remote_id][key] == 0) {
          io.to(key).emit('showImage', image_idx[idx])
          idx += 1
        }
      }
    });

    socket.on("toggle_switch", function(id) {
      //Search for the socket_id of the screen
      socket.broadcast.emit('undoconnection',id);
      keys = Object.keys(availScreens)
      screen_id = 0.0
      for (i = 0; i < keys.length; i++) {
        screen_id = keys[i]
        if (availScreens[screen_id] === id) {
          remoteList[socket.id][screen_id] = 1 - remoteList[socket.id][screen_id]
          if (remoteList[socket.id][screen_id] == 1) {
            console.log("Clearing Image")
            io.to(screen_id).emit("clear_image")
          } else {
            console.log("Setting Image")
          }
          remote_keys = Object.keys(remoteList)
          for(var k in remoteList){
            console.log(socket.id);
            console.log(k);
            console.log(k === socket.id);
            if(k === socket.id){
              continue;
            }else{
              remoteList[k][screen_id] = 1;
            }
          }
          break
        }
      }
    });



    socket.on('screenConnection', function(name) {
      console.log("A screen was connected");

      type = "screen";
      screenList[socket.id] = 1;
      availScreens[socket.id] = name;
      //Add Screen to all remotes
      remote_socket_ids = Object.keys(remoteList)
      for (i = 0; i < remote_socket_ids.length; i++) {
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

    socket.on('disconnect', function() {
      if (type === "remote") {
        console.log("Disconnected Remote")
        screen_id = Object.keys(screenList)
        for (i = 0; i < screen_id.length; i++) {
          if (remoteList[socket.id][screen_id[i]] == 0) {
            io.to(screen_id[i]).emit("clear_image")
          }
        }
        delete remoteList[socket.id];

        //broadcast connected screens of disconnection
      }
      if (type === "screen") {
        console.log("Disconnected Screen  ")
        remote_socket_ids = Object.keys(remoteList)
        //Broadcast remotes of screen disconnection
        delete screenList[socket.id];
        delete availScreens[socket.id];
        remote_socket_ids = Object.keys(remoteList)
        for (i = 0; i < remote_socket_ids.length; i++) {
          key = remote_socket_ids[i]
          delete remoteList[key][socket.id];
        }
        screen_names = Object.keys(availScreens).map(function(key) {
          return availScreens[key];
        });
        console.log(screen_names)
        io.emit('changescreens', screen_names);
      }
    })
  });
