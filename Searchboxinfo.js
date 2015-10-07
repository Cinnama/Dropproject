google.maps.event.addListener(searchBox, 'places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }
    for (var i = 0, marker; marker = markers[i]; i++) {
      marker.setMap(null);
    }

    markers = [];
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0, place; place = places[i]; i++) {
      var image = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };


      var marker = new google.maps.Marker({
        map: map,
        icon: image,
        title: place.name,
        position: place.geometry.location
      });

      markers.push(marker);

      bounds.extend(place.geometry.location);
    }

    map.fitBounds(bounds);
  });


// Get SearchBox information

When the user selects an item from the predictions attached to the search box, the service fires a places_changed event. You can call getPlaces() on the SearchBox object, to retrieve an array containing several predictions, each of which is a PlaceResult object.

For more information about the PlaceResult object, refer to the documentation on place detail results.

// Listen for the event fired when the user selects an item from the
  // pick list. Retrieve the matching places for that item.


  // google.maps.event.addListener(searchBox, 'places_changed', function() {
  //   var places = searchBox.getPlaces();
  //
  //   if (places.length == 0) {
  //     return;
  //   }
  //   for (var i = 0, marker; marker = markers[i]; i++) {
  //     marker.setMap(null);
  //   }
  //
  //   // For each place, get the icon, place name, and location.
  //   markers = [];
  //   var bounds = new google.maps.LatLngBounds();
  //   for (var i = 0, place; place = places[i]; i++) {
  //     var image = {
  //       url: place.icon,
  //       size: new google.maps.Size(71, 71),
  //       origin: new google.maps.Point(0, 0),
  //       anchor: new google.maps.Point(17, 34),
  //       scaledSize: new google.maps.Size(25, 25)
  //     };
  //
  //     // Create a marker for each place.
  //     var marker = new google.maps.Marker({
  //       map: map,
  //       icon: image,
  //       title: place.name,
  //       position: place.geometry.location
  //     });
  //
  //     markers.push(marker);
  //
  //     bounds.extend(place.geometry.location);
  //   }
  //
  //   map.fitBounds(bounds);
  // });
