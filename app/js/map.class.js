L.ItineranciasMap = L.Map.extend({
  initialize: function (id, exposiciones, options) {
    this._exposiciones = exposiciones;
    this._initZoom = options.initZoom;
    this._initLatLng = options.initLatLng;
    this._exposicionesLayersHashMap = {};
    this._exposicionesLayers = L.layerGroup();

    this._renderMarkerMuseo();
    this._initializeExposicionesLayers(this._exposicionesLayers, this._exposicionesLayersHashMap);
    options.layers = new Array (this._exposicionesLayers);
    L.Map.prototype.initialize.call(this, id, options);
  },

  _renderMarkerMuseo: function () {
    var iconMuseo = L.MakiMarkers.icon({icon: "town-hall", color: "#d14836", size: "m"});
    this._markerMuseo = L.marker(this._initLatLng, {
          icon: iconMuseo
        });
  },

  _initializeExposicionesLayers: function(layerGroup, exposicionesLayersHashMap) {
    var _self = this;
    $.each(this._exposiciones, function(index, exposicion) {
      var exposicionLayer = L.createExposicionLayer(exposicion,
        {
          initLatLng: _self._initLatLng,
          markerMuseo: _self._markerMuseo
        }
      );
      layerGroup.addLayer(exposicionLayer);
      exposicionesLayersHashMap[exposicion.nid] = exposicionLayer;
    });
  },

  renderExposicion: function (nid) {
    this._exposicionesLayersHashMap[nid].renderItinerancias(true);
  },

  clearAll: function (noZoom) {
    this._exposicionesLayers.eachLayer(function (layer) {
      layer.clearItineranciasLayer();
    });
    if(!noZoom)
        this.setZoom(this._initZoom, {animate: true});
  },

  getExposicionLayers: function() {
    return this._exposicionesLayers;
  },
});

L.mapItinerancias = function (id, exposiciones, options) {
  return new L.ItineranciasMap(id, exposiciones, options);
};
