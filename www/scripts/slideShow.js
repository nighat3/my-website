$(document).ready(function() {

  var images = [
    "images/amex.png",
    "images/thermo.png",
    "images/comp.png",
    "images/rocketry.png",
    "images/sub.png",
    "images/brh.png"
  ];


  var currentIndex = 0;

  $("#slideshowNext").click(function() {
    currentIndex += 1;

    if (currentIndex >= images.length) {
      currentIndex = 0;
    }

    $("#slideshowimage").attr("src", images[currentIndex]);

  });
});
