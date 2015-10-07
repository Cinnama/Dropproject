(function() {

    new google.maps.places.Autocomplete(
    (document.getElementById('search')), {
        types: ['geocode']
    });

    //var autocomplete = new google.maps.places.Autocomplete(input);
    console.log($('#search').val());

    console.log('test');

})();
