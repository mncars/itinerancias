function renderItineranciasHandler(a){$.event.trigger({type:"verItinerancia",exposicion_marker:a.target})}Handlebars.registerHelper("equal",function(a,b,c){if(arguments.length<3)throw new Error("Handlebars Helper equal needs 2 parameters");return a!=b?c.inverse(this):c.fn(this)}),this.ItineranciasTpls=this.ItineranciasTpls||{},Handlebars.registerPartial("slider-item",Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g,h="",i="function",j=this.escapeExpression;return h+='<div class="mix y',(g=c.anio)?f=g.call(b,{hash:{},data:e}):(g=b&&b.anio,f=typeof g===i?g.call(b,{hash:{},data:e}):g),h+=j(f)+' thumbnail slider-item" data-layer="',(g=c.nid)?f=g.call(b,{hash:{},data:e}):(g=b&&b.nid,f=typeof g===i?g.call(b,{hash:{},data:e}):g),h+=j(f)+'" data-myorder="'+j((f=null==e||e===!1?e:e.index,typeof f===i?f.apply(b):f))+'">\n  <a class="imagen" href="#">\n  	<div class="gradient-image">\n  		<span class="gradient"></span>\n    	<img src="',(g=c.imagen)?f=g.call(b,{hash:{},data:e}):(g=b&&b.imagen,f=typeof g===i?g.call(b,{hash:{},data:e}):g),h+=j(f)+'">\n    </div>\n    <div class="caption">\n      <div class="titulo">',(g=c.titulo)?f=g.call(b,{hash:{},data:e}):(g=b&&b.titulo,f=typeof g===i?g.call(b,{hash:{},data:e}):g),h+=j(f)+'</div>\n      <div class="fechas">',(g=c.fechas)?f=g.call(b,{hash:{},data:e}):(g=b&&b.fechas,f=typeof g===i?g.call(b,{hash:{},data:e}):g),h+=j(f)+'</div>\n    </div>\n    <span class="overlay"></span>\n  </a>\n</div>\n'})),this.ItineranciasTpls["app/templates/exposicion-globo.hbs"]=Handlebars.template(function(a,b,c,d,e){function f(a,b,d){var e,f,h,i="";return i+='\n	  <div class="itinerancia',f=c.equal||a&&a.equal,h={hash:{},inverse:j.noop,fn:j.program(2,g,b),data:b},e=f?f.call(a,a&&a.nid,(e=d&&d.itinerancia,null==e||e===!1?e:e.nid),h):k.call(a,"equal",a&&a.nid,(e=d&&d.itinerancia,null==e||e===!1?e:e.nid),h),(e||0===e)&&(i+=e),i+='">\n	  	<div class="itinerancia-nombre">\n	    	<a href="',(f=c.url)?e=f.call(a,{hash:{},data:b}):(f=a&&a.url,e=typeof f===l?f.call(a,{hash:{},data:b}):f),i+=m(e)+'" target="_blank">',(f=c.lugar)?e=f.call(a,{hash:{},data:b}):(f=a&&a.lugar,e=typeof f===l?f.call(a,{hash:{},data:b}):f),i+=m(e)+'</a>\n	    </div>\n	    <div class="itinerancia-lugar">',(f=c.fechas)?e=f.call(a,{hash:{},data:b}):(f=a&&a.fechas,e=typeof f===l?f.call(a,{hash:{},data:b}):f),i+=m(e)+"</div>\n	  </div>\n	"}function g(){return" active"}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var h,i="",j=this,k=c.helperMissing,l="function",m=this.escapeExpression;return i+="<h2>"+m((h=b&&b.exposicion,h=null==h||h===!1?h:h.titulo,typeof h===l?h.apply(b):h))+'</h2>\n\n<div class="fecha-lugar">\n  '+m((h=b&&b.exposicion,h=null==h||h===!1?h:h.fechas,typeof h===l?h.apply(b):h))+" <br>\n  "+m((h=b&&b.exposicion,h=null==h||h===!1?h:h.lugar,typeof h===l?h.apply(b):h))+'\n</div>\n\n<img src="'+m((h=b&&b.exposicion,h=null==h||h===!1?h:h.imagen,typeof h===l?h.apply(b):h))+'" class="img-responsive">\n\n<div class="datos-exposicion">\n  <span class="label">Organización:</span>  '+m((h=b&&b.exposicion,h=null==h||h===!1?h:h.organizacion,typeof h===l?h.apply(b):h))+' <br>\n  <span class="label">Comisariado:</span> '+m((h=b&&b.exposicion,h=null==h||h===!1?h:h.comisario,typeof h===l?h.apply(b):h))+' <br>\n\n  <a href="http://www.museoreinasofia.es'+m((h=b&&b.exposicion,h=null==h||h===!1?h:h.url,typeof h===l?h.apply(b):h))+'" target="_blank" class="btn btn-default btn-block">+ detalles de la exposición</a>\n</div>\n\n\n\n<h3>Itinerancias</h3>\n<div class="itinerancias">\n	',h=c.each.call(b,(h=b&&b.exposicion,null==h||h===!1?h:h.itinerancia),{hash:{},inverse:j.noop,fn:j.programWithDepth(1,f,e,b),data:e}),(h||0===h)&&(i+=h),i+="\n</div>\n\n\n"}),this.ItineranciasTpls["app/templates/info.hbs"]=Handlebars.template(function(a,b,c,d,e){return this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{},"<h2>Itinerancias</h2>\n\n<p>\nLorem ipsum dolor sit amet, quodsi scriptorem conclusionemque id vim, numquam petentium eu vim. Minim oportere dissentiunt sea ex. Ei volumus verterem mediocrem nec, stet dolores facilisis usu ne, iriure minimum qualisque sit ad. Iriure scaevola usu no. Oratio tacimates per at, est rebum electram sadipscing at. Has dicant appareat temporibus cu, solum detracto ea usu, pri id decore vocent vivendum.</p>\n\n<p>\nNec aliquando dissentiunt ad, ut sea dicam facilisi. Hinc consequat efficiendi id nec, numquam sensibus abhorreant te his, te his congue conceptam. Mea eu errem delicatissimi, tacimates omittantur id mea, autem neglegentur id mei. Harum doming accusamus sea ut, homero platonem ut est, his debitis facilis ponderum ne.\n</p>\n"}),this.ItineranciasTpls["app/templates/slider.hbs"]=Handlebars.template(function(a,b,c,d,e){function f(a,b){var e,f="";return f+="\n        ",e=i.invokePartial(d["slider-item"],"slider-item",a,c,d,b),(e||0===e)&&(f+=e),f+="\n    "}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),d=this.merge(d,a.partials),e=e||{};var g,h="",i=this;return h+='<div class="controls">\n      <label>Filtrar:</label>\n      <button class="filter" data-filter="all">Todas</button>\n      <button class="filter" data-filter=".y2014">2014</button>\n      <button class="filter" data-filter=".y2013">2013</button>\n      <button class="filter" data-filter=".y2012">2012</button>\n      <button class="filter" data-filter=".y2011">2011</button>\n      <button class="filter" data-filter=".y2010">2010</button>\n      <button class="filter" data-filter=".y2009">2009</button>\n      <button class="filter" data-filter=".y2008">2008</button>\n      <button class="filter" data-filter=".y2007">2007</button>\n      <button class="filter" data-filter=".y2006">2006</button>\n      <button class="filter" data-filter=".y2005">2005</button>\n      <button class="filter" data-filter=".y2004">2004</button>\n      <button class="filter" data-filter=".y2003">2003</button>\n      <button class="filter" data-filter=".y2002">2002</button>\n      <button class="filter" data-filter=".y2001">2001</button>\n      <button class="filter" data-filter=".y2000">2000</button>\n      <button class="filter" data-filter=".y1999">1999</button>\n      <button class="filter" data-filter=".y1998">1998</button>\n      <button class="filter" data-filter=".y1997">1997</button>\n      <button class="filter" data-filter=".y1996">1996</button>\n      <button class="filter" data-filter=".y1995">1995</button>\n      <button class="filter" data-filter=".y1994">1994</button>\n      <button class="filter" data-filter=".y1993">1993</button>\n      <button class="filter" data-filter=".y1992">1992</button>\n      <button class="filter" data-filter=".y1991">1991</button>\n    </div>\n<div id="slider-container" class="slider-container thumbnails">\n    ',g=c.each.call(b,b,{hash:{},inverse:i.noop,fn:i.program(1,f,e),data:e}),(g||0===g)&&(h+=g),h+="\n</div>\n"}),L.ItineranciaMarker=L.Marker.extend({initialize:function(a,b,c,d,e){this._exposicion=a,this._itinerancia=b,this._exposicionLayer=c,L.Marker.prototype.initialize.call(this,d,e)},getPopup:function(){var a=ItineranciasTpls["app/templates/exposicion-globo.hbs"];return a({exposicion:this._exposicion,itinerancia:this._itinerancia})},renderItinerancia:function(a){this._exposicionLayer.renderItinerancias(a)}}),L.itineranciaMarker=function(a,b,c,d,e){return new L.ItineranciaMarker(a,b,c,d,e)},L.ExposicionLayer=L.FeatureGroup.extend({options:{initLatLng:[]},initialize:function(a,b){this._exposicion=a,this._initLatLng=b.initLatLng,this._markerMuseo=b.markerMuseo,this._itineranciasLayer=L.featureGroup(),this._markers=[],this._colorResaltado="#e7d800",this._icon=L.MakiMarkers.icon({icon:"town-hall",color:"#333",size:"s",className:"itinerancia-marker y"+a.anio+"-marker"}),this._iconResaltado=L.MakiMarkers.icon({icon:"town-hall",color:this._colorResaltado,size:"m"}),L.FeatureGroup.prototype.initialize.call(this)},onAdd:function(a){L.FeatureGroup.prototype.onAdd.call(this,a),this.addLayer(this._markerMuseo),this.addLayer(this._itineranciasLayer);for(var b=0;b<this._exposicion.itinerancia.length;++b)if(null!==this._exposicion.itinerancia[b].lat&&null!==this._exposicion.itinerancia[b].lng){itinerancia=this._exposicion.itinerancia[b];var c=L.itineranciaMarker(this._exposicion,itinerancia,this,[itinerancia.lat,itinerancia.lng],{icon:this._icon});this._markers.push(c),c.on("click",renderItineranciasHandler),this.addLayer(c)}else console.log("--> Itinerancia esta mal: "),console.log(this._exposicion)},renderItinerancias:function(a){this._itineranciasLayer.clearLayers();for(var b=0;b<this._exposicion.itinerancia.length;++b)itinerancia=this._exposicion.itinerancia[b],null!==this._exposicion.itinerancia[b].lat&&null!==this._exposicion.itinerancia[b].lng&&this._itineranciasLayer.addLayer(L.polyline([this._initLatLng,L.latLng(itinerancia.lat,itinerancia.lng)],{color:this._colorResaltado,weight:5}));this.resaltarIconos(),a||this._map.fitBounds(this.getBounds(),{animate:!0,duration:1,maxZoom:6,paddingTopLeft:[330,20],paddingBottomRight:[20,240]}),this._itineranciasLayer.bringToFront(),this.bringToFront()},resaltarIconos:function(){for(var a=0;a<this._markers.length;++a)this._markers[a].setIcon(this._iconResaltado)},clearItineranciasLayer:function(){this.clearResaltarIconos(),this._itineranciasLayer.clearLayers()},clearResaltarIconos:function(){for(var a=0;a<this._markers.length;++a)this._markers[a].setIcon(this._icon)}}),L.createExposicionLayer=function(a,b){return new L.ExposicionLayer(a,b)},L.ItineranciasMap=L.Map.extend({initialize:function(a,b,c){this._exposiciones=b,this._initZoom=c.initZoom,this._initLatLng=c.initLatLng,this._exposicionesLayersHashMap={},this._exposicionesLayers=L.layerGroup(),this._mapCenter=c.mapCenter,this._renderMarkerMuseo(),this._initializeExposicionesLayers(this._exposicionesLayers,this._exposicionesLayersHashMap),c.layers=new Array(this._exposicionesLayers),L.Map.prototype.initialize.call(this,a,c)},_renderMarkerMuseo:function(){var a=L.icon({iconUrl:"imgs/pin-mncars.png",iconSize:[30,70]});this._markerMuseo=L.marker(this._initLatLng,{icon:a})},_initializeExposicionesLayers:function(a,b){var c=this;$.each(this._exposiciones,function(d,e){var f=L.createExposicionLayer(e,{initLatLng:c._initLatLng,markerMuseo:c._markerMuseo});a.addLayer(f),b[e.nid]=f})},renderExposicion:function(a,b){this._exposicionesLayersHashMap[a].renderItinerancias(b)},clearAll:function(a){this._exposicionesLayers.eachLayer(function(a){a.clearItineranciasLayer()}),a||this.setView(this._mapCenter,this._initZoom,{animate:!0})},getExposicionLayers:function(){return this._exposicionesLayers}}),L.mapItinerancias=function(a,b,c){return new L.ItineranciasMap(a,b,c)},Slider={sliderTpl:ItineranciasTpls["app/templates/slider.hbs"],container:{},slides:{},map:{},fixed:!1,inj_target:$("footer"),initialize:function(a){this.inj_target.append(this.sliderTpl(exposiciones)),this.container=$("#slider-container"),this.container.mixItUp({animation:{duration:400,effects:"fade translateZ(-360px)",easing:"ease"},callbacks:{onMixStart:function(b,c){return a.clearAll(),".mix"==c.activeFilter?void $(".itinerancia-marker").show():($(".itinerancia-marker").hide(),void $(c.activeFilter+"-marker").show())}}}),this.slides=$(".slider-item"),this.map=a,this.bindActions()},bindActions:function(){var a=this;this.slides.hover(function(){a.fixed||(layer_id=$(this).data("layer"),a.map.renderExposicion(layer_id,!0))},function(){a.fixed||a.map.clearAll(!0)}).bind("click",function(b){b.preventDefault(),a.fixed&&$(this).is(".active")?a.clearFixed():a.fixed&&!$(this).is(".active")?(a.clearFixed(),a.fixed=!0,$(this).addClass("active"),layer_id=$(this).data("layer"),a.map.renderExposicion(layer_id,!1)):a.fixed||$(this).is(".active")||(a.fixed=!0,$(this).addClass("active"),layer_id=$(this).data("layer"),a.map.renderExposicion(layer_id,!1))})},clearFixed:function(){this.fixed=!1,this.container.find(".active").removeClass("active"),this.map.clearAll(!0)}},function(){var a={tileUrl:"http://{s}.tiles.mapbox.com/v3/openplans.map-g4j0dszr/{z}/{x}/{y}.png",tileAttrib:"Map tiles &copy; MapBox and OpenStreetMap ",initLatLng:new L.LatLng(40.408192,-3.694337),mapCenter:new L.LatLng(10,-28),initZoom:3,minZoom:2,maxZoom:15},b=new Snap({element:document.getElementById("content"),touchToDrag:!1,maxPosition:320,minPosition:-320});$(".snap-close").click(function(){$("footer").removeClass("hide"),b.close()});var c=L.mapItinerancias("map",exposiciones,{minZoom:a.minZoom,maxZoom:a.maxZoom,zoomControl:!1,snapper:b,initZoom:a.initZoom,initLatLng:a.initLatLng,riseOnHover:!0,mapCenter:a.mapCenter});new L.Control.Zoom({position:"topright"}).addTo(c),c.addLayer(new L.TileLayer(a.tileUrl,{attribution:a.tileAttrib})),c.setView(a.mapCenter,a.initZoom),Slider.initialize(c),c.on("click",function(){}),$(document).on("verItinerancia",function(a){c.clearAll(!0),a.exposicion_marker.renderItinerancia(),$(".exposicionThumbnail").html(a.exposicion_marker.getPopup()),$("footer").addClass("hide"),b.open("right")}),$("#menu a").click(function(){$(this).toggleClass("active")}),$(".btn_share").click(function(){var a=$("#compartir");a.hasClass("open")?a.removeClass("open"):a.addClass("open")}),$(".btn_info").click(function(){if("closed"==b.state().state){var a=ItineranciasTpls["app/templates/info.hbs"];$(".snap-drawer-left").html(a()),$("footer").addClass("hide"),b.open("left")}else $("footer").removeClass("hide"),b.close()}),$(".btn_cerrar_info").click(function(){var a=$("#branding");a.hasClass("closed")?a.removeClass("closed"):a.addClass("closed")})}();