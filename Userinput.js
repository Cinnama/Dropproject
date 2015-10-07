var userLocation = "London";
function user_input(){
   userLocation = document.getElementById('search').value;


  console.log(userLocation);
   //var search = document.getElementById('search');
   //search = encodeURIComponent(search);

// console.log(search);

  //  window.location = 'Map.html';

document.getElementById('formcontent').style.display="none";

  initialize(userLocation);
  // google.maps.event.addDomListener(window, 'load', initialize);

}

function initialize(userLocation) {
  var mapOptions = {
    center: { lat: 51.525030, lng: -0.104482},
    zoom: 6
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var geocoder = new google.maps.Geocoder();
  geocodeAddress(geocoder, map, userLocation);

}

function geocodeAddress(geocoder, resultsMap, userLocation) {
  // var address = document.getElementById('address').value;
  geocoder.geocode({'address': userLocation}, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {

      resultsMap.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}
