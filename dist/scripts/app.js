function renderItineranciasHandler(a){$.event.trigger({type:"verItinerancia",exposicion_marker:a.target})}function transitionEndEventName(){var a,b,c=document.createElement("div"),d={transition:"transitionend",OTransition:"otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(a in d)if(d.hasOwnProperty(a)&&c.style[a]!==b)return d[a]}Handlebars.registerHelper("equal",function(a,b,c){if(arguments.length<3)throw new Error("Handlebars Helper equal needs 2 parameters");return a!=b?c.inverse(this):c.fn(this)}),this.ItineranciasTpls=this.ItineranciasTpls||{},Handlebars.registerPartial("slider-item",Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e,f=b.helperMissing,g="function",h=this.escapeExpression;return'<div class="mix y'+h((e=null!=(e=b.anio||(null!=a?a.anio:a))?e:f,typeof e===g?e.call(a,{name:"anio",hash:{},data:d}):e))+" thumbnail slider-item slider-item--"+h((e=null!=(e=b.tipo||(null!=a?a.tipo:a))?e:f,typeof e===g?e.call(a,{name:"tipo",hash:{},data:d}):e))+'" data-layer="'+h((e=null!=(e=b.nid||(null!=a?a.nid:a))?e:f,typeof e===g?e.call(a,{name:"nid",hash:{},data:d}):e))+'" data-myorder="'+h((e=null!=(e=b.index||d&&d.index)?e:f,typeof e===g?e.call(a,{name:"index",hash:{},data:d}):e))+'">\n  <a class="imagen" href="#">\n  	<div class="gradient-image">\n  		<span class="gradient"></span>\n    	<img src="'+h((e=null!=(e=b.imagen||(null!=a?a.imagen:a))?e:f,typeof e===g?e.call(a,{name:"imagen",hash:{},data:d}):e))+'" />\n    </div>\n    <div class="caption">\n      <div class="titulo">'+h((e=null!=(e=b.titulo||(null!=a?a.titulo:a))?e:f,typeof e===g?e.call(a,{name:"titulo",hash:{},data:d}):e))+'</div>\n      <div class="fechas">'+h((e=null!=(e=b.fechas||(null!=a?a.fechas:a))?e:f,typeof e===g?e.call(a,{name:"fechas",hash:{},data:d}):e))+'</div>\n    </div>\n    <span class="overlay"></span>\n  </a>\n</div>\n'},useData:!0})),this.ItineranciasTpls["app/templates/exposicion-globo.hbs"]=Handlebars.template({1:function(){return'<img src="imgs/pin-actividad.png">'},3:function(){return'<img src="imgs/pin-exposicion.png">'},5:function(){return'<img src="imgs/pin-coleccion.png">'},7:function(a,b,c,d){var e,f=b.helperMissing;return"    "+(null!=(e=(b.equal||a&&a.equal||f).call(a,null!=(e=null!=a?a.exposicion:a)?e.tipo:e,"actividad",{name:"equal",hash:{},fn:this.program(8,d,0),inverse:this.noop,data:d}))?e:"")+"\n    "+(null!=(e=(b.equal||a&&a.equal||f).call(a,null!=(e=null!=a?a.exposicion:a)?e.tipo:e,"exposicion",{name:"equal",hash:{},fn:this.program(10,d,0),inverse:this.noop,data:d}))?e:"")+"\n    "+(null!=(e=(b.equal||a&&a.equal||f).call(a,null!=(e=null!=a?a.exposicion:a)?e.tipo:e,"coleccion_viaja",{name:"equal",hash:{},fn:this.program(12,d,0),inverse:this.noop,data:d}))?e:"")+"\n"},8:function(){return'<span class="tipo__texto">Actividad</span>'},10:function(){return'<span class="tipo__texto">Exposición</span>'},12:function(){return'<span class="tipo__texto">Colección</span>'},14:function(a,b,c,d){var e,f=b.helperMissing;return"    "+(null!=(e=(b.equal||a&&a.equal||f).call(a,null!=(e=null!=a?a.exposicion:a)?e.tipo:e,"actividad",{name:"equal",hash:{},fn:this.program(15,d,0),inverse:this.noop,data:d}))?e:"")+"\n    "+(null!=(e=(b.equal||a&&a.equal||f).call(a,null!=(e=null!=a?a.exposicion:a)?e.tipo:e,"exposicion",{name:"equal",hash:{},fn:this.program(17,d,0),inverse:this.noop,data:d}))?e:"")+"\n    "+(null!=(e=(b.equal||a&&a.equal||f).call(a,null!=(e=null!=a?a.exposicion:a)?e.tipo:e,"coleccion_viaja",{name:"equal",hash:{},fn:this.program(19,d,0),inverse:this.noop,data:d}))?e:"")+"\n"},15:function(){return'<span class="tipo__texto">Activity</span>'},17:function(){return'<span class="tipo__texto">Exhibition</span>'},19:function(){return'<span class="tipo__texto">Collection</span>'},21:function(){return"Organización:"},23:function(){return"Organization:"},25:function(a,b,c,d){var e,f=b.helperMissing;return'    <span class="label">\n      '+(null!=(e=(b.equal||a&&a.equal||f).call(a,null!=a?a.lang:a,"es",{name:"equal",hash:{},fn:this.program(26,d,0),inverse:this.noop,data:d}))?e:"")+"\n      "+(null!=(e=(b.equal||a&&a.equal||f).call(a,null!=a?a.lang:a,"en",{name:"equal",hash:{},fn:this.program(28,d,0),inverse:this.noop,data:d}))?e:"")+"\n    </span> "+this.escapeExpression(this.lambda(null!=(e=null!=a?a.exposicion:a)?e.comisario:e,a))+" <br>\n"},26:function(){return"Comisariado:"},28:function(){return"Curatorship:"},30:function(a,b,c,d){var e,f=b.helperMissing;return"      "+(null!=(e=(b.equal||a&&a.equal||f).call(a,null!=a?a.lang:a,"es",{name:"equal",hash:{},fn:this.program(31,d,0),inverse:this.noop,data:d}))?e:"")+"\n      "+(null!=(e=(b.equal||a&&a.equal||f).call(a,null!=a?a.lang:a,"en",{name:"equal",hash:{},fn:this.program(33,d,0),inverse:this.noop,data:d}))?e:"")+"\n"},31:function(){return"+ detalles de la actividad"},33:function(){return"+ activity details"},35:function(a,b,c,d){var e,f=b.helperMissing;return"      "+(null!=(e=(b.equal||a&&a.equal||f).call(a,null!=a?a.lang:a,"es",{name:"equal",hash:{},fn:this.program(36,d,0),inverse:this.noop,data:d}))?e:"")+"\n      "+(null!=(e=(b.equal||a&&a.equal||f).call(a,null!=a?a.lang:a,"en",{name:"equal",hash:{},fn:this.program(38,d,0),inverse:this.noop,data:d}))?e:"")+"\n"},36:function(){return"+ detalles de la exposición"},38:function(){return"+ exhibition details"},40:function(){return"<h3>Itinerario</h3>"},42:function(){return"<h3>Touring Exhibitions</h3>"},44:function(a,b,c,d,e,f){var g,h,i=b.helperMissing;return'	  <div class="itinerancia'+(null!=(g=(b.equal||a&&a.equal||i).call(a,null!=a?a.nid:a,null!=(g=null!=f[1]?f[1].itinerancia:f[1])?g.nid:g,{name:"equal",hash:{},fn:this.program(45,d,0,e,f),inverse:this.noop,data:d}))?g:"")+'">\n	  	<div class="itinerancia-nombre">\n'+(null!=(g=b["if"].call(a,null!=(g=null!=a?a.url:a)?g.length:g,{name:"if",hash:{},fn:this.program(47,d,0,e,f),inverse:this.program(49,d,0,e,f),data:d}))?g:"")+'	    </div>\n	    <div class="itinerancia-lugar">'+this.escapeExpression((h=null!=(h=b.fechas||(null!=a?a.fechas:a))?h:i,"function"==typeof h?h.call(a,{name:"fechas",hash:{},data:d}):h))+"</div>\n	  </div>\n"},45:function(){return" active"},47:function(a,b,c,d){var e,f=b.helperMissing,g="function",h=this.escapeExpression;return'          <a href="'+h((e=null!=(e=b.url||(null!=a?a.url:a))?e:f,typeof e===g?e.call(a,{name:"url",hash:{},data:d}):e))+'" target="_blank">'+h((e=null!=(e=b.lugar||(null!=a?a.lugar:a))?e:f,typeof e===g?e.call(a,{name:"lugar",hash:{},data:d}):e))+"</a>\n"},49:function(a,b,c,d){var e;return"          "+this.escapeExpression((e=null!=(e=b.lugar||(null!=a?a.lugar:a))?e:b.helperMissing,"function"==typeof e?e.call(a,{name:"lugar",hash:{},data:d}):e))+"\n"},compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d,e,f){var g,h=this.lambda,i=this.escapeExpression,j=b.helperMissing;return'<div class="tipo tipo--'+i(h(null!=(g=null!=a?a.exposicion:a)?g.tipo:g,a))+'">\n  '+(null!=(g=(b.equal||a&&a.equal||j).call(a,null!=(g=null!=a?a.exposicion:a)?g.tipo:g,"actividad",{name:"equal",hash:{},fn:this.program(1,d,0,e,f),inverse:this.noop,data:d}))?g:"")+"\n  "+(null!=(g=(b.equal||a&&a.equal||j).call(a,null!=(g=null!=a?a.exposicion:a)?g.tipo:g,"exposicion",{name:"equal",hash:{},fn:this.program(3,d,0,e,f),inverse:this.noop,data:d}))?g:"")+"\n  "+(null!=(g=(b.equal||a&&a.equal||j).call(a,null!=(g=null!=a?a.exposicion:a)?g.tipo:g,"coleccion_viaja",{name:"equal",hash:{},fn:this.program(5,d,0,e,f),inverse:this.noop,data:d}))?g:"")+"\n"+(null!=(g=(b.equal||a&&a.equal||j).call(a,null!=a?a.lang:a,"es",{name:"equal",hash:{},fn:this.program(7,d,0,e,f),inverse:this.noop,data:d}))?g:"")+(null!=(g=(b.equal||a&&a.equal||j).call(a,null!=a?a.lang:a,"en",{name:"equal",hash:{},fn:this.program(14,d,0,e,f),inverse:this.noop,data:d}))?g:"")+"</div>\n\n<h2>"+i(h(null!=(g=null!=a?a.exposicion:a)?g.titulo:g,a))+'</h2>\n\n<div class="fecha-lugar">\n  '+i(h(null!=(g=null!=a?a.exposicion:a)?g.lugar:g,a))+'\n</div>\n\n<img src="'+i(h(null!=(g=null!=a?a.exposicion:a)?g.imagen:g,a))+'" class="img-responsive">\n\n<div class="datos-exposicion">\n  <span class="label">\n    '+(null!=(g=(b.equal||a&&a.equal||j).call(a,null!=a?a.lang:a,"es",{name:"equal",hash:{},fn:this.program(21,d,0,e,f),inverse:this.noop,data:d}))?g:"")+"\n    "+(null!=(g=(b.equal||a&&a.equal||j).call(a,null!=a?a.lang:a,"en",{name:"equal",hash:{},fn:this.program(23,d,0,e,f),inverse:this.noop,data:d}))?g:"")+"\n  </span>\n  "+i(h(null!=(g=null!=a?a.exposicion:a)?g.organizacion:g,a))+" <br>\n  \n"+(null!=(g=b["if"].call(a,null!=(g=null!=a?a.exposicion:a)?g.comisario:g,{name:"if",hash:{},fn:this.program(25,d,0,e,f),inverse:this.noop,data:d}))?g:"")+'  <a href="http://www.museoreinasofia.es'+i(h(null!=(g=null!=a?a.exposicion:a)?g.url:g,a))+'" target="_blank" class="btn btn-default btn-block">\n'+(null!=(g=(b.equal||a&&a.equal||j).call(a,null!=(g=null!=a?a.exposicion:a)?g.tipo:g,"actividad",{name:"equal",hash:{},fn:this.program(30,d,0,e,f),inverse:this.noop,data:d}))?g:"")+(null!=(g=(b.equal||a&&a.equal||j).call(a,null!=(g=null!=a?a.exposicion:a)?g.tipo:g,"exposicion",{name:"equal",hash:{},fn:this.program(35,d,0,e,f),inverse:this.noop,data:d}))?g:"")+(null!=(g=(b.equal||a&&a.equal||j).call(a,null!=(g=null!=a?a.exposicion:a)?g.tipo:g,"coleccion_viaja",{name:"equal",hash:{},fn:this.program(35,d,0,e,f),inverse:this.noop,data:d}))?g:"")+"  </a>\n</div>\n\n"+(null!=(g=(b.equal||a&&a.equal||j).call(a,null!=a?a.lang:a,"es",{name:"equal",hash:{},fn:this.program(40,d,0,e,f),inverse:this.noop,data:d}))?g:"")+"\n"+(null!=(g=(b.equal||a&&a.equal||j).call(a,null!=a?a.lang:a,"en",{name:"equal",hash:{},fn:this.program(42,d,0,e,f),inverse:this.noop,data:d}))?g:"")+'\n<div class="itinerancias">\n'+(null!=(g=b.each.call(a,null!=(g=null!=a?a.exposicion:a)?g.itinerancia:g,{name:"each",hash:{},fn:this.program(44,d,0,e,f),inverse:this.noop,data:d}))?g:"")+"</div>\n"},useData:!0,useDepths:!0}),this.ItineranciasTpls["app/templates/slider.hbs"]=Handlebars.template({1:function(){return"Todas"},3:function(){return"All"},5:function(){return"Colección"},7:function(){return"Collection"},9:function(){return"Exposiciones"},11:function(){return"Exhibitions"},13:function(){return"Actividades"},15:function(){return"Activities"},17:function(a,b,c,d){var e;return null!=(e=this.invokePartial(c["slider-item"],a,{name:"slider-item",data:d,indent:"          ",helpers:b,partials:c}))?e:""},19:function(){return"No hay resultados para ese filtrado. Modifique su selección."},compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e,f=b.helperMissing;return'<div class="controls">\n  <label>Filtrar:</label>\n  <button class="filter active" data-filter="all" id="Reset">\n    '+(null!=(e=(b.equal||a&&a.equal||f).call(a,null!=a?a.lang:a,"es",{name:"equal",hash:{},fn:this.program(1,d,0),inverse:this.noop,data:d}))?e:"")+"\n     "+(null!=(e=(b.equal||a&&a.equal||f).call(a,null!=a?a.lang:a,"en",{name:"equal",hash:{},fn:this.program(3,d,0),inverse:this.noop,data:d}))?e:"")+'\n  </button>\n  <form id="Filters">\n    <fieldset>\n      <button class="filter filter--coleccion_viaja" data-filter=".slider-item--coleccion_viaja">\n        '+(null!=(e=(b.equal||a&&a.equal||f).call(a,null!=a?a.lang:a,"es",{name:"equal",hash:{},fn:this.program(5,d,0),inverse:this.noop,data:d}))?e:"")+"\n        "+(null!=(e=(b.equal||a&&a.equal||f).call(a,null!=a?a.lang:a,"en",{name:"equal",hash:{},fn:this.program(7,d,0),inverse:this.noop,data:d}))?e:"")+'\n      </button>\n      <button class="filter filter--exposicion" data-filter=".slider-item--exposicion">\n        '+(null!=(e=(b.equal||a&&a.equal||f).call(a,null!=a?a.lang:a,"es",{name:"equal",hash:{},fn:this.program(9,d,0),inverse:this.noop,data:d}))?e:"")+"\n        "+(null!=(e=(b.equal||a&&a.equal||f).call(a,null!=a?a.lang:a,"en",{name:"equal",hash:{},fn:this.program(11,d,0),inverse:this.noop,data:d}))?e:"")+'  \n      </button>\n      <button class="filter filter--actividad" data-filter=".slider-item--actividad">\n        '+(null!=(e=(b.equal||a&&a.equal||f).call(a,null!=a?a.lang:a,"es",{name:"equal",hash:{},fn:this.program(13,d,0),inverse:this.noop,data:d}))?e:"")+"\n        "+(null!=(e=(b.equal||a&&a.equal||f).call(a,null!=a?a.lang:a,"en",{name:"equal",hash:{},fn:this.program(15,d,0),inverse:this.noop,data:d}))?e:"")+' \n      </button>\n    </fieldset>\n    <fieldset>\n      <button class="filter" data-filter=".y2015">2015</button>\n      <button class="filter" data-filter=".y2014">2014</button>\n      <button class="filter" data-filter=".y2013">2013</button>\n      <button class="filter" data-filter=".y2012">2012</button>\n      <button class="filter" data-filter=".y2011">2011</button>\n      <button class="filter" data-filter=".y2010">2010</button>\n      <button class="filter" data-filter=".y2009">2009</button>\n      <button class="filter" data-filter=".y2008">2008</button>\n      <button class="filter" data-filter=".y2007">2007</button>\n      <button class="filter" data-filter=".y2006">2006</button>\n      <button class="filter" data-filter=".y2005">2005</button>\n      <button class="filter" data-filter=".y2004">2004</button>\n      <button class="filter" data-filter=".y2003">2003</button>\n      <button class="filter" data-filter=".y2002">2002</button>\n      <button class="filter" data-filter=".y2001">2001</button>\n      <button class="filter" data-filter=".y2000">2000</button>\n      <button class="filter" data-filter=".y1999">1999</button>\n      <button class="filter" data-filter=".y1998">1998</button>\n      <button class="filter" data-filter=".y1997">1997</button>\n      <button class="filter" data-filter=".y1996">1996</button>\n      <button class="filter" data-filter=".y1995">1995</button>\n      <button class="filter" data-filter=".y1994">1994</button>\n      <button class="filter" data-filter=".y1993">1993</button>\n      <button class="filter" data-filter=".y1992">1992</button>\n      <button class="filter" data-filter=".y1991">1991</button>\n    </fieldset>\n  </form>\n</div>\n<div id="slider-container" class="slider-container thumbnails">\n'+(null!=(e=b.each.call(a,null!=a?a.exposiciones:a,{name:"each",hash:{},fn:this.program(17,d,0),inverse:this.noop,data:d}))?e:"")+'      <div class="vacio">\n        <p style="display:none">\n          '+(null!=(e=(b.equal||a&&a.equal||f).call(a,null!=a?a.lang:a,"es",{name:"equal",hash:{},fn:this.program(19,d,0),inverse:this.noop,data:d}))?e:"")+"\n          "+(null!=(e=(b.equal||a&&a.equal||f).call(a,null!=a?a.lang:a,"en",{name:"equal",hash:{},fn:this.program(19,d,0),inverse:this.noop,data:d}))?e:"")+" \n        </p>\n      </div>\n</div>\n\n"},usePartial:!0,useData:!0}),L.ItineranciaMarker=L.Marker.extend({initialize:function(a,b,c,d,e){this._exposicion=a,this._itinerancia=b,this._exposicionLayer=c,L.Marker.prototype.initialize.call(this,d,e)},getPopup:function(){var a=ItineranciasTpls["app/templates/exposicion-globo.hbs"];return a({exposicion:this._exposicion,itinerancia:this._itinerancia,lang:lang})},renderItinerancia:function(a){this._exposicionLayer.renderItinerancias(a)}}),L.itineranciaMarker=function(a,b,c,d,e){return new L.ItineranciaMarker(a,b,c,d,e)},L.ExposicionLayer=L.FeatureGroup.extend({options:{initLatLng:[]},initialize:function(a,b){this._exposicion=a,this._initLatLng=b.initLatLng,this._markerMuseo=b.markerMuseo,this._itineranciasLayer=L.featureGroup(),this._markers=[],this._colorResaltado=this.getColorResaltado(),this._colorExpo=this.getColorIconos();var c="itinerancia-marker y"+a.anio+"-marker slider-item--"+this._exposicion.tipo+"-marker slider-item--"+this._exposicion.tipo+"y"+a.anio+"-marker";this._icon=L.MakiMarkers.icon({icon:"town-hall",color:this._colorExpo,size:"s",className:c,popupAnchor:[0,-130]}),this._iconResaltado=L.MakiMarkers.icon({icon:"town-hall",color:this._colorResaltado,size:"m",className:"itinerancia-resaltada-marker"}),L.FeatureGroup.prototype.initialize.call(this)},getColorIconos:function(){return"actividad"==this._exposicion.tipo?"#88d2e5":"coleccion_viaja"==this._exposicion.tipo?"#d24e5b":"#e7d800"},getColorResaltado:function(){return"#333"},onAdd:function(a){L.FeatureGroup.prototype.onAdd.call(this,a),this.addLayer(this._markerMuseo),this.addLayer(this._itineranciasLayer);for(var b=0;b<this._exposicion.itinerancia.length;++b)if(null!==this._exposicion.itinerancia[b].lat&&null!==this._exposicion.itinerancia[b].lng){itinerancia=this._exposicion.itinerancia[b];var c=L.itineranciaMarker(this._exposicion,itinerancia,this,[itinerancia.lat,itinerancia.lng],{icon:this._icon});c.bindPopup(null!=this._exposicion.itinerancia[b].url?"<a href='"+this._exposicion.itinerancia[b].url+"' target='_blank'>"+this._exposicion.itinerancia[b].lugar+"</a>":this._exposicion.itinerancia[b].lugar),this._markers.push(c),c.on("click",renderItineranciasHandler),this.addLayer(c)}else console.log("--> Itinerancia esta mal: "),console.log(this._exposicion)},renderItinerancias:function(a){this._itineranciasLayer.clearLayers();for(var b=0;b<this._exposicion.itinerancia.length;++b)itinerancia=this._exposicion.itinerancia[b],null!==this._exposicion.itinerancia[b].lat&&null!==this._exposicion.itinerancia[b].lng&&this._itineranciasLayer.addLayer(L.polyline([this._initLatLng,L.latLng(itinerancia.lat,itinerancia.lng)],{color:this._colorExpo,weight:5,className:"linea-itinerancia"}));this.resaltarIconos(),a||this._map.fitBounds(this.getBounds(),{animate:!0,duration:1,maxZoom:6,paddingTopLeft:[20,50],paddingBottomRight:[20,240]}),this.bringToFront()},resaltarIconos:function(){for(var a=0;a<this._markers.length;++a)this._markers[a].setIcon(this._iconResaltado)},clearItineranciasLayer:function(){this.clearResaltarIconos(),this._itineranciasLayer.clearLayers()},clearResaltarIconos:function(){for(var a=0;a<this._markers.length;++a)this._markers[a].setIcon(this._icon)}}),L.createExposicionLayer=function(a,b){return new L.ExposicionLayer(a,b)},L.ItineranciasMap=L.Map.extend({initialize:function(a,b,c){this._exposiciones=b,this._initZoom=c.initZoom,this._initLatLng=c.initLatLng,this._exposicionesLayersHashMap={},this._exposicionesLayers=L.layerGroup(),this._mapCenter=c.mapCenter,this._renderMarkerMuseo(),this._initializeExposicionesLayers(this._exposicionesLayers,this._exposicionesLayersHashMap),c.layers=new Array(this._exposicionesLayers),L.Map.prototype.initialize.call(this,a,c)},_renderMarkerMuseo:function(){var a=L.MakiMarkers.icon({icon:"town-hall",color:"#333",size:"s",className:"mncars-marker"});this._markerMuseo=L.marker(this._initLatLng,{icon:a}),this._markerMuseo.bindPopup("<img src='imgs/logo.negro.png' id='logo-popup'><a href='http://www.museoreinasofia.es' target='_blank'><strong>Museo Nacional Centro de Arte Reina Sofía</strong></a><br> Madrid"),this._markerMuseo.setZIndexOffset(1e6)},_initializeExposicionesLayers:function(a,b){var c=this;$.each(this._exposiciones,function(d,e){var f=L.createExposicionLayer(e,{initLatLng:c._initLatLng,markerMuseo:c._markerMuseo});a.addLayer(f),b[e.nid]=f})},renderExposicion:function(a,b){this._exposicionesLayersHashMap[a].renderItinerancias(b)},getExposicionMarkers:function(a){return this._exposicionesLayersHashMap[a]._markers},clearAll:function(a){this._exposicionesLayers.eachLayer(function(a){a.clearItineranciasLayer()}),a||this.setView(this._mapCenter,this._initZoom,{animate:!0})},getExposicionLayers:function(){return this._exposicionesLayers}}),L.mapItinerancias=function(a,b,c){return new L.ItineranciasMap(a,b,c)},Slider={sliderTpl:ItineranciasTpls["app/templates/slider.hbs"],container:{},slides:{},map:{},fixed:!1,inj_target:$("footer"),initialize:function(a){this.inj_target.append(this.sliderTpl({exposiciones:exposiciones,lang:lang})),this.container=$("#slider-container"),this.container.mixItUp({animation:{duration:400,effects:"fade",easing:"ease"},controls:{enable:!1},callbacks:{onMixStart:function(b,c){if(a.clearAll(),$(".vacio p").hide(),".mix"==c.activeFilter)return void $(".itinerancia-marker").show();$(".itinerancia-marker").hide();var d="."+c.activeFilter.split(".").join("")+"-marker";$(d).show()},onMixFail:function(){$(".vacio p").show()}}}),this.slides=$(".slider-item"),this.map=a,this.bindActions()},bindActions:function(){var a=this;this.slides.hover(function(){a.fixed||(layer_id=$(this).data("layer"),a.map.renderExposicion(layer_id,!0))},function(){a.fixed||a.map.clearAll(!0)}).bind("click",function(b){b.preventDefault(),a.fixed&&$(this).is(".active")?a.clearFixed():a.fixed&&!$(this).is(".active")?(a.clearFixed(),a.fixed=!0,$(this).addClass("active"),layer_id=$(this).data("layer"),a.mostrarExposicion(layer_id),a.map.renderExposicion(layer_id,!1)):a.fixed||$(this).is(".active")||(a.fixed=!0,$(this).addClass("active"),layer_id=$(this).data("layer"),a.mostrarExposicion(layer_id),a.map.renderExposicion(layer_id,!1))})},clearFixed:function(){this.fixed=!1,this.container.find(".active").removeClass("active"),this.map.clearAll(!0)},mostrarExposicion:function(a){markers=this.map.getExposicionMarkers(a);var b=markers[0];$.event.trigger({type:"verItinerancia",exposicion_marker:b})},on:function(a,b){return this.eventList[a]=b,this},off:function(a){this.eventList[a]&&(this.eventList[a]=!1)}};var buttonFilter={$filters:null,$reset:null,groups:[],outputArray:[],outputString:"",init:function(){var a=this;a.$filters=$("#Filters"),a.$reset=$("#Reset"),a.$container=$("#slider-container"),a.$filters.find("fieldset").each(function(){a.groups.push({$buttons:$(this).find(".filter"),active:""})}),a.bindHandlers()},bindHandlers:function(){var a=this;a.$filters.on("click",".filter",function(b){b.preventDefault();var c=$(this);c.hasClass("active")?c.removeClass("active"):c.addClass("active").siblings(".filter").removeClass("active"),a.$reset.removeClass("active"),$(a).trigger("filter",[c,c.hasClass("active")]),a.parseFilters()}),a.$reset.on("click",function(b){a.$reset.addClass("active"),b.preventDefault(),$(a).trigger("reset"),a.$filters.find(".filter").removeClass("active"),a.parseFilters()})},parseFilters:function(){for(var a,b=this,c=0;a=b.groups[c];c++)a.active=a.$buttons.filter(".active").attr("data-filter")||"";b.concatenate()},concatenate:function(){var a=this;a.outputString="";for(var b,c=0;b=a.groups[c];c++)a.outputString+=b.active;!a.outputString.length&&(a.outputString="all"),a.$container.mixItUp("isLoaded")&&a.$container.mixItUp("filter",a.outputString)}};$(function(){buttonFilter.init()}),function(){function a(a){a=a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var b=new RegExp("[\\?&]"+a+"=([^&#]*)"),c=b.exec(location.search);return null===c?"":decodeURIComponent(c[1].replace(/\+/g," "))}$(".open-popup-link").magnificPopup({removalDelay:500,mainClass:"mfp-zoom-in",showCloseBtn:!1,type:"inline",callbacks:{beforeOpen:function(){this.st.mainClass=this.st.el.attr("data-effect")}}}).magnificPopup("open"),$(".btn-popup").click(function(){$.magnificPopup.close()});var b=a("estilo"),c="http://api.tiles.mapbox.com/v4/mncars.jdnk71aa/{z}/{x}/{y}.png256?access_token=pk.eyJ1IjoibW5jYXJzIiwiYSI6Ikd4LVhVVzQifQ.4aiQLhuKLILjMBNLFkDGxA";1==b?c="http://api.tiles.mapbox.com/v4/mncars.jb6c075e/{z}/{x}/{y}.png256?access_token=pk.eyJ1IjoibW5jYXJzIiwiYSI6Ikd4LVhVVzQifQ.4aiQLhuKLILjMBNLFkDGxA":2==b?c="http://{s}.tiles.mapbox.com/v3/openplans.map-g4j0dszr/{z}/{x}/{y}.png":3==b&&(c="http://api.tiles.mapbox.com/v4/mncars.jdnkpc5f/{z}/{x}/{y}.png256?access_token=pk.eyJ1IjoibW5jYXJzIiwiYSI6Ikd4LVhVVzQifQ.4aiQLhuKLILjMBNLFkDGxA");var d={tileUrl:c,tileAttrib:"Map tiles &copy; MapBox and OpenStreetMap ",initLatLng:new L.LatLng(40.408192,-3.694337),mapCenter:new L.LatLng(10,-28),initZoom:$(window).width()<800?2:3,minZoom:2,maxZoom:15},e=new Snap({element:document.getElementById("content"),touchToDrag:!1,maxPosition:265,minPosition:-265}),f=$(".snap-close-extra"),g=$(".snap-close-extra-wrapper");f.on("click",function(){f.removeClass("show"),g.removeClass("show"),e.close()}),e.on("close",function(){f.removeClass("show"),g.removeClass("show"),$("footer").removeClass("hide-bottom"),h.closePopup()}),$(".snap-close").click(function(){e.close()}),$("#open-left").click(function(){"closed"==e.state().state?($("footer").addClass("hide-bottom"),e.settings.maxPosition=265,e.settings.minPosition=-265,e.open("left")):e.close()});var h=L.mapItinerancias("map",exposiciones,{minZoom:d.minZoom,maxZoom:d.maxZoom,zoomControl:!1,snapper:e,initZoom:d.initZoom,initLatLng:d.initLatLng,riseOnHover:!0,mapCenter:d.mapCenter});new L.Control.Zoom({position:"topright"}).addTo(h),h.addLayer(new L.TileLayer(d.tileUrl,{attribution:d.tileAttrib})),h.setView(d.mapCenter,d.initZoom),$("html").hasClass("lt-ie9")||Slider.initialize(h),$(document).on("verItinerancia",function(a){h.clearAll(!0),a.exposicion_marker.renderItinerancia(),$(".exposicionThumbnail").html(a.exposicion_marker.getPopup()),$("footer").addClass("hide-bottom"),e.settings.maxPosition=320,e.settings.minPosition=-320,e.open("right"),setTimeout(function(){f.addClass("show"),g.addClass("show")},500)}),$("select").change(function(){return h.clearAll(),h.closePopup(),"all"==this.value?void $(".itinerancia-marker").show():($(".itinerancia-marker").hide(),$(this.value+"-marker").show(),void e.close())})}();