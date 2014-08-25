(function () {
  var config = {
    //https://leanpub.com/leaflet-tips-and-tricks/read#leanpub-auto-tile-servers-that-can-be-used-with-leaflet
    tileUrl: 'http://{s}.tiles.mapbox.com/v3/openplans.map-g4j0dszr/{z}/{x}/{y}.png',
    tileAttrib: '',//'Map tiles &copy; Development Seed and OpenStreetMap ',
    initLatLng: new L.LatLng(40.408192, -3.694337), // MNCARS
    mapCenter: new L.LatLng(10, -28), //en mitad del oceano
    initZoom: 3,
    minZoom: 2,
    maxZoom: 15
  };

  var snapper = new Snap({
    element: document.getElementById('content'),
    touchToDrag: false,
  });

  $('.snap-close').click(function() {
  $(".snap-drawer-right").css("z-index", 1 );

    snapper.close();
  });

  var map = L.mapItinerancias('map', exposiciones, {
    minZoom: config.minZoom,
    maxZoom: config.maxZoom,
    zoomControl: false,
    snapper: snapper,
    initZoom: config.initZoom,
    initLatLng: config.initLatLng
  });
  new L.Control.Zoom({ position: 'topright' }).addTo(map);
  map.addLayer(new L.TileLayer(config.tileUrl, {attribution: config.tileAttrib}));
  map.setView(config.mapCenter, config.initZoom);

  Slider.initialize(map);

  map.on('click', function (e) {
    //map.clearAll();
  });

  $(document).on("verItinerancia", function(e) {
    map.clearAll();  //TODO: Nozoom?
    e.exposicion_marker.renderItinerancia();

    $(".exposicionThumbnail").html(e.exposicion_marker.getPopup());
    $(".snap-drawer-right").css("z-index", 10 );
    snapper.open('right');
  });
}());
