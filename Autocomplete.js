(function() {
    new google.maps.places.Autocomplete(
    (document.getElementById('search')), {
        types: ['geocode']
    });
})();
