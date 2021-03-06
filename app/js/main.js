function transitionEndEventName () {
    var i,
        undefined,
        el = document.createElement('div'),
        transitions = {
            'transition':'transitionend',
            'OTransition':'otransitionend',  // oTransitionEnd in very old Opera
            'MozTransition':'transitionend',
            'WebkitTransition':'webkitTransitionEnd'
        };

    for (i in transitions) {
        if (transitions.hasOwnProperty(i) && el.style[i] !== undefined) {
            return transitions[i];
        }
    }
    //TODO: throw 'TransitionEnd event is not supported in this browser';
}

(function () {
  $('.open-popup-link').magnificPopup({
    removalDelay: 500, //delay removal by X to allow out-animation
    mainClass: 'mfp-zoom-in',
    showCloseBtn: false,
    type:'inline',
    callbacks: {
      beforeOpen: function() {
         this.st.mainClass = this.st.el.attr('data-effect');
      }
    }
  }).magnificPopup('open');

  $('.btn-popup').click(function() {
    $.magnificPopup.close();
  });

  //$('.pop-up').magnificPopup('open');


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

  var tileUrl = '//api.tiles.mapbox.com/v4/mncars.jdnk71aa/{z}/{x}/{y}.png256?access_token=pk.eyJ1IjoibW5jYXJzIiwiYSI6Ikd4LVhVVzQifQ.4aiQLhuKLILjMBNLFkDGxA';

  if (estilo == 1)
    tileUrl = '//api.tiles.mapbox.com/v4/mncars.jb6c075e/{z}/{x}/{y}.png256?access_token=pk.eyJ1IjoibW5jYXJzIiwiYSI6Ikd4LVhVVzQifQ.4aiQLhuKLILjMBNLFkDGxA';
  else if (estilo == 2)
    tileUrl = '//{s}.tiles.mapbox.com/v3/openplans.map-g4j0dszr/{z}/{x}/{y}.png';
  else if (estilo == 3)
    tileUrl = '//api.tiles.mapbox.com/v4/mncars.jdnkpc5f/{z}/{x}/{y}.png256?access_token=pk.eyJ1IjoibW5jYXJzIiwiYSI6Ikd4LVhVVzQifQ.4aiQLhuKLILjMBNLFkDGxA';

  var config = {
    //https://leanpub.com/leaflet-tips-and-tricks/read#leanpub-auto-tile-servers-that-can-be-used-with-leaflet
//    tileUrl: 'http://{s}.tiles.mapbox.com/v3/openplans.map-g4j0dszr/{z}/{x}/{y}.png',
    tileUrl: tileUrl,
    tileAttrib: 'Map tiles &copy; MapBox and OpenStreetMap ',
    initLatLng: new L.LatLng(40.408192, -3.694337), // MNCARS
    mapCenter: new L.LatLng(10, -28), //en mitad del oceano
    initZoom: $(window).width()<800?2:3,
    minZoom: 2,
    maxZoom: 15
  };

  // Configuración relacionada con el snapper
  var snapper = new Snap({
    element: document.getElementById('content'),
    touchToDrag: false,
    maxPosition: 265,
    minPosition: -265
  });
  var snapperCloseExtra = $('.snap-close-extra');
  var snapperCloseExtraWrapper = $('.snap-close-extra-wrapper');
  snapperCloseExtra.on('click',function closeExtra(){
    //si me adelanto a quitar los class mejor.
    snapperCloseExtra.removeClass('show');
    snapperCloseExtraWrapper.removeClass('show');
    snapper.close();
  });

  snapper.on('close', function(){
    snapperCloseExtra.removeClass('show');
    snapperCloseExtraWrapper.removeClass('show');
    $('footer').removeClass("hide-bottom");
    map.closePopup();
  });


  $('.snap-close').click(function() {
    snapper.close();
  });

  $('#open-left').click(function(e) {
    if (snapper.state().state == 'closed') {
      $('footer').addClass("hide-bottom");
      snapper.settings.maxPosition = 265;
      snapper.settings.minPosition = -265;
      snapper.open('left');
    } else {
      snapper.close();
    }
  });

  // Mapa
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

  if (!$('html').hasClass('lt-ie9')) {
    Slider.initialize(map);
  }
 
  $(document).on("verItinerancia", function(e) {
    map.clearAll(true);  //TODO: Nozoom?
    e.exposicion_marker.renderItinerancia();
    $(".exposicionThumbnail").html(e.exposicion_marker.getPopup());
    $('footer').addClass("hide-bottom");
    snapper.settings.maxPosition = 320;
    snapper.settings.minPosition = -320;
    snapper.open('right');
    setTimeout(function() {
      snapperCloseExtra.addClass('show');
      snapperCloseExtraWrapper.addClass('show');
    }, 500);
  });

  //eventos para el select de años
  $('select').change(function() {
    map.clearAll();  //TODO: Nozoom?
    map.closePopup();

    //con esto ocultamos los markers que no son del año.
    if (this.value == 'all') {
      $(".itinerancia-marker").show();
      return;
    }
    $(".itinerancia-marker").hide();
    $(this.value + "-marker").show();
    snapper.close();
  });
}());
