function renderItinerancias(a){a.target.renderItinerancias()}L.ItineranciasMap=L.Map.extend({initialize:function(a,b){this._exposicionesLayers=b.exposicionesLayers,this._snapper=b.snapper,this._initZoom=b.initZoom,L.Map.prototype.initialize.call(this,a,b)},clearAll:function(){this._snapper.close(),this._exposicionesLayers.eachLayer(function(a){a.clearItineranciasLayer()}),this.setZoom(this._initZoom,{animate:!0})}}),L.map=function(a,b){return new L.ItineranciasMap(a,b)},L.ItineranciaMarker=L.Marker.extend({initialize:function(a,b,c,d,e,f){this._exposicion=a,this._itinerancia=b,this._exposicionLayer=c,this._snapper=d,L.Marker.prototype.initialize.call(this,e,f)},renderExposicion:function(){for(var a="<h2>"+this._exposicion.titulo+'</h2><div class="fecha-lugar">'+this._exposicion.fechas+"<br>"+this._exposicion.lugar+'</div><img src="'+this._exposicion.imagen+'" class="img-responsive"><span class="label">Comisariado:</span> '+this._exposicion.comisario+'<br><span class="label">Organización:</span> '+this._exposicion.organizacion+"<br><h3>Itinerancias</h3>",b=0;b<this._exposicion.itinerancia.length;++b)itinerancia=this._exposicion.itinerancia[b],a+='<div class="itinerancia"><a href="'+itinerancia.url+'" target="_blank">'+itinerancia.lugar+'</a><div class="itinerancia-lugar">'+itinerancia.fechas+"</div></div>";$(".exposicionThumbnail").html(a),console.log(this._snapper),this._snapper.open("right")},renderItinerancias:function(){this._exposicionLayer.renderItinerancias(),this.renderExposicion(),this._map.fitBounds(this._exposicionLayer.getBounds(),{animate:!0,maxZoom:6,paddingTopLeft:[220,220]})}}),L.itineranciaMarker=function(a,b,c,d,e,f){return new L.ItineranciaMarker(a,b,c,d,e,f)},L.ExposicionLayer=L.LayerGroup.extend({options:{initLatLng:[],iconUrl:"imgs/pin.png",iconUrlResaltado:"imgs/pin0.png"},initialize:function(a,b){this._exposicion=a,this._initLatLng=b.initLatLng,this._snapper=b.snapper,this._itineranciasLayer=L.layerGroup(),this._markers=[],this._icon=L.icon({iconUrl:b.iconUrl,iconSize:[24,24],iconAnchor:[12,22],popupAnchor:[0,-22]}),this._iconResaltado=L.icon({iconUrl:"imgs/pin0.png",iconSize:[24,24],iconAnchor:[12,22],popupAnchor:[0,-22]}),L.LayerGroup.prototype.initialize.call(this)},onAdd:function(a){L.LayerGroup.prototype.onAdd.call(this,a),this.addLayer(this._itineranciasLayer);for(var b=0;b<this._exposicion.itinerancia.length;++b){itinerancia=this._exposicion.itinerancia[b];var c=L.itineranciaMarker(this._exposicion,itinerancia,this,this._snapper,[itinerancia.lat,itinerancia.lng],{icon:this._icon});this._markers.push(c),c.on("click",renderItinerancias),this.addLayer(c)}},getBounds:function(){var a=new L.featureGroup(this._markers);return a.getBounds()},renderItinerancias:function(){this._map.clearAll(),this._itineranciasLayer.clearLayers();var a=L.marker(this._initLatLng,{icon:this._icon});this._itineranciasLayer.addLayer(a),this._markers.push(a);for(var b=0;b<this._exposicion.itinerancia.length;++b)itinerancia=this._exposicion.itinerancia[b],this._itineranciasLayer.addLayer(L.polyline([this._initLatLng,[itinerancia.lat,itinerancia.lng]],{color:"#c8353e",weight:3}));this.resaltarIconos()},resaltarIconos:function(){for(var a=0;a<this._markers.length;++a)this._markers[a].setIcon(this._iconResaltado)},resaltarIconosAnio:function(a){this._exposicion.anio==a&&this.resaltarIconos()},clearResaltarIconos:function(){for(var a=0;a<this._markers.length;++a)this._markers[a].setIcon(this._icon)},clearItineranciasLayer:function(){this.clearResaltarIconos(),this._itineranciasLayer.clearLayers()}}),L.createExposicionLayer=function(a,b){return new L.ExposicionLayer(a,b)},function(){function a(){for(var a=0;a<exposiciones.length;++a){var e=L.createExposicionLayer(exposiciones[a],{initLatLng:b.initLatLng,iconUrl:"imgs/pin.png"}).addTo(d);c.addLayer(e)}}var b={tileUrl:"http://{s}.tiles.mapbox.com/v3/openplans.map-g4j0dszr/{z}/{x}/{y}.png",tileAttrib:"",initLatLng:new L.LatLng(40.408192,-3.694337),mapCenter:new L.LatLng(23.686633,-39.321783),initZoom:3,minZoom:2,maxZoom:15},c=L.layerGroup(),d=L.map("map",{minZoom:b.minZoom,maxZoom:b.maxZoom,zoomControl:!1,exposicionesLayers:c,initZoom:b.initZoom});new L.Control.Zoom({position:"topright"}).addTo(d),d.addLayer(new L.TileLayer(b.tileUrl,{attribution:b.tileAttrib})),d.setView(b.mapCenter,b.initZoom),$("#Container").mixItUp(),a(),d.on("click",function(){d.clearAll()}),$(function(){$("#expo2011").click(function(){d.clearAll(),a(),c.eachLayer(function(a){a.resaltarIconosAnio(2011)})}),$("#expo2012").click(function(){d.clearAll(),a(),c.eachLayer(function(a){a.resaltarIconosAnio(2012)})}),$("#expoTodas").click(function(){d.clearAll(),a()}),$("#cerrar").click(function(){})})}();