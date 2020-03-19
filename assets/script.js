var input = "Saturn"; //This input is for testing purposes only
var countImages = 0;
var randomImage = 0;
// When document is ready, carousel jQuery will be initialized. We can remove planetImagesCarousel() from here and only call it when user clicks on something, or we can hide it with css "display = none" until user clicks on something. Just leaving it called right now so that you guys can see it.
$(document).ready(function(){
  $('.carousel').carousel();
  planetImagesCarousel();
});

// Pulls the daily image from nasa. We need to figure out a way to fit this into our pages background.
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

// Pulls a planets information. We need to capture the users input for this.
function solarSystem() {
  var queryURL = "https://api.le-systeme-solaire.net/rest/bodies/"+ input + "";
    $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });
}

solarSystem();
nasaDaily();

// Creates a carousel using the Materialize code in the html. If we don't want an empty carousel taking up space on our homepage, we can give the entire carousel a class name of hide until user clicks on a planet, then we toggle class of hide to "off" when a planet is selected. The CSS for class name "hide" would be something like display = none. Or we can just not run this function until the user clicks on something. 
function planetImagesCarousel() {
  var queryURL = "https://images-api.nasa.gov/search?q="+ input + "";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    for (var i = 0; i < 10; i++) {
      // Creating random images of the planet to populate the carousel every time the function is called. Might swap to hand selected images, just thought this would be interesting. The results aren't always readily apparent as to what you're looking at.
      countImages = response.collection.items.length;
      randomImage = Math.floor(Math.random() * countImages);
      $(".planetImage:eq(" + i + ")").attr("src", response.collection.items[randomImage].links[0].href);
    };
  });
};


