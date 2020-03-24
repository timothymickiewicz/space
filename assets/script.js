

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
  "type": "Rocky, terrestrial test",
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



var input = "";
var countImages = 0;
var randomImage = 0;
let planetRightData = [];
let availableStats = [];
var key = planetSearch;
var planetAPI = "";


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
}

// Creates a carousel of random planet images from the NASA planet pics API, will likely hard-code the Earth and Mars images with an if/else if statement because those two planet's pics kind of suck in this API (pics of rovers and random humans?)
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
  
  
  function leftSolarData() {
    for ( var i = 0; i < planetLeftData.length; i++) {
    var list = $("<li>");
    list.addClass("leftList");
    list.text(planetLeftData[i]);
   //style with css using class "leftList"
    $("#leftdata").append(list);
    } 
  }
  leftSolarData();

  //Can't figure out this code. need to take top variables, and iterate array onto page in list format based on user choice. All I'm getting is object Object
  function rightSolarData() {
    data.stats.forEach(function(message, i) {
      console.log('message index '+ i);
      Object.keys(message).forEach(function(prop) {    
          
        console.log(message[prop]);
        console.log(i);
      });
  });
      
}
  rightSolarData();

  //append moons here
  $("h2").append("Moons of " + input).attr("id", "moonsOfPlanet");
  if (!$.trim(response.moons)) {
    $("<p>").appendTo("h2").text(input + " has no moons on record.").attr("id", "noMoons");
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
//ask Tim about this 
for (var j=0; j <= 7; j++) {
  $("#newRow" + j).remove();
};
};

//load planet gif carousel on page load
document.addEventListener('DOMContentLoaded', function() {
var elems = document.querySelectorAll('.carousel');
var instances = M.Carousel.init(elems)
});

//change funtion to move planet gif
$( ".dropdown" ).change(function() {
var carousel = document.getElementById('planetGif');
var instance = M.Carousel.getInstance(carousel);
var input = $(this).find(':selected').data('pic1');
instance.set(input);
});

// Initializes the carousel's innate jQuery functions on document ready
$(document).ready(function(){
$(".carousel").carousel();  
startTimer();
// Captures users input when they hit the enter key or hit the button, then runs the respective carousel of images. Later functions will likely be stored in these events also. *RH added empty to clear on selection
$(document).on("keypress", function(x) {
  if(x.which == 13) {
    emptyPage();
    input = $(".dropdown").val();
    $(".display").toggleClass("display");
    $(".visible").text("Check Out Some More Scenery");
    $(".hidden").text("See More Images of " + input);
    setInterval(function() {
      $("#randomCarousel").carousel("next");
    },3000);
    $("#randomImagesBtn").on("click", function() {
      $("#randomCarousel").fadeOut(1000, function() {
        randomImagesCarousel();
    });
      $("#randomCarousel").fadeIn(1000);
    });  
    planetImagesCarousel();
    solarSystem();
  };
});

// for (var key in yourobject) {
//   if (yourobject.hasOwnProperty(key)) {
//      console.log(key, yourobject[key]);
//   }
// }

$("#planetSearch").on("click", function() {
  emptyPage();
  input = $(".dropdown").val();
  $(".display").toggleClass("display");
  $(".visible").text("Check Out Some More Scenery");
  $(".hidden").text("See More Images of " + input);
  setInterval(function() {
    $("#randomCarousel").carousel("next");
  },3000);
  $("#randomImagesBtn").on("click", function() {
    $("#randomCarousel").fadeOut(1000, function() {
      randomImagesCarousel();
  });
    $("#randomCarousel").fadeIn(1000);
  });
  planetImagesCarousel();
  solarSystem();
});
});