var currentImage = 0; // the currently selected image
var imageCount = 7; // the maximum number of images available
var room_ix;
var rooms = {};
var attached = {};
function showImage (index){
    // Update selection on remote
    currentImage = index;
    var images = document.querySelectorAll("img");
    document.querySelector("img.selected").classList.toggle("selected");
    images[index].classList.toggle("selected");

    // Send the command to the screen
    // TODO
    alert("TODO send the index to the screen")
}

function initialiseGallery(){
    var container = document.querySelector('#gallery');
    var i, img;
    for (i = 0; i < imageCount; i++) {
        img = document.createElement("img");
        img.src = "images/" +i +".jpg";
        document.body.appendChild(img);
        var handler = (function(index) {
            return function() {
                showImage(index);
            }
        })(i);
        img.addEventListener("click",handler);
    }

    document.querySelector("img").classList.toggle('selected');
}

document.addEventListener("DOMContentLoaded", function(event) {
    initialiseGallery();

    document.querySelector('#toggleMenu').addEventListener("click", function(event){
        var style = document.querySelector('#menu').style;
        style.display = style.display == "none" || style.display == ""  ? "block" : "none";
    });
    connectToServer();
});

$(document).ready(function(){
    hooks();
});

function hooks(){
    //When button for screen is clicked, this is triggered
   $('body').on('click', 'li button', function(){
    console.log("Clicked");
    console.log(this.id);

   });
}   


function connectToServer(){
    // TODO connect to the socket.io server
    var socket = io.connect();
    console.log('check 1',socket.connected);
    socket.on('connect', function(){
        socket.emit('remoteConnection');
        console.log('check 2', socket.connected);
        socket.on('roomix',function(ix){
            room_ix = ix;
            console.log(room_ix);
        });

        socket.on('changescreens',function(screendata){
            rooms = screendata;
            console.log(screendata);
            displayed = "";
            console.log("changescreens");
            for(var k in screendata){
                displayed+="<li>"+k+" <button id='"+k+"'> Connect</button></li>";
            }
            $("#menu ul").html(displayed);
        });
    });
}