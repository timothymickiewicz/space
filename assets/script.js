var input = "";
var countImages = 0;
var randomImage = 0;

// Adding current time to the page
function startTimer() {
  setInterval(function() {
      var currentTime = moment().add(1, "s").format("MMMM Do YYYY, h:mm:ss a");
      $("#time").text(currentTime);
  }, 1000);
}

// Pulls the daily image from nasa. We need to figure out a way to fit this into our page's background.
function nasaDaily() {
  var queryURL = "https://api.nasa.gov/planetary/apod?api_key=Yfd3EoVaBZUUjUbAFFCMtvK2qtoSIxWDPUJQzjdP";
    $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    console.log(response.hdurl);
  });
}

// Creates a carousel of random planet images from the NASA planet pics API, will likely hard-code the Earth and Mars images with an if/else if statement because those two planet's pics kind of suck in this API (pics of rovers and random humans?)
function planetImagesCarousel() {
  var queryURL = "https://images-api.nasa.gov/search?q="+ input;
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    for (var i = 0; i < 10; i++) {
      countImages = response.collection.items.length;
      randomImage = Math.floor(Math.random() * countImages);
      $(".planetImage:eq(" + i + ")").attr("src", response.collection.items[randomImage].links[0].href);
    };
  });
};

// Pulls a planet's information
function solarSystem() {
  var queryURL = "https://api.le-systeme-solaire.net/rest/bodies/"+ input;
    $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });
}

// Initializes the carousel's innate jQuery functions on document ready
$(document).ready(function(){
  $('.carousel').carousel();
  startTimer();

  // Captures users input when they hit the enter key or hit the button, then runs the respective carousel of images. Later functions will likely be stored in these events also.
  $(document).on("keypress", function(x) {
    if(x.which == 13) {
      input = $(".dropdown").val();
      planetImagesCarousel();   
      solarSystem();
    }
  });
  $("#planetSearch").on("click", function() {
    input = $(".dropdown").val();
    planetImagesCarousel();
    solarSystem();
  });

});