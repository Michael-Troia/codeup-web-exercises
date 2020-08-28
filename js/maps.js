
    mapboxgl.accessToken = MAPBOX_TOKEN;
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 15,//start zoom
    // center: [-98.4916, 29.4252]//start pos
});
    var codeupMarker = new mapboxgl.Marker()
        .setLngLat([-98.4916, 29.4260])
        .addTo(map);
    var codeupPopup = new mapboxgl.Popup()
        .setHTML("<p>It's codeup!</p>")
        .addTo(map);

    var alamoMarker = new mapboxgl.Marker()
        .setLngLat([-98.489615, 29.426827])
        .addTo(map);

    var alamoPopup = new mapboxgl.Popup()
        .setHTML("<p>Remember the Alamo!</p>")
        .addTo(map)

    alamoMarker.setPopup(alamoPopup);
    codeupMarker.setPopup(codeupPopup);


    geocode("8230 cantura mills", MAPBOX_TOKEN)
        .then(function (result){
            map.setCenter(result);
            map.setZoom(15);
            console.log(result);
        });


    var geekdom = {lng: -98.4935, lat: 29.4264};
    reverseGeocode(geekdom, MAPBOX_TOKEN)
        .then(function (result){
            console.log(result);
        });

    "use strict";


