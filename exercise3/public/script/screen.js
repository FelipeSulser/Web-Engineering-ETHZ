var devicename; // the name of this screen and specified in the URL
var imageCount = 7; // the maximum number of images available

var zoomLevel = 100;
var maxZoomLevel = 105;
var minZoomLevel = 95;

var initialW = null;
var initialH = null;

var last_mystr = "50%"

document.addEventListener("DOMContentLoaded", function(event) {
    devicename = getQueryParams().name;
    if (devicename) {
        var text = document.querySelector('#name');
        text.textContent = devicename;
    }

    connectToServer();
});



function showImage (index){
    var img = document.querySelector('#image');
    var msg = document.querySelector('#msg');

    if (index >= 0 && index <= imageCount){
       
        img.setAttribute("src", "images/" +index +".jpg");
        img.style.width = last_mystr;
        img.style.height = last_mystr;
        msg.style.display = 'none';
        img.style.display = 'block';
        initialH = img.clientHeight;
        initialW = img.clientWidth;
    }

}


function zoomImg(factor){
    var img = document.querySelector('#image');
    //factor is zoom_factor
    var width = img.clientWidth;
    var height = img.clientHeight;
    console.log("Width "+width);
    console.log("height"+height);
    console.log("ZOOM FAC: " +factor);
    zoomFunc(factor);
    //zoom it according to zoom factor
}

function clearImage(){
    var img = document.querySelector('#image');
    var msg = document.querySelector('#msg');
    img.style.display = 'none';
    msg.style.display = 'block';
}

function getQueryParams() {
    var qs =  window.location.search.split("+").join(" ");

    var params = {}, tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;

    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])]
            = decodeURIComponent(tokens[2]);
    }

    return params;
}


function connectToServer(){
    var socket = io.connect();
    console.log('check 1',socket.connected);
    socket.on('connect_error', function() {
      clearImage()
    });
    socket.on('connect', function(){
        var myname = getQueryParams().name;
        socket.emit('screenConnection',myname);
        console.log('check 2', socket.connected);
    });
    socket.on('showImage',function(img_index){
        console.log("Image was changed " +  img_index);
        clearImage();
        showImage(img_index);

    });
    socket.on("clear_image",function(){
      clearImage();
    });
    var ZOOMSTATE = 1;

    socket.on('zoom_current_image', function(zoom_factor){
        if(zoom_factor != ZOOMSTATE && initialW != null){
            console.log("Zoom image with factor : ", zoom_factor)
            var myimg =document.getElementById('image');
            var mystr = "";
            if(zoom_factor == 0.3){
                //mystr= "15%";
                mystr= "100%";
            }
            if(zoom_factor == 0.7){
                 //mystr = "30%";
                 mystr= "75%";
            }
            if(zoom_factor == 1){
                 mystr = "50%";
            }
            if(zoom_factor == 1.3){
                 //mystr = "75%";
                 mystr= "30%";
            }
            if(zoom_factor == 1.7){
               // mystr = "100%";
               mystr= "15%";
            }
            last_mystr = mystr;
           
           /* if(zoom_factor < 0){
                myimg.style.height = currentHeight/(-1*zoom_factor);
                myimg.style.width = currentWidth/(-1*zoom_factor);
            }else{
                 myimg.style.height = currentHeight*(1+zoom_factor);
                myimg.style.width = currentWidth*(1+zoom_factor);
            }*/

            console.log("DIM: "+initialW+" " +initialH);
            console.log(Math.round(initialW*zoom_factor)+" and "+Math.round(initialH*zoom_factor));
            myimg.style.width = mystr;
            myimg.style.width = mystr;
            //myimg.width = 200;(Math.round(currentHeight*zoom_factor));
            ZOOMSTATE = zoom_factor;
        }

     
    })

}
