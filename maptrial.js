var map;
  function initialize() {
    var mapOptions = {
      zoom: 6,
      center: new google.maps.LatLng(-34.347, 150.644)
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions)
  }

google.maps.event.addDomListener(window, 'load', initialize);

var mapOptions = {
    center: new google.maps.LatLng(7.111096, 30.244239),
    zoom: 6,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};

new google.maps.Map(document.getElementById('map'), mapOptions);



var mapOptions = {
    center: new google.maps.LatLng(7.111096, 30.244239),
    zoom: 6,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};
var map = new google.maps.Map(document.getElementById('map'), mapOptions);

var markerOptions = {
    position: new google.maps.LatLng(8.785, 28.09055556)
};
var marker = new google.maps.Marker(markerOptions);
marker.setMap(map);

var markerOptions = {
    position: new google.maps.LatLng(7.56, 28.45444444)
};
var marker = new google.maps.Marker(markerOptions);
marker.setMap(map);

var markerOptions = {
    position: new google.maps.LatLng(7.741944444, 28.03666667)
};
var marker = new google.maps.Marker(markerOptions);
marker.setMap(map);

var markerOptions = {
    position: new google.maps.LatLng(8.75, 29.13361111)
};
var marker = new google.maps.Marker(markerOptions);
marker.setMap(map);

var markerOptions = {
    position: new google.maps.LatLng(8.262222222, 29.01694444)
};
var marker = new google.maps.Marker(markerOptions);
marker.setMap(map);
