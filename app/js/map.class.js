L.ItineranciasMap = L.Map.extend({
  initialize: function (id, options) {
    this._exposicionesLayers = options.exposicionesLayers;
    this._snapper = options.snapper;
    this._initZoom = options.initZoom;
    L.Map.prototype.initialize.call(this, id, options);

  },

  clearAll: function (noZoom) {
    this._snapper.close();
    this._exposicionesLayers.eachLayer(function (layer) {
      layer.clearItineranciasLayer();
    });
    if(!noZoom)
        this.setZoom(this._initZoom, {animate: true});
  }
});

L.map = function (id, options) {
  return new L.ItineranciasMap(id, options);
};
