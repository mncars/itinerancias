/**
 * Representa una exposicion y sus itinerancias
 */
L.ExposicionLayer = L.FeatureGroup.extend({
  options: {
    initLatLng: [],
  },

  initialize: function (exposicion, options) {
    this._exposicion = exposicion;
    this._initLatLng = options.initLatLng;

    this._itineranciasLayer = L.featureGroup();
    this._markers = [];
    this._colorResaltado = this.getColorResaltado();
    this._colorExpo = this.getColorIconos();

    var className = "itinerancia-marker y" + exposicion.anio + "-marker" +
                    " slider-item--" + this._exposicion.tipo + "-marker" +
                    " slider-item--" + this._exposicion.tipo  + "y" + exposicion.anio + "-marker";

    this._icon = L.MakiMarkers.icon({icon: "town-hall",
      color: this._colorExpo,
      size: "s",
      className: className,
      popupAnchor: [0,-130]
    });
    this._iconResaltado = L.MakiMarkers.icon({icon: "town-hall", color: this._colorResaltado , size: "m", className: "itinerancia-resaltada-marker"});
    L.FeatureGroup.prototype.initialize.call(this);
  },

  getColorIconos: function() {
    if (this._exposicion.tipo == 'actividad')
      return "#88d2e5";
    else if (this._exposicion.tipo == 'coleccion_viaja')
      return "#d24e5b";
    else
      return "#e7d800";
  },

  getColorResaltado: function() {
    return "#333";
  },

  onAdd: function (map) {
    L.FeatureGroup.prototype.onAdd.call(this, map);
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

      if (this._exposicion.itinerancia[j].url != null)
        marker.bindPopup("<a href='"+this._exposicion.itinerancia[j].url+"' target='_blank'>" +
          this._exposicion.itinerancia[j].lugar + "</a>");
      else
        marker.bindPopup(this._exposicion.itinerancia[j].lugar);
      this._markers.push(marker);
      marker.on('click', renderItineranciasHandler);
      this.addLayer(marker);
    }
  },

  renderItinerancias: function(noZoom) {
    this._itineranciasLayer.clearLayers();

    for (var j=1; j < this._exposicion.itinerancia.length; ++j ) {
      itinerancia = this._exposicion.itinerancia[j];
      itineranciaAnterior = this._exposicion.itinerancia[j-1];
      if (this._exposicion.itinerancia[j].lat === null ||
          this._exposicion.itinerancia[j].lng === null) {
        continue;
      }

      this._itineranciasLayer.addLayer(
        L.polyline(
          [L.latLng(itineranciaAnterior.lat, itineranciaAnterior.lng), L.latLng(itinerancia.lat, itinerancia.lng)],
          {
            color: this._colorExpo ,
            weight: 5,
            className: "linea-itinerancia"
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
            maxZoom: 6,
            paddingTopLeft: [310, 100],
            paddingBottomRight: [20, 50]
          }
        );
    }

    this.bringToFront();
  },

  resaltarIconos: function() {
    for (var i=0; i < this._markers.length; ++i) {
      this._markers[i].setIcon(this._iconResaltado);
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
