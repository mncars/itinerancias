/**
 * Representa una exposicion y sus itinerancias
 */
L.ExposicionLayer = L.LayerGroup.extend({
  options: {
    initLatLng: [],
  },

  initialize: function (exposicion, options) {
    this._exposicion = exposicion;
    this._initLatLng = options.initLatLng;
    this._markerMuseo = options.markerMuseo;

    this._itineranciasLayer = L.layerGroup();
    this._markers = [];
    this._colorResaltado = "#e7d800";
    this._icon = L.MakiMarkers.icon({icon: "town-hall", color: "#333", size: "s", className: "itinerancia-marker y" + exposicion.anio + "-marker"});
    this._iconResaltado = L.MakiMarkers.icon({icon: "town-hall", color: this._colorResaltado , size: "m"});
    L.LayerGroup.prototype.initialize.call(this);
  },

  onAdd: function (map) {
    L.LayerGroup.prototype.onAdd.call(this, map);
    this.addLayer(this._markerMuseo);
    this.addLayer(this._itineranciasLayer);
    for (var j=0; j < this._exposicion.itinerancia.length; ++j ) {
      if (this._exposicion.itinerancia[j].lat === null ||
          this._exposicion.itinerancia[j].lng === null) {
        console.log("--> Itinerancia esta mal: ");
        console.log(this._exposicion);
        continue;
      }
      itinerancia = this._exposicion.itinerancia[j];
      var marker = L.itineranciaMarker(this._exposicion, itinerancia, this, [itinerancia.lat, itinerancia.lng], {
          icon: this._icon
        });
      this._markers.push(marker);
      marker.on('click', renderItineranciasHandler);
      this.addLayer(marker);
    }
  },

  getBounds: function () {
    var markers = this._markers.slice(0);
    markers.push(this._markerMuseo);

    var group = new L.featureGroup(markers);
    return group.getBounds();
  },

  renderItinerancias: function(noZoom) {
    this._itineranciasLayer.clearLayers();

    for (var j=0; j < this._exposicion.itinerancia.length; ++j ) {
      itinerancia = this._exposicion.itinerancia[j];
      if (this._exposicion.itinerancia[j].lat === null ||
          this._exposicion.itinerancia[j].lng === null) {
        continue;
      }

      this._itineranciasLayer.addLayer(
        L.polyline(
          [this._initLatLng, L.latLng(itinerancia.lat, itinerancia.lng)],
          {
            color: this._colorResaltado ,
            weight: 5
          }
        )
      );
    }
    this.resaltarIconos();

    if(!noZoom){
        this._map.fitBounds(this.getBounds(),
          {
            animate: true,
            duration: 1,
            //easeLinearity: 1,
            maxZoom: 6,
            paddingTopLeft: [270, 0],
            paddingBottomRight: [20, 240]
          }
        );
    }
  },

  resaltarIconos: function() {
    for (var i=0; i < this._markers.length; ++i) {
      this._markers[i].setIcon(this._iconResaltado);
        //this._markers[i].bounce({duration: 10, height: 100});
    }
  },

  clearItineranciasLayer: function() {
    this.clearResaltarIconos();
    this._itineranciasLayer.clearLayers();
  },

  clearResaltarIconos: function() {
    for (var i=0; i < this._markers.length; ++i) {
      this._markers[i].setIcon(this._icon);
    }
  },
});

L.createExposicionLayer = function (exposicion, options) {
  return new L.ExposicionLayer(exposicion, options);
};

function renderItineranciasHandler(e) {
  $.event.trigger({
    type: "verItinerancia",
    exposicion_marker: e.target
  });
}
