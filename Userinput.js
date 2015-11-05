// var userLocation = "London";
var sources = [
  {
    lat: -3.253534,
    lng: 40.079475
  },

  {
    lat: -3.253539,
    lng: 40.079477
  },

  {
    lat: -3.253524,
    lng: 40.079485
  }

]
function user_input(){
  initialize(document.getElementById('search').value);
}

function initialize(userLocation) {
  var mapOptions = {
    center: { lat: 51.525030, lng: -0.104482},
    zoom: 10
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  geocodeAddress(map, userLocation);
}

function geocodeAddress(resultsMap, userLocation) {
  var geocoder = new google.maps.Geocoder();

  geocoder.geocode({'address': userLocation}, function(results, status) {

    if (status === google.maps.GeocoderStatus.OK) {

      var searchresults = results[0].geometry.location;
      resultsMap.setCenter(searchresults);

      var marker = new google.maps.Marker({
        map: resultsMap,
        position: searchresults
      });

      for (i = 0; i < sources.length; i++){
        console.log(sources[i]);
        var source = new google.maps.LatLng(sources[i].lat,sources[i].lng);
        var distance = google.maps.geometry.spherical.computeDistanceBetween(source,searchresults);
        if (distance < 10000){
          var marker = new google.maps.Marker({
            map: resultsMap,
            position: source
          });
        }
      }

    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}
