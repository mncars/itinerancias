function renderItineranciasHandler(a){$.event.trigger({type:"verItinerancia",exposicion_marker:a.target})}(function(a,b){"use strict";var c="Snap",d={extend:function(a,b){var c;for(c in b)b[c]&&b[c].constructor&&b[c].constructor===Object?(a[c]=a[c]||{},d.extend(a[c],b[c])):a[c]=b[c];return a}},e=function(c){var e=this,f=e.settings={element:null,dragger:null,disable:"none",addBodyClasses:!0,hyperextensible:!0,resistance:.5,flickThreshold:50,transitionSpeed:.3,easing:"ease",maxPosition:266,minPosition:-266,tapToClose:!0,touchToDrag:!0,clickToDrag:!0,slideIntent:40,minDragDistance:5},g=e.cache={isDragging:!1,simpleStates:{opening:null,towards:null,hyperExtending:null,halfway:null,flick:null,translation:{absolute:0,relative:0,sinceDirectionChange:0,percentage:0}}},h=e.eventList={};d.extend(d,{hasTouch:"ontouchstart"in b.documentElement||a.navigator.msPointerEnabled,eventType:function(a){var b={down:d.hasTouch?"touchstart":f.clickToDrag?"mousedown":"",move:d.hasTouch?"touchmove":f.clickToDrag?"mousemove":"",up:d.hasTouch?"touchend":f.clickToDrag?"mouseup":"",out:d.hasTouch?"touchcancel":f.clickToDrag?"mouseout":""};return b[a]},page:function(a,b){return d.hasTouch&&b.touches.length&&b.touches[0]?b.touches[0]["page"+a]:b["page"+a]},klass:{has:function(a,b){return-1!==a.className.indexOf(b)},add:function(a,b){!d.klass.has(a,b)&&f.addBodyClasses&&(a.className+=" "+b)},remove:function(a,b){d.klass.has(a,b)&&f.addBodyClasses&&(a.className=a.className.replace(b,"").replace(/^\s+|\s+$/g,""))}},dispatchEvent:function(a){return"function"==typeof h[a]?h[a].apply():void 0},vendor:function(){var a,c=b.createElement("div"),d="webkit Moz O ms".split(" ");for(a in d)if("undefined"!=typeof c.style[d[a]+"Transition"])return d[a]},transitionCallback:function(){return"Moz"===g.vendor||"ms"===g.vendor?"transitionend":g.vendor+"TransitionEnd"},canTransform:function(){return"undefined"!=typeof f.element.style[g.vendor+"Transform"]},angleOfDrag:function(a,b){var c,d;return d=Math.atan2(-(g.startDragY-b),g.startDragX-a),0>d&&(d+=2*Math.PI),c=Math.floor(d*(180/Math.PI)-180),0>c&&c>-180&&(c=360-Math.abs(c)),Math.abs(c)},events:{addEvent:function(a,b,c){return a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent?a.attachEvent("on"+b,c):void 0},removeEvent:function(a,b,c){return a.addEventListener?a.removeEventListener(b,c,!1):a.attachEvent?a.detachEvent("on"+b,c):void 0},prevent:function(a){a.preventDefault?a.preventDefault():a.returnValue=!1}},parentUntil:function(a,b){for(var c="string"==typeof b;a.parentNode;){if(c&&a.getAttribute&&a.getAttribute(b))return a;if(!c&&a===b)return a;a=a.parentNode}return null}});var i=e.action={translate:{get:{matrix:function(b){if(g.canTransform){var c=a.getComputedStyle(f.element)[g.vendor+"Transform"].match(/\((.*)\)/),d=8;return c?(c=c[1].split(","),16===c.length&&(b+=d),parseInt(c[b],10)):0}return parseInt(f.element.style.left,10)}},easeCallback:function(){f.element.style[g.vendor+"Transition"]="",g.translation=i.translate.get.matrix(4),g.easing=!1,0===g.easingTo&&(d.klass.remove(b.body,"snapjs-right"),d.klass.remove(b.body,"snapjs-left")),g.once&&(g.once.call(e,e.state()),delete g.once),d.dispatchEvent("animated"),d.events.removeEvent(f.element,d.transitionCallback(),i.translate.easeCallback)},easeTo:function(a,b){g.canTransform?(g.easing=!0,g.easingTo=a,f.element.style[g.vendor+"Transition"]="all "+f.transitionSpeed+"s "+f.easing,g.once=b,d.events.addEvent(f.element,d.transitionCallback(),i.translate.easeCallback),i.translate.x(a)):(g.translation=a,i.translate.x(a)),0===a&&(f.element.style[g.vendor+"Transform"]="")},x:function(c){if(!("left"===f.disable&&c>0||"right"===f.disable&&0>c))if(f.hyperextensible||(c===f.maxPosition||c>f.maxPosition?c=f.maxPosition:(c===f.minPosition||c<f.minPosition)&&(c=f.minPosition)),c=parseInt(c,10),isNaN(c)&&(c=0),g.canTransform){var d="translate3d("+c+"px, 0,0)";f.element.style[g.vendor+"Transform"]=d}else f.element.style.width=(a.innerWidth||b.documentElement.clientWidth)+"px",f.element.style.left=c+"px",f.element.style.right=""}},drag:{listen:function(){g.translation=0,g.easing=!1,d.events.addEvent(e.settings.element,d.eventType("down"),i.drag.startDrag),d.events.addEvent(e.settings.element,d.eventType("move"),i.drag.dragging),d.events.addEvent(e.settings.element,d.eventType("up"),i.drag.endDrag)},stopListening:function(){d.events.removeEvent(f.element,d.eventType("down"),i.drag.startDrag),d.events.removeEvent(f.element,d.eventType("move"),i.drag.dragging),d.events.removeEvent(f.element,d.eventType("up"),i.drag.endDrag)},startDrag:function(a){var b=a.target?a.target:a.srcElement,c=d.parentUntil(b,"data-snap-ignore");if(c)return void d.dispatchEvent("ignore");if(f.dragger){var e=d.parentUntil(b,f.dragger);if(!e&&g.translation!==f.minPosition&&g.translation!==f.maxPosition)return}d.dispatchEvent("start"),f.element.style[g.vendor+"Transition"]="",g.isDragging=!0,g.intentChecked=!1,g.startDragX=d.page("X",a),g.startDragY=d.page("Y",a),g.dragWatchers={current:0,last:0,hold:0,state:""},g.simpleStates={opening:null,towards:null,hyperExtending:null,halfway:null,flick:null,translation:{absolute:0,relative:0,sinceDirectionChange:0,percentage:0}}},dragging:function(a){if(g.isDragging&&f.touchToDrag){var c,e=d.page("X",a),h=d.page("Y",a),j=g.translation,k=i.translate.get.matrix(4),l=e-g.startDragX,m=k>0,n=l;if(g.intentChecked&&!g.hasIntent)return;if(f.addBodyClasses&&(k>0?(d.klass.add(b.body,"snapjs-left"),d.klass.remove(b.body,"snapjs-right")):0>k&&(d.klass.add(b.body,"snapjs-right"),d.klass.remove(b.body,"snapjs-left"))),g.hasIntent===!1||null===g.hasIntent){var o=d.angleOfDrag(e,h),p=o>=0&&o<=f.slideIntent||360>=o&&o>360-f.slideIntent,q=o>=180&&o<=180+f.slideIntent||180>=o&&o>=180-f.slideIntent;g.hasIntent=q||p?!0:!1,g.intentChecked=!0}if(f.minDragDistance>=Math.abs(e-g.startDragX)||g.hasIntent===!1)return;d.events.prevent(a),d.dispatchEvent("drag"),g.dragWatchers.current=e,g.dragWatchers.last>e?("left"!==g.dragWatchers.state&&(g.dragWatchers.state="left",g.dragWatchers.hold=e),g.dragWatchers.last=e):g.dragWatchers.last<e&&("right"!==g.dragWatchers.state&&(g.dragWatchers.state="right",g.dragWatchers.hold=e),g.dragWatchers.last=e),m?(f.maxPosition<k&&(c=(k-f.maxPosition)*f.resistance,n=l-c),g.simpleStates={opening:"left",towards:g.dragWatchers.state,hyperExtending:f.maxPosition<k,halfway:k>f.maxPosition/2,flick:Math.abs(g.dragWatchers.current-g.dragWatchers.hold)>f.flickThreshold,translation:{absolute:k,relative:l,sinceDirectionChange:g.dragWatchers.current-g.dragWatchers.hold,percentage:k/f.maxPosition*100}}):(f.minPosition>k&&(c=(k-f.minPosition)*f.resistance,n=l-c),g.simpleStates={opening:"right",towards:g.dragWatchers.state,hyperExtending:f.minPosition>k,halfway:k<f.minPosition/2,flick:Math.abs(g.dragWatchers.current-g.dragWatchers.hold)>f.flickThreshold,translation:{absolute:k,relative:l,sinceDirectionChange:g.dragWatchers.current-g.dragWatchers.hold,percentage:k/f.minPosition*100}}),i.translate.x(n+j)}},endDrag:function(a){if(g.isDragging){d.dispatchEvent("end");var b=i.translate.get.matrix(4);if(0===g.dragWatchers.current&&0!==b&&f.tapToClose)return d.dispatchEvent("close"),d.events.prevent(a),i.translate.easeTo(0),g.isDragging=!1,void(g.startDragX=0);"left"===g.simpleStates.opening?g.simpleStates.halfway||g.simpleStates.hyperExtending||g.simpleStates.flick?g.simpleStates.flick&&"left"===g.simpleStates.towards?i.translate.easeTo(0):(g.simpleStates.flick&&"right"===g.simpleStates.towards||g.simpleStates.halfway||g.simpleStates.hyperExtending)&&i.translate.easeTo(f.maxPosition):i.translate.easeTo(0):"right"===g.simpleStates.opening&&(g.simpleStates.halfway||g.simpleStates.hyperExtending||g.simpleStates.flick?g.simpleStates.flick&&"right"===g.simpleStates.towards?i.translate.easeTo(0):(g.simpleStates.flick&&"left"===g.simpleStates.towards||g.simpleStates.halfway||g.simpleStates.hyperExtending)&&i.translate.easeTo(f.minPosition):i.translate.easeTo(0)),g.isDragging=!1,g.startDragX=d.page("X",a)}}}};c.element&&(d.extend(f,c),g.vendor=d.vendor(),g.canTransform=d.canTransform(),i.drag.listen())};d.extend(e.prototype,{open:function(a,c){d.dispatchEvent("open"),d.klass.remove(b.body,"snapjs-expand-left"),d.klass.remove(b.body,"snapjs-expand-right"),"left"===a?(this.cache.simpleStates.opening="left",this.cache.simpleStates.towards="right",d.klass.add(b.body,"snapjs-left"),d.klass.remove(b.body,"snapjs-right"),this.action.translate.easeTo(this.settings.maxPosition,c)):"right"===a&&(this.cache.simpleStates.opening="right",this.cache.simpleStates.towards="left",d.klass.remove(b.body,"snapjs-left"),d.klass.add(b.body,"snapjs-right"),this.action.translate.easeTo(this.settings.minPosition,c))},close:function(a){d.dispatchEvent("close"),this.action.translate.easeTo(0,a)},expand:function(c){var e=a.innerWidth||b.documentElement.clientWidth;"left"===c?(d.dispatchEvent("expandLeft"),d.klass.add(b.body,"snapjs-expand-left"),d.klass.remove(b.body,"snapjs-expand-right")):(d.dispatchEvent("expandRight"),d.klass.add(b.body,"snapjs-expand-right"),d.klass.remove(b.body,"snapjs-expand-left"),e*=-1),this.action.translate.easeTo(e)},on:function(a,b){return this.eventList[a]=b,this},off:function(a){this.eventList[a]&&(this.eventList[a]=!1)},enable:function(){d.dispatchEvent("enable"),this.action.drag.listen()},disable:function(){d.dispatchEvent("disable"),this.action.drag.stopListening()},settings:function(a){d.extend(this.settings,a)},state:function(){var a,b=this.action.translate.get.matrix(4);return a=b===this.settings.maxPosition?"left":b===this.settings.minPosition?"right":"closed",{state:a,info:this.cache.simpleStates}}}),this[c]=e}).call(this,window,document),Handlebars.registerHelper("equal",function(a,b,c){if(arguments.length<3)throw new Error("Handlebars Helper equal needs 2 parameters");return a!=b?c.inverse(this):c.fn(this)}),this.ItineranciasTpls=this.ItineranciasTpls||{},Handlebars.registerPartial("slider-item",Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g,h="",i="function",j=this.escapeExpression;return h+='<div class="mix y',(g=c.anio)?f=g.call(b,{hash:{},data:e}):(g=b&&b.anio,f=typeof g===i?g.call(b,{hash:{},data:e}):g),h+=j(f)+" thumbnail slider-item slider-item--",(g=c.tipo)?f=g.call(b,{hash:{},data:e}):(g=b&&b.tipo,f=typeof g===i?g.call(b,{hash:{},data:e}):g),h+=j(f)+'" data-layer="',(g=c.nid)?f=g.call(b,{hash:{},data:e}):(g=b&&b.nid,f=typeof g===i?g.call(b,{hash:{},data:e}):g),h+=j(f)+'" data-myorder="'+j((f=null==e||e===!1?e:e.index,typeof f===i?f.apply(b):f))+'">\n  <a class="imagen" href="#">\n  	<div class="gradient-image">\n  		<span class="gradient"></span>\n    	<img src="',(g=c.imagen)?f=g.call(b,{hash:{},data:e}):(g=b&&b.imagen,f=typeof g===i?g.call(b,{hash:{},data:e}):g),h+=j(f)+'" />\n    </div>\n    <div class="caption">\n      <div class="titulo">',(g=c.titulo)?f=g.call(b,{hash:{},data:e}):(g=b&&b.titulo,f=typeof g===i?g.call(b,{hash:{},data:e}):g),h+=j(f)+'</div>\n      <div class="fechas">',(g=c.fechas)?f=g.call(b,{hash:{},data:e}):(g=b&&b.fechas,f=typeof g===i?g.call(b,{hash:{},data:e}):g),h+=j(f)+'</div>\n    </div>\n    <span class="overlay"></span>\n  </a>\n</div>\n'})),this.ItineranciasTpls["app/templates/exposicion-globo.hbs"]=Handlebars.template(function(a,b,c,d,e){function f(){return'<img src="/imgs/pin-actividad.png">'}function g(){return'<img src="/imgs/pin-exposicion.png">'}function h(){return'<img src="/imgs/pin-coleccion.png">'}function i(){return"Actividad"}function j(){return"Exposición"}function k(){return"La colección viaja"}function l(){return"+ detalles de la actividad"}function m(){return"+ detalles de la exposición"}function n(a,b,d){var e,f,g,h="";return h+='\n	  <div class="itinerancia',f=c.equal||a&&a.equal,g={hash:{},inverse:x.noop,fn:x.program(18,o,b),data:b},e=f?f.call(a,a&&a.nid,(e=d&&d.itinerancia,null==e||e===!1?e:e.nid),g):y.call(a,"equal",a&&a.nid,(e=d&&d.itinerancia,null==e||e===!1?e:e.nid),g),(e||0===e)&&(h+=e),h+='">\n	  	<div class="itinerancia-nombre">\n        ',e=c["if"].call(a,(e=a&&a.url,null==e||e===!1?e:e.length),{hash:{},inverse:x.program(22,q,b),fn:x.program(20,p,b),data:b}),(e||0===e)&&(h+=e),h+='\n	    </div>\n	    <div class="itinerancia-lugar">',(f=c.fechas)?e=f.call(a,{hash:{},data:b}):(f=a&&a.fechas,e=typeof f===v?f.call(a,{hash:{},data:b}):f),h+=w(e)+"</div>\n	  </div>\n	"}function o(){return" active"}function p(a,b){var d,e,f="";return f+='\n          <a href="',(e=c.url)?d=e.call(a,{hash:{},data:b}):(e=a&&a.url,d=typeof e===v?e.call(a,{hash:{},data:b}):e),f+=w(d)+'" target="_blank">',(e=c.lugar)?d=e.call(a,{hash:{},data:b}):(e=a&&a.lugar,d=typeof e===v?e.call(a,{hash:{},data:b}):e),f+=w(d)+"</a>\n        "}function q(a,b){var d,e,f="";return f+="\n          ",(e=c.lugar)?d=e.call(a,{hash:{},data:b}):(e=a&&a.lugar,d=typeof e===v?e.call(a,{hash:{},data:b}):e),f+=w(d)+"\n        "}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var r,s,t,u="",v="function",w=this.escapeExpression,x=this,y=c.helperMissing;return s=c.equal||b&&b.equal,t={hash:{},inverse:x.noop,fn:x.program(1,f,e),data:e},r=s?s.call(b,(r=b&&b.exposicion,null==r||r===!1?r:r.tipo),"actividad",t):y.call(b,"equal",(r=b&&b.exposicion,null==r||r===!1?r:r.tipo),"actividad",t),(r||0===r)&&(u+=r),u+="\n",s=c.equal||b&&b.equal,t={hash:{},inverse:x.noop,fn:x.program(3,g,e),data:e},r=s?s.call(b,(r=b&&b.exposicion,null==r||r===!1?r:r.tipo),"exposicion",t):y.call(b,"equal",(r=b&&b.exposicion,null==r||r===!1?r:r.tipo),"exposicion",t),(r||0===r)&&(u+=r),u+="\n",s=c.equal||b&&b.equal,t={hash:{},inverse:x.noop,fn:x.program(5,h,e),data:e},r=s?s.call(b,(r=b&&b.exposicion,null==r||r===!1?r:r.tipo),"coleccion_viaja",t):y.call(b,"equal",(r=b&&b.exposicion,null==r||r===!1?r:r.tipo),"coleccion_viaja",t),(r||0===r)&&(u+=r),u+='\n<span class="tipo--'+w((r=b&&b.exposicion,r=null==r||r===!1?r:r.tipo,typeof r===v?r.apply(b):r))+'">\n  ',s=c.equal||b&&b.equal,t={hash:{},inverse:x.noop,fn:x.program(7,i,e),data:e},r=s?s.call(b,(r=b&&b.exposicion,null==r||r===!1?r:r.tipo),"actividad",t):y.call(b,"equal",(r=b&&b.exposicion,null==r||r===!1?r:r.tipo),"actividad",t),(r||0===r)&&(u+=r),u+="\n  ",s=c.equal||b&&b.equal,t={hash:{},inverse:x.noop,fn:x.program(9,j,e),data:e},r=s?s.call(b,(r=b&&b.exposicion,null==r||r===!1?r:r.tipo),"exposicion",t):y.call(b,"equal",(r=b&&b.exposicion,null==r||r===!1?r:r.tipo),"exposicion",t),(r||0===r)&&(u+=r),u+="\n  ",s=c.equal||b&&b.equal,t={hash:{},inverse:x.noop,fn:x.program(11,k,e),data:e},r=s?s.call(b,(r=b&&b.exposicion,null==r||r===!1?r:r.tipo),"coleccion_viaja",t):y.call(b,"equal",(r=b&&b.exposicion,null==r||r===!1?r:r.tipo),"coleccion_viaja",t),(r||0===r)&&(u+=r),u+="\n</span>\n<h2>"+w((r=b&&b.exposicion,r=null==r||r===!1?r:r.titulo,typeof r===v?r.apply(b):r))+'</h2>\n\n<div class="fecha-lugar">\n  '+w((r=b&&b.exposicion,r=null==r||r===!1?r:r.fechas,typeof r===v?r.apply(b):r))+" <br>\n  "+w((r=b&&b.exposicion,r=null==r||r===!1?r:r.lugar,typeof r===v?r.apply(b):r))+'\n</div>\n\n<img src="'+w((r=b&&b.exposicion,r=null==r||r===!1?r:r.imagen,typeof r===v?r.apply(b):r))+'" class="img-responsive">\n\n<div class="datos-exposicion">\n  <span class="label">Organización:</span>  '+w((r=b&&b.exposicion,r=null==r||r===!1?r:r.organizacion,typeof r===v?r.apply(b):r))+' <br>\n  <span class="label">Comisariado:</span> '+w((r=b&&b.exposicion,r=null==r||r===!1?r:r.comisario,typeof r===v?r.apply(b):r))+' <br>\n\n  <a href="http://www.museoreinasofia.es'+w((r=b&&b.exposicion,r=null==r||r===!1?r:r.url,typeof r===v?r.apply(b):r))+'" target="_blank" class="btn btn-default btn-block">\n    ',s=c.equal||b&&b.equal,t={hash:{},inverse:x.noop,fn:x.program(13,l,e),data:e},r=s?s.call(b,(r=b&&b.exposicion,null==r||r===!1?r:r.tipo),"actividad",t):y.call(b,"equal",(r=b&&b.exposicion,null==r||r===!1?r:r.tipo),"actividad",t),(r||0===r)&&(u+=r),u+="\n    ",s=c.equal||b&&b.equal,t={hash:{},inverse:x.noop,fn:x.program(15,m,e),data:e},r=s?s.call(b,(r=b&&b.exposicion,null==r||r===!1?r:r.tipo),"exposicion",t):y.call(b,"equal",(r=b&&b.exposicion,null==r||r===!1?r:r.tipo),"exposicion",t),(r||0===r)&&(u+=r),u+="\n    ",s=c.equal||b&&b.equal,t={hash:{},inverse:x.noop,fn:x.program(15,m,e),data:e},r=s?s.call(b,(r=b&&b.exposicion,null==r||r===!1?r:r.tipo),"coleccion_viaja",t):y.call(b,"equal",(r=b&&b.exposicion,null==r||r===!1?r:r.tipo),"coleccion_viaja",t),(r||0===r)&&(u+=r),u+='\n  </a>\n</div>\n\n<h3>Itinerancias</h3>\n<div class="itinerancias">\n	',r=c.each.call(b,(r=b&&b.exposicion,null==r||r===!1?r:r.itinerancia),{hash:{},inverse:x.noop,fn:x.programWithDepth(17,n,e,b),data:e}),(r||0===r)&&(u+=r),u+="\n</div>\n"}),this.ItineranciasTpls["app/templates/slider.hbs"]=Handlebars.template(function(a,b,c,d,e){function f(a,b){var e,f="";return f+="\n        ",e=i.invokePartial(d["slider-item"],"slider-item",a,c,d,b),(e||0===e)&&(f+=e),f+="\n    "}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),d=this.merge(d,a.partials),e=e||{};var g,h="",i=this;return h+='<div class="controls">\n      <label>Filtrar:</label>\n      <button class="filter" data-filter="all">Todas</button>\n      <button class="filter" data-filter=".y2014">2014</button>\n      <button class="filter" data-filter=".y2013">2013</button>\n      <button class="filter" data-filter=".y2012">2012</button>\n      <button class="filter" data-filter=".y2011">2011</button>\n      <button class="filter" data-filter=".y2010">2010</button>\n      <button class="filter" data-filter=".y2009">2009</button>\n      <button class="filter" data-filter=".y2008">2008</button>\n      <button class="filter" data-filter=".y2007">2007</button>\n      <button class="filter" data-filter=".y2006">2006</button>\n      <button class="filter" data-filter=".y2005">2005</button>\n      <button class="filter" data-filter=".y2004">2004</button>\n      <button class="filter" data-filter=".y2003">2003</button>\n      <button class="filter" data-filter=".y2002">2002</button>\n      <button class="filter" data-filter=".y2001">2001</button>\n      <button class="filter" data-filter=".y2000">2000</button>\n      <button class="filter" data-filter=".y1999">1999</button>\n      <button class="filter" data-filter=".y1998">1998</button>\n      <button class="filter" data-filter=".y1997">1997</button>\n      <button class="filter" data-filter=".y1996">1996</button>\n      <button class="filter" data-filter=".y1995">1995</button>\n      <button class="filter" data-filter=".y1994">1994</button>\n      <button class="filter" data-filter=".y1993">1993</button>\n      <button class="filter" data-filter=".y1992">1992</button>\n      <button class="filter" data-filter=".y1991">1991</button>\n    </div>\n<div id="slider-container" class="slider-container thumbnails">\n    ',g=c.each.call(b,b,{hash:{},inverse:i.noop,fn:i.program(1,f,e),data:e}),(g||0===g)&&(h+=g),h+="\n</div>\n"}),L.ItineranciaMarker=L.Marker.extend({initialize:function(a,b,c,d,e){this._exposicion=a,this._itinerancia=b,this._exposicionLayer=c,L.Marker.prototype.initialize.call(this,d,e)},getPopup:function(){var a=ItineranciasTpls["app/templates/exposicion-globo.hbs"];return a({exposicion:this._exposicion,itinerancia:this._itinerancia})},renderItinerancia:function(a){this._exposicionLayer.renderItinerancias(a)}}),L.itineranciaMarker=function(a,b,c,d,e){return new L.ItineranciaMarker(a,b,c,d,e)},L.ExposicionLayer=L.FeatureGroup.extend({options:{initLatLng:[]},initialize:function(a,b){this._exposicion=a,this._initLatLng=b.initLatLng,this._markerMuseo=b.markerMuseo,this._itineranciasLayer=L.featureGroup(),this._markers=[],this._colorResaltado=this.getColorResaltado(),this._icon=L.MakiMarkers.icon({icon:"town-hall",color:"#333",size:"s",className:"itinerancia-marker y"+a.anio+"-marker",popupAnchor:[0,-130]}),this._iconResaltado=L.MakiMarkers.icon({icon:"town-hall",color:this._colorResaltado,size:"m",className:"itinerancia-resaltada-marker"}),L.FeatureGroup.prototype.initialize.call(this)},getColorResaltado:function(){return"actividad"==this._exposicion.tipo?"#88d2e5":"coleccion_viaja"==this._exposicion.tipo?"#d24e5b":"#e7d800"},onAdd:function(a){L.FeatureGroup.prototype.onAdd.call(this,a),this.addLayer(this._markerMuseo),this.addLayer(this._itineranciasLayer);for(var b=0;b<this._exposicion.itinerancia.length;++b)if(null!==this._exposicion.itinerancia[b].lat&&null!==this._exposicion.itinerancia[b].lng){itinerancia=this._exposicion.itinerancia[b];var c=L.itineranciaMarker(this._exposicion,itinerancia,this,[itinerancia.lat,itinerancia.lng],{icon:this._icon});c.bindPopup(null!=this._exposicion.itinerancia[b].url?"<a href='"+this._exposicion.itinerancia[b].url+"' target='_blank'>"+this._exposicion.itinerancia[b].lugar+"</a>":this._exposicion.itinerancia[b].lugar),this._markers.push(c),c.on("click",renderItineranciasHandler),this.addLayer(c)}else console.log("--> Itinerancia esta mal: "),console.log(this._exposicion)},renderItinerancias:function(a){this._itineranciasLayer.clearLayers();for(var b=0;b<this._exposicion.itinerancia.length;++b)itinerancia=this._exposicion.itinerancia[b],null!==this._exposicion.itinerancia[b].lat&&null!==this._exposicion.itinerancia[b].lng&&this._itineranciasLayer.addLayer(L.polyline([this._initLatLng,L.latLng(itinerancia.lat,itinerancia.lng)],{color:this._colorResaltado,weight:5,className:"linea-itinerancia"}));this.resaltarIconos(),a||this._map.fitBounds(this.getBounds(),{animate:!0,duration:1,maxZoom:6,paddingTopLeft:[330,20],paddingBottomRight:[20,240]}),this.bringToFront()},resaltarIconos:function(){for(var a=0;a<this._markers.length;++a)this._markers[a].setIcon(this._iconResaltado)},clearItineranciasLayer:function(){this.clearResaltarIconos(),this._itineranciasLayer.clearLayers()},clearResaltarIconos:function(){for(var a=0;a<this._markers.length;++a)this._markers[a].setIcon(this._icon)}}),L.createExposicionLayer=function(a,b){return new L.ExposicionLayer(a,b)},L.ItineranciasMap=L.Map.extend({initialize:function(a,b,c){this._exposiciones=b,this._initZoom=c.initZoom,this._initLatLng=c.initLatLng,this._exposicionesLayersHashMap={},this._exposicionesLayers=L.layerGroup(),this._mapCenter=c.mapCenter,this._renderMarkerMuseo(),this._initializeExposicionesLayers(this._exposicionesLayers,this._exposicionesLayersHashMap),c.layers=new Array(this._exposicionesLayers),L.Map.prototype.initialize.call(this,a,c)},_renderMarkerMuseo:function(){var a=L.MakiMarkers.icon({icon:"town-hall",color:"#e7d800",size:"m",className:"mncars-marker"});this._markerMuseo=L.marker(this._initLatLng,{icon:a}),this._markerMuseo.bindPopup("<img src='imgs/logo.negro.png' id='logo-popup'><a href='http://www.museoreinasofia.es' target='_blank'><strong>Museo Nacional Centro de Arte Reina Sofía</strong></a><br> Madrid"),this._markerMuseo.setZIndexOffset(1e6)},_initializeExposicionesLayers:function(a,b){var c=this;$.each(this._exposiciones,function(d,e){var f=L.createExposicionLayer(e,{initLatLng:c._initLatLng,markerMuseo:c._markerMuseo});a.addLayer(f),b[e.nid]=f})},renderExposicion:function(a,b){this._exposicionesLayersHashMap[a].renderItinerancias(b)},clearAll:function(a){this._exposicionesLayers.eachLayer(function(a){a.clearItineranciasLayer()}),a||this.setView(this._mapCenter,this._initZoom,{animate:!0})},getExposicionLayers:function(){return this._exposicionesLayers}}),L.mapItinerancias=function(a,b,c){return new L.ItineranciasMap(a,b,c)},Slider={sliderTpl:ItineranciasTpls["app/templates/slider.hbs"],container:{},slides:{},map:{},fixed:!1,inj_target:$("footer"),initialize:function(a){this.inj_target.append(this.sliderTpl(exposiciones)),this.container=$("#slider-container"),this.container.mixItUp({animation:{duration:400,effects:"fade",easing:"ease"},callbacks:{onMixStart:function(b,c){return a.clearAll(),".mix"==c.activeFilter?void $(".itinerancia-marker").show():($(".itinerancia-marker").hide(),void $(c.activeFilter+"-marker").show())}}}),this.slides=$(".slider-item"),this.map=a,this.bindActions()},bindActions:function(){var a=this;this.slides.hover(function(){a.fixed||(layer_id=$(this).data("layer"),a.map.renderExposicion(layer_id,!0))},function(){a.fixed||a.map.clearAll(!0)}).bind("click",function(b){b.preventDefault(),a.fixed&&$(this).is(".active")?a.clearFixed():a.fixed&&!$(this).is(".active")?(a.clearFixed(),a.fixed=!0,$(this).addClass("active"),layer_id=$(this).data("layer"),a.map.renderExposicion(layer_id,!1)):a.fixed||$(this).is(".active")||(a.fixed=!0,$(this).addClass("active"),layer_id=$(this).data("layer"),a.map.renderExposicion(layer_id,!1))})},clearFixed:function(){this.fixed=!1,this.container.find(".active").removeClass("active"),this.map.clearAll(!0)}},function(){function a(a){a=a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var b=new RegExp("[\\?&]"+a+"=([^&#]*)"),c=b.exec(location.search);return null===c?"":decodeURIComponent(c[1].replace(/\+/g," "))}var b=a("estilo"),c="http://{s}.tiles.mapbox.com/v3/openplans.map-g4j0dszr/{z}/{x}/{y}.png";1==b?c="http://api.tiles.mapbox.com/v4/mncars.jb6c075e/{z}/{x}/{y}.png256?access_token=pk.eyJ1IjoibW5jYXJzIiwiYSI6Ikd4LVhVVzQifQ.4aiQLhuKLILjMBNLFkDGxA":2==b?c="http://api.tiles.mapbox.com/v4/mncars.jdnk71aa/{z}/{x}/{y}.png256?access_token=pk.eyJ1IjoibW5jYXJzIiwiYSI6Ikd4LVhVVzQifQ.4aiQLhuKLILjMBNLFkDGxA":3==b&&(c="http://api.tiles.mapbox.com/v4/mncars.jdnkpc5f/{z}/{x}/{y}.png256?access_token=pk.eyJ1IjoibW5jYXJzIiwiYSI6Ikd4LVhVVzQifQ.4aiQLhuKLILjMBNLFkDGxA");var d={tileUrl:c,tileAttrib:"Map tiles &copy; MapBox and OpenStreetMap ",initLatLng:new L.LatLng(40.408192,-3.694337),mapCenter:new L.LatLng(10,-28),initZoom:3,minZoom:2,maxZoom:15},e=new Snap({element:document.getElementById("content"),touchToDrag:!1,maxPosition:265,minPosition:-265});$(".snap-close").click(function(){$("footer").removeClass("hide-bottom"),e.close()});var f=L.mapItinerancias("map",exposiciones,{minZoom:d.minZoom,maxZoom:d.maxZoom,zoomControl:!1,snapper:e,initZoom:d.initZoom,initLatLng:d.initLatLng,riseOnHover:!0,mapCenter:d.mapCenter});new L.Control.Zoom({position:"topright"}).addTo(f),f.addLayer(new L.TileLayer(d.tileUrl,{attribution:d.tileAttrib})),f.setView(d.mapCenter,d.initZoom),$("html").hasClass("lt-ie9")||Slider.initialize(f),$(document).on("verItinerancia",function(a){f.clearAll(!0),a.exposicion_marker.renderItinerancia(),$(".exposicionThumbnail").html(a.exposicion_marker.getPopup()),$("footer").addClass("hide-bottom"),e.settings.maxPosition=320,e.settings.minPosition=-320,e.open("right")});var g="closed";$("#open-left").click(function(){"closed"==g?(g="open",$("footer").addClass("hide-bottom"),e.settings.maxPosition=265,e.settings.minPosition=-265,e.open("left")):(g="closed",$("footer").removeClass("hide-bottom"),e.close())}),$("select").change(function(){return"all"==this.value?void $(".itinerancia-marker").show():($(".itinerancia-marker").hide(),void $(this.value+"-marker").show())})}();