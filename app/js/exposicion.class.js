/**
 * Representa una exposicion y sus itinerancias
 */
L.ExposicionLayer = L.LayerGroup.extend({
  options: {
    initLatLng: [],
    iconUrl: 'imgs/pin.png',
    iconUrlResaltado: 'imgs/pin0.png'
  },

  initialize: function (exposicion, options) {
    this._exposicion = exposicion;
    this._initLatLng = options.initLatLng;
    this._snapper = options.snapper;
    this._itineranciasLayer = L.layerGroup();
    this._markers = [];
    this._colorResaltado = "#e7d800";


    this._icon = L.MakiMarkers.icon({icon: "town-hall", color: "#333", size: "s", className: "y" + exposicion.anio + "-marker"});
    this._iconResaltado = L.MakiMarkers.icon({icon: "town-hall", color: this._colorResaltado , size: "m"});

    L.LayerGroup.prototype.initialize.call(this);
  },

  onAdd: function (map) {
    L.LayerGroup.prototype.onAdd.call(this, map);
    this.addLayer(this._itineranciasLayer);

    for (var j=0; j < this._exposicion.itinerancia.length; ++j ) {
      if (this._exposicion.itinerancia[j].lat === null ||
          this._exposicion.itinerancia[j].lng === null) {
        console.log("--> Itinerancia esta mal: ");
        console.log(this._exposicion);
        continue;
      }
      itinerancia = this._exposicion.itinerancia[j];
      var marker = L.itineranciaMarker(this._exposicion, itinerancia, this, this._snapper, [itinerancia.lat, itinerancia.lng], {
          icon: this._icon
        });
      this._markers.push(marker);
      marker.on('click', renderItineranciasHandler);
      this.addLayer(marker);
    }
  },

  getBounds: function () {
    var group = new L.featureGroup(this._markers);
    return group.getBounds();
  },

  renderItinerancias: function(noZoom) {
    this._map.clearAll(noZoom);
    this._itineranciasLayer.clearLayers();

    var marker = L.marker(this._initLatLng, {
          icon: this._icon
        });
    this._itineranciasLayer.addLayer(marker);
    this._markers.push (marker);


    for (var j=0; j < this._exposicion.itinerancia.length; ++j ) {
      itinerancia = this._exposicion.itinerancia[j];
      if (this._exposicion.itinerancia[j].lat === null ||
          this._exposicion.itinerancia[j].lng === null) {
        console.log("--> Itinerancia esta mal: ");
        console.log(this._exposicion.itinerancia[j]);
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
  },

  resaltarIconos: function() {
    for (var i=0; i < this._markers.length; ++i) {
      this._markers[i].setIcon(this._iconResaltado);
        //this._markers[i].bounce({duration: 10, height: 100});
    }
  },

  clearResaltarIconos: function() {
    for (var i=0; i < this._markers.length; ++i) {
      this._markers[i].setIcon(this._icon);
    }
  },

  clearItineranciasLayer: function() {
    this.clearResaltarIconos();
    this._itineranciasLayer.clearLayers();
  },

  renderAnio: function(anio) {
    for (var i=0; i < this._markers.length; ++i) {
      this._markers[i].setIcon(this._iconResaltado);
        //this._markers[i].bounce({duration: 10, height: 100});
    }
  },

});

L.createExposicionLayer = function (exposicion, options) {
  return new L.ExposicionLayer(exposicion, options);
};

function renderItineranciasHandler(e) {
  console.log(e);
  e.target.renderItinerancias();
}
