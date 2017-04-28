var currentImage = 0; // the currently selected image
var imageCount = 7; // the maximum number of images available
var socket = 0.0;
var screens_connected = 0
var last_screendata = {}

function showImage(index) {
  // Update selection on remote
  currentImage = index;
  var images = document.querySelectorAll("img");
  document.querySelector("img.selected").classList.toggle("selected");
  images[index].classList.toggle("selected");
  /**
  Send the images
  **/
  url_to_send = []
  for (i = 0; i < screens_connected; i++) {
    console.log("Sending Iamge", socket.connected)
    idx_show = (index + i) % imageCount
    url_to_send.push(idx_show)
    //  socket.emit('image', { image: true, buffer: buf.toString('base64') })
  }

  socket.emit('image_changed', url_to_send)
}

function initialiseGallery() {
  var container = document.querySelector('#gallery');
  var i, img;
  for (i = 0; i < imageCount; i++) {
    img = document.createElement("img");
    img.src = "images/" + i + ".jpg";
    document.body.appendChild(img);
    var handler = (function(index) {
      return function() {
        showImage(index);
      }
    })(i);
    img.addEventListener("click", handler);
  }

  document.querySelector("img").classList.toggle('selected');
}

document.addEventListener("DOMContentLoaded", function(event) {
  initialiseGallery();

  document.querySelector('#toggleMenu').addEventListener("click", function(event) {
    var style = document.querySelector('#menu').style;
    style.display = style.display == "none" || style.display == "" ? "block" : "none";
  });
  connectToServer();
});

$(document).ready(function() {
  hooks();
});

function hooks() {
  //When button for screen is clicked, this is triggered
  $('body').on('click', 'li button', function() {
    socket.emit("toggle_switch", this.id)
    showImage(currentImage)
    if (this.innerHTML === "Connect") {
      this.innerHTML = "Disconnect"
      last_screendata[this.id] = 0
    } else {
      this.innerHTML = "Connect"
      last_screendata[this.id] = 1
    }

  });
}




function connectToServer() {
  socket = io.connect();
  console.log('check 1', socket.connected);
  socket.on('connect', function() {
    socket.emit('remoteConnection');
    console.log('check 2', socket.connected);

  socket.on('changescreens', function(screendata) {

      displayed = "";
      for (i = 0; i < screendata.length; i++) {
        name = screendata[i]
        status = "Connect"
        if(name in last_screendata){
          console.log("We already have this here")
          if(last_screendata[name] === 0){
            status = "Disconnect"
          }
        }else{
          last_screendata[name] = 1
        }
        displayed += "<li>" + name + " <button id='" + name + "'>"+ status + "</button></li>";
      }
      screens_connected = screendata.length
      $("#menu ul").html(displayed);
    });
    for(var k in last_screendata){
      if(k in screendata){
        continue;
      }else{
        delete last_screendata[k]
      }
    }
    console.log(last_screendata)

  });
  socket.on('connect_error', function() {
    displayed = "";
    $("#menu ul").html(displayed);
  });
  socket.on('undoconnection',function(id){
    $("#"+id).text('Connect');
  });
}
