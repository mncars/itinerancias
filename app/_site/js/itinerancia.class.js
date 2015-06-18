L.ItineranciaMarker = L.Marker.extend({
  initialize: function (exposicion, itinerancia, exposicionLayer, latlngs, options) {
    this._exposicion = exposicion;
    this._itinerancia = itinerancia;
    this._exposicionLayer = exposicionLayer;
    L.Marker.prototype.initialize.call(this, latlngs, options);
    //this.bindPopup(this.getPopup());
  },

  getPopup: function (){
    var exposicionTpl = ItineranciasTpls['app/templates/exposicion-globo.hbs'];
    return exposicionTpl({exposicion: this._exposicion, itinerancia: this._itinerancia, lang: lang});
  },

  renderItinerancia: function (noZoom) {
    this._exposicionLayer.renderItinerancias(noZoom);
  }
});

L.itineranciaMarker = function (exposicion, itinerancia, exposicionLayer, latlngs, options) {
  return new L.ItineranciaMarker(exposicion, itinerancia, exposicionLayer, latlngs, options);
};
