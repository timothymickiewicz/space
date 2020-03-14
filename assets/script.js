function nasaDaily() {
    var queryURL = "https://api.nasa.gov/planetary/apod?api_key=Yfd3EoVaBZUUjUbAFFCMtvK2qtoSIxWDPUJQzjdP"
      $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
      console.log(response.hdurl);
      $("document.body").css("background", response.hdurl)
    });
  }
  function solarSystem() {
    var queryURL = "https://api.le-systeme-solaire.net/rest/bodies/"
      $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
      $("document.body").css("background", response.hdurl)
    });
  }
solarSystem();
nasaDaily();