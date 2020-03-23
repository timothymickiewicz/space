console.log("Here's Johnny!");

//variables
var mercury = {
    type: "Rocky, terrestrial",
    positionFromTheSun: "First planet in the solar system",
    distanceFromSun: "Distance from the Sun: 57.9 10e6 km",
    lengthOfDay: "Length of Day: 4222.6 hours",
    orbitalPeriod: "Orbital Period (length of year): 88 days",
    avgTemp: "Average Temperature: 167 C",
    ringSystem: "Ring System: No",
    globalMagneticField: "Global Magnetic Field: Yes"
}
  
var venus = {
    type: "Rocky, terrestrial",
    positionFromTheSun: "Second planet in the solar system",
    distanceFromSun: "Distance from the Sun: 108.2 10e6 km",
    lengthOfDay: "Length of Day: 2808 hours",
    orbitalPeriod: "Orbital Period (length of year): 224.7 days",
    avgTemp: "Average Temperature: 464 C",
    ringSystem: "Ring System: No",
    globalMagneticField: "Global Magnetic Field: No "
}
  
var earth = {
    type: "Rocky, terrestrial",
    positionFromTheSun: "Third planet in the solar system",
    distanceFromSun: "Distance from the Sun: 150 10e6 km", 
    lengthOfDay: "Length of Day: 24 hours",
    orbitalPeriod: "Orbital Period (length of year): 365.2 days",  
    avgTemp: "Average Temperature: 15 C",
    ringSystem: "Ring System: No",
    globalMagneticField: "Global Magnetic Field: Yes"
}    
  
var mars = {
    type: "Rocky, terrestrial",
    positionFromTheSun: "Fourth planet in the solar system",
    distanceFromSun: "Distance from the Sun: 227 10e6 km",
    lengthOfDay: "Length of Day: 24.7 hours",
    orbitalPeriod: "Orbital Period (length of year): 687 days",
    avgTemp: "Average Temperature: -65 C",
    ringSystem: "Ring System: No",
    globalMagneticField: "Global Magnetic Field: No"
}
  
var jupiter = {
    type: "Gas giant",
    positionFromTheSun: "Fifth planet in the solar system",
    distanceFromSun: "Distance from the Sun: 778.6 10e6 km",
    lengthOfDay: "Length of Day: 9.9 hours",        orbitalPeriod: "Orbital Period (length of year): 4331 days",
    avgTemp: "Average Temperature: -110 C",
    ringSystem: "Ring System: No",        globalMagneticField: "Global Magnetic Field: Yes"
}
  
var saturn = {
    type: "Gas giant",
    positionFromTheSun: "Sixth planet in the solar system",
    distanceFromSun: "Distance from the Sun: 1433 10e6 km",
    lengthOfDay: "Length of Day: 10.7 hours",  orbitalPeriod: "Orbital Period (length of year): 10,747 days",
    avgTemp: "Average Temperature: -140 C",
    ringSystem: "Ring System: Yes",
    globalMagneticField: "Global Magnetic Field: Yes"
}
  
var uranus = {
    type: "Ice giant",
    positionFromTheSun: "Seventh planet in the solar system",
    distanceFromSun: "Distance from the Sun: 2872.5 10e6 km",
    lengthOfDay: "Length of Day: 17.2 hours",
    orbitalPeriod: "Orbital Period (length of year): 30,589 days",
    avgTemp: "Average Temperature: -195 C",
    ringSystem: "Ring System: Yes",
    globalMagneticField: "Global Magnetic Field: Yes"
}
  
var neptune = {
    type: "Ice giant",
    positionFromTheSun: "Eighth planet in the solar system",
    distanceFromSun: "Distance from the Sun: 4495.1 10e6 km",
    lengthOfDay: "Length of Day: 16.1 hours",
    orbitalPeriod: "Orbital Period (length of year): 59,800 days",
    avgTemp: "Average Temperature: -200 C",
    ringSystem: "Ring System: Yes",
    globalMagneticField: "Global Magnetic Field: Yes"
}
  
var pluto = {
    type: "Rock ice",
    positionFromTheSun: "Dwarf planet in the solar system",
    distanceFromSun: "Distance from the Sun: 5906.4 10e6 km",
    lengthOfDay: "Length of Day: 153.3 hours",
    orbitalPeriod: "Orbital Period (length of year): 30,589 days",
    avgTemp: "Average Temperature: -225 C",
    ringSystem: "Ring System: No",
    globalMagneticField: "Global Magnetic Field: Unknown"
}
var input = "";


//functions
function startTimer() {
    setInterval(function() {
        var currentTime = moment().add(1, "s").format("MMMM Do YYYY, h:mm:ss a");
        $("#time").text(currentTime);
    }, 1000);
  };

  function solarSystem() {
    var queryURL = "https://api.le-systeme-solaire.net/rest/bodies/"+ input;
      $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
      console.log("Planet Name " + response.englishName);
      console.log("Moons: " + response.moons.length);
      console.log("Diameter (km): " + response.meanRadius * 2);
      console.log("Density (kg/m&3): " + response.density * 1000);
      console.log("Gravity (eq.,1 bar) (m/s&2): " + response.gravity);
      console.log("Discovered By: " + response.discoveredBy);
      console.log("Discovery Date: " + response.discoveryDate);
    });
}

  //logic
  $(document).ready(function() {

    input = $(".dropdown").val();
      startTimer();
      solarSystem();
  });

