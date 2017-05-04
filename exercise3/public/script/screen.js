var devicename; // the name of this screen and specified in the URL
var imageCount = 7; // the maximum number of images available

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
        msg.style.display = 'none';
        img.style.display = 'block';
    }
}

function zoomImg(){
    var img = document.querySelector('#image');
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

    socket.on('zoom_current_image', function(zoom_factor){
        console.log("Zoom image with factor : ", zoom_factor)
        zoomImg(zoom_factor)
    })

}
