function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("img").src = images[x];
}

function displayNextImage2() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("img2").src = images2[x];

}

function startTimer() {
    setInterval(displayNextImage, 6000);
    setInterval(displayNextImage2, 11000);

}

var images = [], x = -1;
images[0] = "./videoexcerpts/v3.png";
images[1] = "Vessel1.jpg";
images[2] = "greyhound 1.jpg";
images[3] = "bee.jpg";
images[4] = "./videoexcerpts/v4.png";
images[5] = "vertiblock1.jpg";
images[6] = "neosheep.jpg";
images[7] = "hummingbird.jpg";
images[8] = "./videoexcerpts/v2.png";
images[9] = "./videoexcerpts/v5.png";
images [10] = "basketballshoes.jpg";



var images2 = [], x = -1;
images2[0] = "./textexcerpts/e2.png";
images2[1] = "./textexcerpts/e3.png";
images2[2] = "./textexcerpts/e4.png";
images2[3] = "./textexcerpts/e5.png";
images2[4] = "./textexcerpts/e6.png";
images2[5] = "./textexcerpts/e7.png";
images2[6] = "./textexcerpts/e8.png";
images2[7] = "./textexcerpts/e9.png";
images2[8] = "./textexcerpts/e10.png";
