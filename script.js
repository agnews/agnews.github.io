function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("img").src = images[x];
}

function displayNextImage2() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("img2").src = images2[x];
}

function startTimer() {
    setInterval(displayNextImage, 3000);
    setInterval(displayNextImage2, 9000);
}

var images = [], x = -1;
images[0] = "Vessel1.jpg";
images[1] = "greyhound 1.jpg";
images[2] = "bee.jpg";
images[3] = "vertiblock1.jpg";
images[4] = "jacksonpollock.jpg";
images[5] = "neosheep.jpg";
images[6] = "lettera.jpg";
images[7] = "hummingbird.jpg";
images[8] = "honeycomb.jpg";

var images2 = [], x = -1;
images2[0] = "./textexcerpts/e1.png";
images2[1] = "./textexcerpts/e2.png";
images2[2] = "./textexcerpts/e3.png";
images2[3] = "./textexcerpts/e4.png";
images2[4] = "./textexcerpts/e5.png";
images2[5] = "./textexcerpts/e6.png";
images2[6] = "./textexcerpts/e7.png";
images2[7] = "./textexcerpts/e8.png";
images2[8] = "./textexcerpts/e9.png";
images2[9] = "./textexcerpts/e10.png";