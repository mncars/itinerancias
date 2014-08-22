

L.ItineranciaMarker = L.Marker.extend({
  initialize: function (exposicion, itinerancia, exposicionLayer, snapper, latlngs, options) {
    this._exposicion = exposicion;
    this._itinerancia = itinerancia;
    this._exposicionLayer = exposicionLayer;
    this._snapper = snapper;
    L.Marker.prototype.initialize.call(this, latlngs, options);
    //this.bindPopup(this.getPopup());
  },

  getPopup: function (){
    var exposicionTpl = ItineranciasTpls['app/templates/exposicion-globo.hbs'];
    return exposicionTpl({exposicion: this._exposicion, itinerancia: this._itinerancia});
  },

  renderExposicion: function () {
    $(".exposicionThumbnail").html(this.getPopup());
    this._snapper.open('right');
  },

  renderItinerancias: function (noZoom) {
    this._exposicionLayer.renderItinerancias(noZoom);
    this.renderExposicion();
    if(!noZoom){
        this._map.fitBounds(this._exposicionLayer.getBounds(),
          {
            animate: true,
            maxZoom: 6,
            paddingTopLeft: [20, 20],
            paddingBottomRight: [20, 240]
          }
        );
    }
  }
});

L.itineranciaMarker = function (exposicion, itinerancia, exposicionLayer, snapper, latlngs, options) {
  return new L.ItineranciaMarker(exposicion, itinerancia, exposicionLayer, snapper, latlngs, options);
};
