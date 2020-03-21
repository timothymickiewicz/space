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
    console.log(response.moons);
    $("h2").append("Moons of " + input).attr("id", "moonsOfPlanet");
    if (!$.trim(response.moons)) {
      $("<p>").appendTo("h2").text(input + " has no moons on record.").attr("id", "noMoons");
    }
    else {
      for (var i=0; i <= response.moons.length; i++) {
        if (i <= 10) {
          $("<td>").appendTo("#moons").text(response.moons[i].moon);
          }
        else if (i > 10 && i <= 21) {
          $("<tr>").attr("id", "newRow1").appendTo("tbody");
          $("<td>").text(response.moons[i].moon).appendTo("#newRow");
        }
        else if (i > 21 && i <= 31) {
          $("<tr>").attr("id", "newRow2").appendTo("tbody");
          $("<td>").text(response.moons[i].moon).appendTo("#newRow2");
        }
        else if (i > 31 && i <= 41) {
          $("<tr>").attr("id", "newRow3").appendTo("tbody");
          $("<td>").text(response.moons[i].moon).appendTo("#newRow3");
        }
        else if (i > 41 && i <= 51) {
          $("<tr>").attr("id", "newRow4").appendTo("tbody");
          $("<td>").text(response.moons[i].moon).appendTo("#newRow4");
        }
        else if (i > 51 && i <= 61) {
          $("<tr>").attr("id", "newRow5").appendTo("tbody");
          $("<td>").text(response.moons[i].moon).appendTo("#newRow5");
        }
        else if (i > 61 && i <= 71) {
          $("<tr>").attr("id", "newRow6").appendTo("tbody");
          $("<td>").text(response.moons[i].moon).appendTo("#newRow6");
        }
        else if (i > 71 && i <= 81) {
          $("<tr>").attr("id", "newRow7").appendTo("tbody");
          $("<td>").text(response.moons[i].moon).appendTo("#newRow7");
        }
      };
    };
  });
};

// Initializes the carousel's innate jQuery functions on document ready
$(document).ready(function(){
  $('.carousel').carousel();
  startTimer();

  // Captures users input when they hit the enter key or hit the button, then runs the respective carousel of images. Later functions will likely be stored in these events also. *RH added empty to clear on selection
  $(document).on("keypress", function(x) {
    if(x.which == 13) {
      input = $(".dropdown").val();
      $("#moonsOfPlanet").empty();
      $("#moons").empty();
      for (var j=0; j <= 7; j++) {
        var concatNum = j.toString();
        $("#newRow" + concatNum).empty();
      }
      planetImagesCarousel();   
      solarSystem();
    };
  });
  $("#planetSearch").on("click", function() {
    $("#moonsOfPlanet").empty();
    $("#moons").empty();
    for (var j=0; j <= 7; j++) {
      var concatNum = j.toString();
      $("#newRow" + concatNum).empty();
    };
    input = $(".dropdown").val();
    planetImagesCarousel();
    solarSystem();
  });

});