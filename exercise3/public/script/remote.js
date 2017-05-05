var currentImage = 0; // the currently selected image
var imageCount = 7; // the maximum number of images available
var socket = 0.0;
var screens_connected = 0
var last_screendata = {}
var STATE = "NEUTR";
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

var t0 = 0

$(document).ready(function() {
  hooks();
  // Check if it is a smartphone
  if (window.DeviceOrientationEvent) {
    //$('#info').html("DeviceOrientation is supported")
    console.log("DeviceOrientation is supported");
    t0 = performance.now();
    handleDeviceOrientation()
  }
});

function handleDeviceOrientation(){
  window.addEventListener('deviceorientation', function(eventData){
    // gamma is the left-to-right tilt in degrees, where right is positive (means next image)
    var tiltLR = eventData.gamma;

    // beta is the front-to-back tilt in degrees, where front is positive
    var tiltFB = eventData.beta;
    // alpha is the compass direction the device is facing in degrees
    var dir = eventData.alpha
    //$('#smallinfo').html('<p> '+ str(tiltLR) + '</p><p>' + tiltFB + '</p> <p>' + dir + '</p>')
    // call our orientation event handler
    var t1 = performance.now()
    if(tiltLR < 2 || tiltLR > -2){
      STATE = 'NEUTR';
    }
    if((t1 - t0) > 100){
      t0 = t1
      deviceOrientationHandler(tiltLR, tiltFB, dir);
      prev_tlr = tiltLR
      //$('#gamma').html(tiltLR)
      //$('#beta').html(tiltFB)
      //$('#alpha').html(dir)
    } 
  }, false);
}

var prev_tlr = 0
var prev_tfb = 0

function deviceOrientationHandler(tiltLR, tiltFB, dir){
  sens = 20
   //$("#debugdata").html(tiltLR - prev_tlr+" and "+tiltLR);

   //To make it jerk-only comment the && second case
  if(tiltLR - prev_tlr > sens && tiltLR > sens){
    if(STATE === 'NEUTR'){
      STATE = 'NEXT';
      showImage((currentImage + 1) % imageCount)

    }

  } else if(tiltLR - prev_tlr <= -sens && tiltLR <= -sens){
    if(STATE === 'NEUTR'){
        STATE = 'PREV';
       //$("#debugdata").html(tiltLR);
      next_image = (currentImage - 1) < 0 ? imageCount - 1 : currentImage - 1
      showImage(next_image)
    }
  }else{
    
  }

  // ZOOM IN --> [-10,-20] (-1) and [-20,-inf] (-2)
  //ZOOM out --> [10,20] (1) and [20,inf] (2)
  // (0) is normal image zoom factor
  var zoom_factor;
  if(tiltFB< -20){
    zoom_factor = 0.3;
  }
  if(tiltFB < -10 && tiltFB >= -20){
    zoom_factor = 0.7;
  }
  if(tiltFB < 30 && tiltFB > -10){
    zoom_factor = 1;
  }
  if(tiltFB > 45){
    zoom_factor = 1.7;
  }
  if(tiltFB > 30 && tiltFB <= 45){
    zoom_factor = 1.3;
  }
  
  socket.emit("zoom_img", zoom_factor);


}

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

      //TODO for Maximilian Grüner, please fix the disconnect issue

      //it happens when you attach a screen, then if you refresh the 
      //screen it still says disconnect even if its like a new screen
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
      screens_connected = screendata.length;
      console.log("Start debug");
      console.log(last_screendata);
      console.log(screendata)
      for(var k in last_screendata){
        console.log("k = "+k);
        if(screendata.indexOf(k+"") >= 0){
          continue;
        }else{
          delete last_screendata[k]
        }
    }
    console.log(last_screendata)
   console.log("END DEBUG");
      $("#menu ul").html(displayed);

    });
   

  });
  socket.on('connect_error', function() {
    displayed = "";
    $("#menu ul").html(displayed);
  });
  socket.on('undoconnection',function(id){
    $("#"+id).text('Connect');
  });
}
