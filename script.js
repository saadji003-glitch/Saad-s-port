var images = ["yourphoto1.jpg", "yourphoto2.jpg"];
var i = 0;

setInterval(function() {
    i = (i + 1) % images.length;
    document.getElementById("myPhoto").src = images[i];
}, 3000);