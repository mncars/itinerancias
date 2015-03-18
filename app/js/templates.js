this["ItineranciasTpls"] = this["ItineranciasTpls"] || {};

Handlebars.registerPartial("slider-item", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"mix y";
  if (helper = helpers.anio) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.anio); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " thumbnail slider-item slider-item--";
  if (helper = helpers.tipo) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.tipo); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-layer=\"";
  if (helper = helpers.nid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.nid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-myorder=\""
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n  <a class=\"imagen\" href=\"#\">\n  	<div class=\"gradient-image\">\n  		<span class=\"gradient\"></span>\n    	<img src=\"";
  if (helper = helpers.imagen) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.imagen); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" />\n    </div>\n    <div class=\"caption\">\n      <div class=\"titulo\">";
  if (helper = helpers.titulo) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.titulo); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n      <div class=\"fechas\">";
  if (helper = helpers.fechas) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fechas); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n    </div>\n    <span class=\"overlay\"></span>\n  </a>\n</div>\n";
  return buffer;
  }));

this["ItineranciasTpls"]["app/templates/exposicion-globo.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "<img src=\"imgs/pin-actividad.png\">";
  }

function program3(depth0,data) {
  
  
  return "<img src=\"imgs/pin-exposicion.png\">";
  }

function program5(depth0,data) {
  
  
  return "<img src=\"imgs/pin-coleccion.png\">";
  }

function program7(depth0,data) {
  
  
  return "<span class=\"tipo__texto\">Actividad</span>";
  }

function program9(depth0,data) {
  
  
  return "<span class=\"tipo__texto\">Exposición</span>";
  }

function program11(depth0,data) {
  
  
  return "<span class=\"tipo__texto\">Colección</span>";
  }

function program13(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <span class=\"label\">Comisariado:</span> "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.exposicion)),stack1 == null || stack1 === false ? stack1 : stack1.comisario)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " <br>\n  ";
  return buffer;
  }

function program15(depth0,data) {
  
  
  return "+ detalles de la actividad";
  }

function program17(depth0,data) {
  
  
  return "+ detalles de la exposición";
  }

function program19(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n	  <div class=\"itinerancia";
  stack1 = (helper = helpers.equal || (depth0 && depth0.equal),options={hash:{},inverse:self.noop,fn:self.program(20, program20, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.nid), ((stack1 = (depth1 && depth1.itinerancia)),stack1 == null || stack1 === false ? stack1 : stack1.nid), options) : helperMissing.call(depth0, "equal", (depth0 && depth0.nid), ((stack1 = (depth1 && depth1.itinerancia)),stack1 == null || stack1 === false ? stack1 : stack1.nid), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n	  	<div class=\"itinerancia-nombre\">\n        ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.url)),stack1 == null || stack1 === false ? stack1 : stack1.length), {hash:{},inverse:self.program(24, program24, data),fn:self.program(22, program22, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	    </div>\n	    <div class=\"itinerancia-lugar\">";
  if (helper = helpers.fechas) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fechas); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n	  </div>\n	";
  return buffer;
  }
function program20(depth0,data) {
  
  
  return " active";
  }

function program22(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n          <a href=\"";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" target=\"_blank\">";
  if (helper = helpers.lugar) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.lugar); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n        ";
  return buffer;
  }

function program24(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n          ";
  if (helper = helpers.lugar) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.lugar); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n        ";
  return buffer;
  }

  buffer += "<div class=\"tipo tipo--"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.exposicion)),stack1 == null || stack1 === false ? stack1 : stack1.tipo)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n  ";
  stack1 = (helper = helpers.equal || (depth0 && depth0.equal),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.exposicion)),stack1 == null || stack1 === false ? stack1 : stack1.tipo), "actividad", options) : helperMissing.call(depth0, "equal", ((stack1 = (depth0 && depth0.exposicion)),stack1 == null || stack1 === false ? stack1 : stack1.tipo), "actividad", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  stack1 = (helper = helpers.equal || (depth0 && depth0.equal),options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.exposicion)),stack1 == null || stack1 === false ? stack1 : stack1.tipo), "exposicion", options) : helperMissing.call(depth0, "equal", ((stack1 = (depth0 && depth0.exposicion)),stack1 == null || stack1 === false ? stack1 : stack1.tipo), "exposicion", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  stack1 = (helper = helpers.equal || (depth0 && depth0.equal),options={hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.exposicion)),stack1 == null || stack1 === false ? stack1 : stack1.tipo), "coleccion_viaja", options) : helperMissing.call(depth0, "equal", ((stack1 = (depth0 && depth0.exposicion)),stack1 == null || stack1 === false ? stack1 : stack1.tipo), "coleccion_viaja", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n  ";
  stack1 = (helper = helpers.equal || (depth0 && depth0.equal),options={hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.exposicion)),stack1 == null || stack1 === false ? stack1 : stack1.tipo), "actividad", options) : helperMissing.call(depth0, "equal", ((stack1 = (depth0 && depth0.exposicion)),stack1 == null || stack1 === false ? stack1 : stack1.tipo), "actividad", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  stack1 = (helper = helpers.equal || (depth0 && depth0.equal),options={hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.exposicion)),stack1 == null || stack1 === false ? stack1 : stack1.tipo), "exposicion", options) : helperMissing.call(depth0, "equal", ((stack1 = (depth0 && depth0.exposicion)),stack1 == null || stack1 === false ? stack1 : stack1.tipo), "exposicion", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  stack1 = (helper = helpers.equal || (depth0 && depth0.equal),options={hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.exposicion)),stack1 == null || stack1 === false ? stack1 : stack1.tipo), "coleccion_viaja", options) : helperMissing.call(depth0, "equal", ((stack1 = (depth0 && depth0.exposicion)),stack1 == null || stack1 === false ? stack1 : stack1.tipo), "coleccion_viaja", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n\n<div class=\"produccion\">Producción propia</div>\n\n<h2>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.exposicion)),stack1 == null || stack1 === false ? stack1 : stack1.titulo)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h2>\n\n<div class=\"fecha-lugar\">\n  "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.exposicion)),stack1 == null || stack1 === false ? stack1 : stack1.fechas)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " <br>\n  "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.exposicion)),stack1 == null || stack1 === false ? stack1 : stack1.lugar)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n</div>\n\n<img src=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.exposicion)),stack1 == null || stack1 === false ? stack1 : stack1.imagen)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"img-responsive\">\n\n<div class=\"datos-exposicion\">\n  <span class=\"label\">Organización:</span>  "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.exposicion)),stack1 == null || stack1 === false ? stack1 : stack1.organizacion)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " <br>\n  ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.exposicion)),stack1 == null || stack1 === false ? stack1 : stack1.comisario), {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  <a href=\"http://www.museoreinasofia.es"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.exposicion)),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" target=\"_blank\" class=\"btn btn-default btn-block\">\n    ";
  stack1 = (helper = helpers.equal || (depth0 && depth0.equal),options={hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.exposicion)),stack1 == null || stack1 === false ? stack1 : stack1.tipo), "actividad", options) : helperMissing.call(depth0, "equal", ((stack1 = (depth0 && depth0.exposicion)),stack1 == null || stack1 === false ? stack1 : stack1.tipo), "actividad", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = (helper = helpers.equal || (depth0 && depth0.equal),options={hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.exposicion)),stack1 == null || stack1 === false ? stack1 : stack1.tipo), "exposicion", options) : helperMissing.call(depth0, "equal", ((stack1 = (depth0 && depth0.exposicion)),stack1 == null || stack1 === false ? stack1 : stack1.tipo), "exposicion", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = (helper = helpers.equal || (depth0 && depth0.equal),options={hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.exposicion)),stack1 == null || stack1 === false ? stack1 : stack1.tipo), "coleccion_viaja", options) : helperMissing.call(depth0, "equal", ((stack1 = (depth0 && depth0.exposicion)),stack1 == null || stack1 === false ? stack1 : stack1.tipo), "coleccion_viaja", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </a>\n</div>\n\n<h3>Itinerancias</h3>\n<div class=\"itinerancias\">\n	";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.exposicion)),stack1 == null || stack1 === false ? stack1 : stack1.itinerancia), {hash:{},inverse:self.noop,fn:self.programWithDepth(19, program19, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;
  });

this["ItineranciasTpls"]["app/templates/slider.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          ";
  stack1 = self.invokePartial(partials['slider-item'], 'slider-item', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;
  }

  buffer += "<div class=\"controls\">\n  <label>Filtrar:</label>\n  <button class=\"filter active\" data-filter=\"all\" id=\"Reset\">Todas</button>\n  <form id=\"Filters\">\n    <fieldset>\n      <button class=\"filter filter--coleccion_viaja\" data-filter=\".slider-item--coleccion_viaja\">Colección</button>\n      <button class=\"filter filter--exposicion\" data-filter=\".slider-item--exposicion\">Exposición</button>\n      <button class=\"filter filter--actividad\" data-filter=\".slider-item--actividad\">Actividad</button>\n    </fieldset>\n    <fieldset>\n      <button class=\"filter\" data-filter=\".y2015\">2015</button>\n      <button class=\"filter\" data-filter=\".y2014\">2014</button>\n      <button class=\"filter\" data-filter=\".y2013\">2013</button>\n      <button class=\"filter\" data-filter=\".y2012\">2012</button>\n      <button class=\"filter\" data-filter=\".y2011\">2011</button>\n      <button class=\"filter\" data-filter=\".y2010\">2010</button>\n      <button class=\"filter\" data-filter=\".y2009\">2009</button>\n      <button class=\"filter\" data-filter=\".y2008\">2008</button>\n      <button class=\"filter\" data-filter=\".y2007\">2007</button>\n      <button class=\"filter\" data-filter=\".y2006\">2006</button>\n      <button class=\"filter\" data-filter=\".y2005\">2005</button>\n      <button class=\"filter\" data-filter=\".y2004\">2004</button>\n      <button class=\"filter\" data-filter=\".y2003\">2003</button>\n      <button class=\"filter\" data-filter=\".y2002\">2002</button>\n      <button class=\"filter\" data-filter=\".y2001\">2001</button>\n      <button class=\"filter\" data-filter=\".y2000\">2000</button>\n      <button class=\"filter\" data-filter=\".y1999\">1999</button>\n      <button class=\"filter\" data-filter=\".y1998\">1998</button>\n      <button class=\"filter\" data-filter=\".y1997\">1997</button>\n      <button class=\"filter\" data-filter=\".y1996\">1996</button>\n      <button class=\"filter\" data-filter=\".y1995\">1995</button>\n      <button class=\"filter\" data-filter=\".y1994\">1994</button>\n      <button class=\"filter\" data-filter=\".y1993\">1993</button>\n      <button class=\"filter\" data-filter=\".y1992\">1992</button>\n      <button class=\"filter\" data-filter=\".y1991\">1991</button>\n    </fieldset>\n  </form>\n</div>\n<div id=\"slider-container\" class=\"slider-container thumbnails\">\n      ";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      <div class=\"vacio\"><p style=\"display:none\"> No hay resultados para ese filtrado. Modifique su selección.</p></div>\n</div>\n\n";
  return buffer;
  });