$(document).ready(function slides() {

  var images = [
    "images/amex.png",
    "images/amex.png",
    "images/thermo.png",
    "images/comp.png",
    "images/rocketry.png",
    "images/sub.png",
    "images/brh.png"
  ];

  var containers = [
    "#work-intro",
    "amex-container",
    "thumo-container",
    "comp-container",
    "rock-container",
    "sub-container",
    "brh-container"
  ]


  var currentIndex = 0;
  var currentContainer = 0;

  $("#slideshowNext").click(function() {
    currentIndex += 1;
    currentContainer += 1;
    //ADD A RANGE FOR LOOP HERE THAT HIDES ALL THE OTHER DIVS NOT AT THIS PARTICULAR INDEX.


    if (currentIndex >= images.length) {
      currentIndex = 0;
      currentContainer = 0;
    }

    $("#slideshowimage").attr("src", images[currentIndex]);
    $(containers[currentContainer]).removeClass("hidden");

  });

});
