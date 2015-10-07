var locateuser = function() {
  console.log("testing");

  var userLocation = document.getElementById("search").value;
  console.log(userLocation)

  var geocoder = new google.maps.Geocoder();

  geocoder.geocode( { address: userLocation},



   function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      console.log(results)


      // map.setCenter(results[0].geometry.location);
      // var marker = new google.maps.Marker({
      //     map: map,
      //     position: results[0].geometry.location
      // });
    } else {
      alert("Geocode was not successful for the following reason: " + status);
    }


  });


}
