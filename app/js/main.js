(function () {
/**
 * funcion temporal para poder alterar la capa
 * @param  {[type]} name [description]
 * @return {[type]}      [description]
 */
  function getParameterByName(name) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
          results = regex.exec(location.search);
      return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  var estilo = getParameterByName('estilo');

  var tileUrl = 'http://{s}.tiles.mapbox.com/v3/openplans.map-g4j0dszr/{z}/{x}/{y}.png';
  if (estilo == 1)
    tileUrl = 'http://api.tiles.mapbox.com/v4/mncars.jb6c075e/{z}/{x}/{y}.png256?access_token=pk.eyJ1IjoibW5jYXJzIiwiYSI6Ikd4LVhVVzQifQ.4aiQLhuKLILjMBNLFkDGxA';
  else if (estilo == 2)
    tileUrl = 'http://api.tiles.mapbox.com/v4/mncars.jdnk71aa/{z}/{x}/{y}.png256?access_token=pk.eyJ1IjoibW5jYXJzIiwiYSI6Ikd4LVhVVzQifQ.4aiQLhuKLILjMBNLFkDGxA';
  else if (estilo == 3)
    tileUrl = 'http://api.tiles.mapbox.com/v4/mncars.jdnkpc5f/{z}/{x}/{y}.png256?access_token=pk.eyJ1IjoibW5jYXJzIiwiYSI6Ikd4LVhVVzQifQ.4aiQLhuKLILjMBNLFkDGxA';




  var config = {
    //https://leanpub.com/leaflet-tips-and-tricks/read#leanpub-auto-tile-servers-that-can-be-used-with-leaflet
//    tileUrl: 'http://{s}.tiles.mapbox.com/v3/openplans.map-g4j0dszr/{z}/{x}/{y}.png',
    tileUrl: tileUrl,
    tileAttrib: 'Map tiles &copy; MapBox and OpenStreetMap ',
    initLatLng: new L.LatLng(40.408192, -3.694337), // MNCARS
    mapCenter: new L.LatLng(10, -28), //en mitad del oceano
    initZoom: 3,
    minZoom: 2,
    maxZoom: 15
  };

  var snapper = new Snap({
    element: document.getElementById('content'),
    touchToDrag: false,
    maxPosition: 265,
    minPosition: -265,
    //320
  });

  $('.snap-close').click(function() {
    $('footer').removeClass("hide-bottom");
    snapper.close();
  });

  var map = L.mapItinerancias('map', exposiciones, {
    minZoom: config.minZoom,
    maxZoom: config.maxZoom,
    zoomControl: false,
    snapper: snapper,
    initZoom: config.initZoom,
    initLatLng: config.initLatLng,
    riseOnHover: true,
    mapCenter: config.mapCenter
  });
  new L.Control.Zoom({ position: 'topright' }).addTo(map);
  map.addLayer(new L.TileLayer(config.tileUrl, {attribution: config.tileAttrib}));
  map.setView(config.mapCenter, config.initZoom);

  Slider.initialize(map);

  map.on('click', function (e) {
    //map.clearAll();
  });

  $(document).on("verItinerancia", function(e) {
    map.clearAll(true);  //TODO: Nozoom?
    e.exposicion_marker.renderItinerancia();
    $(".exposicionThumbnail").html(e.exposicion_marker.getPopup());
    $('footer').addClass("hide-bottom");
    snapper.settings({
      maxPosition: 320,
      minPosition: -320
    });
    snapper.open('right');
  });

  // Abre el panel izquierdo
  $('#open-left').click(function(e) {
    if (snapper.state().state == 'closed') {
      var infoTpl = ItineranciasTpls['app/templates/info.hbs'];
      $('footer').addClass("hide-bottom");
      $(".snap-drawer-left").html(infoTpl());
      snapper.settings({
        maxPosition: 265,
        minPosition: -265
      });
      snapper.open('left');
    } else {
      $('footer').removeClass("hide-bottom");
      snapper.close();
    }
  });

}());
