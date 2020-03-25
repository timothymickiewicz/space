
//data for right list call
let data = {
   
  "stats":[{
  
  "type": "Rocky, terrestrial",
  "positionFromTheSun": "First planet in the solar system",
  "distanceFromSun": "Distance from the Sun: 57.9 10e6 km",
  "lengthOfDay": "Length of Day: 4222.6 hours",
  "orbitalPeriod": "Orbital Period (length of year): 88 days",
  "avgTemp": "Average Temperature: 167 C",
  "ringSystem": "Ring System: No",
  "globalMagneticField": "Global Magnetic Field: Yes"
},

  {
  "type": "Rocky, terrestrial",
  "positionFromTheSun": "Second planet in the solar system",
  "distanceFromSun": "Distance from the Sun: 108.2 10e6 km",
  "lengthOfDay": "Length of Day: 2808 hours",
  "orbitalPeriod": "Orbital Period (length of year): 224.7 days",
  "avgTemp": "Average Temperature: 464 C",
  "ringSystem": "Ring System: No",
  "globalMagneticField": "Global Magnetic Field: No "
},
 
  {
  "type": "Rocky, terrestrial",
  "positionFromTheSun": "Third planet in the solar system",
  "distanceFromSun": "Distance from the Sun: 150 10e6 km",
  "lengthOfDay": "Length of Day: 24 hours",
  "orbitalPeriod": "Orbital Period (length of year): 365.2 days",
  "avgTemp": "Average Temperature: 15 C",
  "ringSystem": "Ring System: No",
  "globalMagneticField": "Global Magnetic Field: Yes"
},

  {
  "type": "Rocky, terrestrial",
  "positionFromTheSun": "Fourth planet in the solar system",
  "distanceFromSun": "Distance from the Sun: 227 10e6 km",
  "lengthOfDay": "Length of Day: 24.7 hours",
  "orbitalPeriod": "Orbital Period (length of year): 687 days",
  "avgTemp": "Average Temperature: -65 C",
  "ringSystem": "Ring System: No",
  "globalMagneticField": "Global Magnetic Field: No"
},

  {
  "type": "Gas giant",
  "positionFromTheSun": "Fifth planet in the solar system",
  "distanceFromSun": "Distance from the Sun: 778.6 10e6 km",
  "lengthOfDay": "Length of Day: 9.9 hours",
  "orbitalPeriod": "Orbital Period (length of year): 4331 days",
  "avgTemp": "Average Temperature: -110 C",
  "ringSystem": "Ring System: No",
  "globalMagneticField": "Global Magnetic Field: Yes"
},

  {
  "type": "Gas giant",
  "positionFromTheSun": "Sixth planet in the solar system",
  "distanceFromSun": "Distance from the Sun: 1433 10e6 km",
  "lengthOfDay": "Length of Day: 10.7 hours",
  "orbitalPeriod": "Orbital Period (length of year): 10,747 days",
  "avgTemp": "Average Temperature: -140 C",
  "ringSystem": "Ring System: Yes",
  "globalMagneticField": "Global Magnetic Field: Yes"
},

  {
  "type": "Ice giant",
  "positionFromTheSun": "Seventh planet in the solar system",
  "distanceFromSun": "Distance from the Sun: 2872.5 10e6 km",
  "lengthOfDay": "Length of Day: 17.2 hours",
  "orbitalPeriod": "Orbital Period (length of year): 30,589 days",
  "avgTemp": "Average Temperature: -195 C",
  "ringSystem": "Ring System: Yes",
  "globalMagneticField": "Global Magnetic Field: Yes"
},

  {
  "type": "Ice giant",
  "positionFromTheSun": "Eighth planet in the solar system",
  "distanceFromSun": "Distance from the Sun: 4495.1 10e6 km",
  "lengthOfDay": "Length of Day: 16.1 hours",
  "orbitalPeriod": "Orbital Period (length of year): 59,800 days",
  "avgTemp": "Average Temperature: -200 C",
  "ringSystem": "Ring System: Yes",
  "globalMagneticField": "Global Magnetic Field: Yes"
},

  {
  "type": "Rock ice",
  "positionFromTheSun": "Dwarf planet in the solar system",
  "distanceFromSun": "Distance from the Sun: 5906.4 10e6 km",
  "lengthOfDay": "Length of Day: 153.3 hours",
  "orbitalPeriod": "Orbital Period (length of year): 30,589 days",
  "avgTemp": "Average Temperature: -225 C",
  "ringSystem": "Ring System: No",
  "globalMagneticField": "Global Magnetic Field: Unknown"
}]
}

//variables for page 
var input = "";
var countImages = 0;
var randomImage = 0;
let planetRightData = [];
var key = planetSearch;
var planetAPI = "";

// Adding current time to the page
function startTimer() {
  setInterval(function() {
      var currentTime = moment().add(1, "s").format("MMMM Do YYYY, h:mm:ss a");
      $("#time").text(currentTime);
  }, 1000);
}

//function for right data on index
function rightSolarData() {
    var userChoice = $("#select").find('option:selected').attr('data-index')
    $("#rightdata").empty();
    var type = $("<li>" + "Type: " + data.stats[userChoice].type + "</li>");
    var positionFromTheSun = $("<li>" + data.stats[userChoice].positionFromTheSun + "</li>");
    var lengthOfDay = ("<li>" + data.stats[userChoice].lengthOfDay + "</li>");
    var orbitalPeriod = $("<li>" + data.stats[userChoice].orbitalPeriod + "</li>");
    var avgTemp = $("<li>" + data.stats[userChoice].avgTemp + "</li>");
    var ringSystem = $("<li>" + data.stats[userChoice].ringSystem + "</li>");
    var globalMagneticField = $("<li>" + data.stats[userChoice].globalMagneticField + "</li>");
    $("#rightdata").append(type, positionFromTheSun, lengthOfDay, orbitalPeriod, avgTemp, ringSystem, globalMagneticField);
 }

// Pulls the daily image from nasa and sets it to the page's background
function nasaDaily() {
var queryURL = "https://api.nasa.gov/planetary/apod?api_key=Yfd3EoVaBZUUjUbAFFCMtvK2qtoSIxWDPUJQzjdP";
  $.ajax({
  url: queryURL,
  method: "GET"
  }).then(function(response) {
    var imageUrl = response.url;
    $("body").css("background-image", "url(" + imageUrl + ")");;
  });
};

// A carousel randomizer with images of the selected planet
function randomImagesCarousel() {
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

// Creates a carousel of random planet images from the NASA planet pics API
function planetImagesCarousel() {
  var queryURL = "https://images-api.nasa.gov/search?q="+ input;
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
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
  var planetName = "Planet Name: " + response.englishName;
  var diameter = "Diameter (km): " + response.meanRadius * 2;
  var density = "Density (kg/m&3): " + response.density * 1000;
  var gravity = "Gravity (eq.,1 bar) (m/s&2): " + response.gravity;
  var discoveredBy = "Discovered By: " + response.discoveredBy;
  var discoveryDate = "Discovery Date: " + response.discoveryDate;
  var planetLeftData = [
    planetName,diameter,density,gravity,discoveredBy, discoveryDate];
 
  // Writes data to the left side of the page
  function leftSolarData() {
    for (var i = 0; i < planetLeftData.length; i++) {
    var list = $("<li>");
    list.addClass("leftList");
    list.text(planetLeftData[i]);
    //style with css using class "leftList"
    $("#leftdata").append(list);
    };
  };

  leftSolarData();
  
  
  
  //append moons list here
  $("h2").append("Moons of " + (input.charAt(0).toUpperCase() + input.substr(1).toLowerCase())).attr("id", "moonsOfPlanet");
  if (!$.trim(response.moons)) {
    $("<p>").appendTo("h2").text((input.charAt(0).toUpperCase() + input.substr(1).toLowerCase()) + " has no moons on record.").attr("id", "noMoons");
  }
  else {
    if (response.moons.length) {
      let rowCount = Math.ceil(response.moons.length / 10);
      for (var i=0; i < rowCount; i++) {
        $("<tr>").attr("id", "newRow" + i).appendTo("tbody");
      }
    }
    for (var i=0; i < response.moons.length; i++) {
      if (i < 10) {
        $("<td>").text(response.moons[i].moon).appendTo("#newRow0");
        }
      else if (i >= 10 && i < 20) {
        $("<td>").text(response.moons[i].moon).appendTo("#newRow1");
      }
      else if (i >= 20 && i < 30) {
        $("<td>").text(response.moons[i].moon).appendTo("#newRow2");
      }
      else if (i >= 30 && i < 40) {
        $("<td>").text(response.moons[i].moon).appendTo("#newRow3");
      }
      else if (i >= 40 && i < 50) {
        $("<td>").text(response.moons[i].moon).appendTo("#newRow4");
      }
      else if (i >= 50 && i < 60) {
        $("<td>").text(response.moons[i].moon).appendTo("#newRow5");
      }
      else if (i >= 60 && i < 70) {
        $("<td>").text(response.moons[i].moon).appendTo("#newRow6");
      }
      else if (i >= 70 && i < 80) {
        $("<td>").text(response.moons[i].moon).appendTo("#newRow7");
      }
    };
  };
});
};

// Empties the existing content
function emptyPage() {
  $("#leftdata").empty();
  $("#moonsOfPlanet").empty();
  $("#noMoons").empty();
  $("#randomImagesBtn").unbind();
  for (var j=0; j <= 7; j++) {
    $("#newRow" + j).remove();
  };
};

//change function to move planet gif
$( ".dropdown" ).change(function() {
  var carousel = document.getElementById('planetGif');
  var instance = M.Carousel.getInstance(carousel);
  var input = $(this).find(':selected').data('pic1');
  instance.set(input);
});

// Rotates random images carousel
function rotateCarousel() {
  setInterval(function() {
    $("#randomCarousel").carousel("next");
  },3500);
}

// Initializes the carousel's innate jQuery functions on document ready, sets background image, starts timer, rotates carousel
$(document).ready(function() {
  nasaDaily();
  $(".carousel").carousel();  
  startTimer();
  rotateCarousel();
  $(document).on("keypress", function(x) {
    event.preventDefault();
    if(x.which == 13) {
      emptyPage();
      input = $(".dropdown").val();
      $(".display").toggleClass("display");
      $(".visible").text("Check Out Some More Scenery");
      $(".hidden").text("See More Images of " + (input.charAt(0).toUpperCase() + input.substr(1).toLowerCase()));
      $("#randomImagesBtn").on("click", function() {
        $("#randomCarousel").fadeOut(1000, function() {
          randomImagesCarousel();
      });
        $("#randomCarousel").fadeIn(1000);
      });  
      planetImagesCarousel();
      solarSystem();
      rightSolarData();
    };
  });

  //function to search planet images from API
  $("#planetSearch").on("click", function() {
    event.preventDefault();
    emptyPage();
    input = $(".dropdown").val();
    $(".display").toggleClass("display");
    $(".visible").text("Check Out Some More Scenery");
    $(".hidden").text("See More Images of " + (input.charAt(0).toUpperCase() + input.substr(1).toLowerCase()));
    $("#randomImagesBtn").on("click", function() {
      $("#randomCarousel").fadeOut(1000, function() {
        randomImagesCarousel();
    });
      $("#randomCarousel").fadeIn(1000);
    });
    planetImagesCarousel();
    solarSystem();
    rightSolarData();
  });
});