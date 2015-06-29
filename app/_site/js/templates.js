this["ItineranciasTpls"] = this["ItineranciasTpls"] || {};

Handlebars.registerPartial("slider-item", Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return " slider-item--"
    + this.escapeExpression(((helper = (helper = helpers.produccion || (depth0 != null ? depth0.produccion : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"produccion","hash":{},"data":data}) : helper)));
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"mix y"
    + alias3(((helper = (helper = helpers.anio || (depth0 != null ? depth0.anio : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"anio","hash":{},"data":data}) : helper)))
    + " thumbnail slider-item slider-item--"
    + alias3(((helper = (helper = helpers.tipo || (depth0 != null ? depth0.tipo : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"tipo","hash":{},"data":data}) : helper)))
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.produccion : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\" data-layer=\""
    + alias3(((helper = (helper = helpers.nid || (depth0 != null ? depth0.nid : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"nid","hash":{},"data":data}) : helper)))
    + "\" data-myorder=\""
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\n  <a class=\"imagen\" href=\"#\">\n  	<div class=\"gradient-image\">\n  		<span class=\"gradient\"></span>\n    	<img src=\""
    + alias3(((helper = (helper = helpers.imagen || (depth0 != null ? depth0.imagen : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"imagen","hash":{},"data":data}) : helper)))
    + "\" />\n    </div>\n    <div class=\"caption\">\n      <div class=\"titulo\">"
    + alias3(((helper = (helper = helpers.titulo || (depth0 != null ? depth0.titulo : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"titulo","hash":{},"data":data}) : helper)))
    + "</div>\n      <div class=\"fechas\">"
    + alias3(((helper = (helper = helpers.fechas || (depth0 != null ? depth0.fechas : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fechas","hash":{},"data":data}) : helper)))
    + "</div>\n    </div>\n    <span class=\"overlay\"></span>\n  </a>\n</div>\n";
},"useData":true}));

this["ItineranciasTpls"]["app/templates/exposicion-globo.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "<img src=\"imgs/pin-actividad.png\">";
},"3":function(depth0,helpers,partials,data) {
    return "<img src=\"imgs/pin-exposicion.png\">";
},"5":function(depth0,helpers,partials,data) {
    return "<img src=\"imgs/pin-coleccion.png\">";
},"7":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing;

  return "    "
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.exposicion : depth0)) != null ? stack1.tipo : stack1),"actividad",{"name":"equal","hash":{},"fn":this.program(8, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n    "
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.exposicion : depth0)) != null ? stack1.tipo : stack1),"exposicion",{"name":"equal","hash":{},"fn":this.program(10, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n    "
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.exposicion : depth0)) != null ? stack1.tipo : stack1),"coleccion_viaja",{"name":"equal","hash":{},"fn":this.program(12, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"8":function(depth0,helpers,partials,data) {
    return "<span class=\"tipo__texto\">Actividad</span>";
},"10":function(depth0,helpers,partials,data) {
    return "<span class=\"tipo__texto\">Exposición</span>";
},"12":function(depth0,helpers,partials,data) {
    return "<span class=\"tipo__texto\">Colección</span>";
},"14":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing;

  return "    "
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.exposicion : depth0)) != null ? stack1.tipo : stack1),"actividad",{"name":"equal","hash":{},"fn":this.program(15, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n    "
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.exposicion : depth0)) != null ? stack1.tipo : stack1),"exposicion",{"name":"equal","hash":{},"fn":this.program(17, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n    "
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.exposicion : depth0)) != null ? stack1.tipo : stack1),"coleccion_viaja",{"name":"equal","hash":{},"fn":this.program(19, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"15":function(depth0,helpers,partials,data) {
    return "<span class=\"tipo__texto\">Activity</span>";
},"17":function(depth0,helpers,partials,data) {
    return "<span class=\"tipo__texto\">Exhibition</span>";
},"19":function(depth0,helpers,partials,data) {
    return "<span class=\"tipo__texto\">Collection</span>";
},"21":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing;

  return "    <div class=\"produccion\">\n      "
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias1).call(depth0,(depth0 != null ? depth0.lang : depth0),"es",{"name":"equal","hash":{},"fn":this.program(22, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n      "
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias1).call(depth0,(depth0 != null ? depth0.lang : depth0),"en",{"name":"equal","hash":{},"fn":this.program(24, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n    </div>\n";
},"22":function(depth0,helpers,partials,data) {
    return "Producción propia";
},"24":function(depth0,helpers,partials,data) {
    return "In-house Production";
},"26":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing;

  return "    <div class=\"produccion\">\n      "
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias1).call(depth0,(depth0 != null ? depth0.lang : depth0),"es",{"name":"equal","hash":{},"fn":this.program(27, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n      "
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias1).call(depth0,(depth0 != null ? depth0.lang : depth0),"en",{"name":"equal","hash":{},"fn":this.program(29, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  \n    </div>\n";
},"27":function(depth0,helpers,partials,data) {
    return "Producción ajena";
},"29":function(depth0,helpers,partials,data) {
    return "External Production";
},"31":function(depth0,helpers,partials,data) {
    return "Organización:";
},"33":function(depth0,helpers,partials,data) {
    return "Organization:";
},"35":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing;

  return "    <span class=\"label\">\n      "
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias1).call(depth0,(depth0 != null ? depth0.lang : depth0),"es",{"name":"equal","hash":{},"fn":this.program(36, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n      "
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias1).call(depth0,(depth0 != null ? depth0.lang : depth0),"en",{"name":"equal","hash":{},"fn":this.program(38, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n    </span> "
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.exposicion : depth0)) != null ? stack1.comisario : stack1), depth0))
    + " <br>\n";
},"36":function(depth0,helpers,partials,data) {
    return "Comisariado:";
},"38":function(depth0,helpers,partials,data) {
    return "Curatorship:";
},"40":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing;

  return "      "
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias1).call(depth0,(depth0 != null ? depth0.lang : depth0),"es",{"name":"equal","hash":{},"fn":this.program(41, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n      "
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias1).call(depth0,(depth0 != null ? depth0.lang : depth0),"en",{"name":"equal","hash":{},"fn":this.program(43, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"41":function(depth0,helpers,partials,data) {
    return "+ detalles de la actividad";
},"43":function(depth0,helpers,partials,data) {
    return "+ activity details";
},"45":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing;

  return "      "
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias1).call(depth0,(depth0 != null ? depth0.lang : depth0),"es",{"name":"equal","hash":{},"fn":this.program(46, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n      "
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias1).call(depth0,(depth0 != null ? depth0.lang : depth0),"en",{"name":"equal","hash":{},"fn":this.program(48, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"46":function(depth0,helpers,partials,data) {
    return "+ detalles de la exposición";
},"48":function(depth0,helpers,partials,data) {
    return "+ exhibition details";
},"50":function(depth0,helpers,partials,data) {
    return "<h3>Itinerancias</h3>";
},"52":function(depth0,helpers,partials,data) {
    return "<h3>Touring Exhibitions</h3>";
},"54":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing;

  return "	  <div class=\"itinerancia"
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias1).call(depth0,(depth0 != null ? depth0.nid : depth0),((stack1 = (depths[1] != null ? depths[1].itinerancia : depths[1])) != null ? stack1.nid : stack1),{"name":"equal","hash":{},"fn":this.program(55, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\">\n	  	<div class=\"itinerancia-nombre\">\n"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.url : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":this.program(57, data, 0, blockParams, depths),"inverse":this.program(59, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "	    </div>\n	    <div class=\"itinerancia-lugar\">"
    + this.escapeExpression(((helper = (helper = helpers.fechas || (depth0 != null ? depth0.fechas : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"fechas","hash":{},"data":data}) : helper)))
    + "</div>\n	  </div>\n";
},"55":function(depth0,helpers,partials,data) {
    return " active";
},"57":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "          <a href=\""
    + alias3(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"url","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\">"
    + alias3(((helper = (helper = helpers.lugar || (depth0 != null ? depth0.lugar : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"lugar","hash":{},"data":data}) : helper)))
    + "</a>\n";
},"59":function(depth0,helpers,partials,data) {
    var helper;

  return "          "
    + this.escapeExpression(((helper = (helper = helpers.lugar || (depth0 != null ? depth0.lugar : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"lugar","hash":{},"data":data}) : helper)))
    + "\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression, alias3=helpers.helperMissing;

  return "<div class=\"tipo tipo--"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.exposicion : depth0)) != null ? stack1.tipo : stack1), depth0))
    + "\">\n  "
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias3).call(depth0,((stack1 = (depth0 != null ? depth0.exposicion : depth0)) != null ? stack1.tipo : stack1),"actividad",{"name":"equal","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n  "
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias3).call(depth0,((stack1 = (depth0 != null ? depth0.exposicion : depth0)) != null ? stack1.tipo : stack1),"exposicion",{"name":"equal","hash":{},"fn":this.program(3, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n  "
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias3).call(depth0,((stack1 = (depth0 != null ? depth0.exposicion : depth0)) != null ? stack1.tipo : stack1),"coleccion_viaja",{"name":"equal","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias3).call(depth0,(depth0 != null ? depth0.lang : depth0),"es",{"name":"equal","hash":{},"fn":this.program(7, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias3).call(depth0,(depth0 != null ? depth0.lang : depth0),"en",{"name":"equal","hash":{},"fn":this.program(14, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n"
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias3).call(depth0,((stack1 = (depth0 != null ? depth0.exposicion : depth0)) != null ? stack1.produccion : stack1),"propia",{"name":"equal","hash":{},"fn":this.program(21, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias3).call(depth0,((stack1 = (depth0 != null ? depth0.exposicion : depth0)) != null ? stack1.produccion : stack1),"ajena",{"name":"equal","hash":{},"fn":this.program(26, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n<h2>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.exposicion : depth0)) != null ? stack1.titulo : stack1), depth0))
    + "</h2>\n\n<div class=\"fecha-lugar\">\n  "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.exposicion : depth0)) != null ? stack1.fechas : stack1), depth0))
    + " <br>\n  "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.exposicion : depth0)) != null ? stack1.lugar : stack1), depth0))
    + "\n</div>\n\n<img src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.exposicion : depth0)) != null ? stack1.imagen : stack1), depth0))
    + "\" class=\"img-responsive\">\n\n<div class=\"datos-exposicion\">\n  <span class=\"label\">\n    "
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias3).call(depth0,(depth0 != null ? depth0.lang : depth0),"es",{"name":"equal","hash":{},"fn":this.program(31, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n    "
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias3).call(depth0,(depth0 != null ? depth0.lang : depth0),"en",{"name":"equal","hash":{},"fn":this.program(33, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n  </span>\n  "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.exposicion : depth0)) != null ? stack1.organizacion : stack1), depth0))
    + " <br>\n  \n"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.exposicion : depth0)) != null ? stack1.comisario : stack1),{"name":"if","hash":{},"fn":this.program(35, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  <a href=\"http://www.museoreinasofia.es"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.exposicion : depth0)) != null ? stack1.url : stack1), depth0))
    + "\" target=\"_blank\" class=\"btn btn-default btn-block\">\n"
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias3).call(depth0,((stack1 = (depth0 != null ? depth0.exposicion : depth0)) != null ? stack1.tipo : stack1),"actividad",{"name":"equal","hash":{},"fn":this.program(40, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias3).call(depth0,((stack1 = (depth0 != null ? depth0.exposicion : depth0)) != null ? stack1.tipo : stack1),"exposicion",{"name":"equal","hash":{},"fn":this.program(45, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias3).call(depth0,((stack1 = (depth0 != null ? depth0.exposicion : depth0)) != null ? stack1.tipo : stack1),"coleccion_viaja",{"name":"equal","hash":{},"fn":this.program(45, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </a>\n</div>\n\n"
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias3).call(depth0,(depth0 != null ? depth0.lang : depth0),"es",{"name":"equal","hash":{},"fn":this.program(50, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias3).call(depth0,(depth0 != null ? depth0.lang : depth0),"en",{"name":"equal","hash":{},"fn":this.program(52, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n<div class=\"itinerancias\">\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.exposicion : depth0)) != null ? stack1.itinerancia : stack1),{"name":"each","hash":{},"fn":this.program(54, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true,"useDepths":true});

this["ItineranciasTpls"]["app/templates/slider.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "Todas";
},"3":function(depth0,helpers,partials,data) {
    return "All";
},"5":function(depth0,helpers,partials,data) {
    return "Colección";
},"7":function(depth0,helpers,partials,data) {
    return "Collection";
},"9":function(depth0,helpers,partials,data) {
    return "Exposición";
},"11":function(depth0,helpers,partials,data) {
    return "Exhibition";
},"13":function(depth0,helpers,partials,data) {
    return "Producción propia";
},"15":function(depth0,helpers,partials,data) {
    return "Producción ajena";
},"17":function(depth0,helpers,partials,data) {
    return "Actividad";
},"19":function(depth0,helpers,partials,data) {
    return "Activity";
},"21":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials['slider-item'],depth0,{"name":"slider-item","data":data,"indent":"          ","helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"23":function(depth0,helpers,partials,data) {
    return "No hay resultados para ese filtrado. Modifique su selección.";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing;

  return "<div class=\"controls\">\n  <label>Filtrar:</label>\n  <button class=\"filter active\" data-filter=\"all\" id=\"Reset\">\n    "
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias1).call(depth0,(depth0 != null ? depth0.lang : depth0),"es",{"name":"equal","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n     "
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias1).call(depth0,(depth0 != null ? depth0.lang : depth0),"en",{"name":"equal","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n  </button>\n  <form id=\"Filters\">\n    <fieldset>\n      <button class=\"filter filter--coleccion_viaja\" data-filter=\".slider-item--coleccion_viaja\">\n        "
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias1).call(depth0,(depth0 != null ? depth0.lang : depth0),"es",{"name":"equal","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n        "
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias1).call(depth0,(depth0 != null ? depth0.lang : depth0),"en",{"name":"equal","hash":{},"fn":this.program(7, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n      </button>\n      <button class=\"filter filter--exposicion\" data-filter=\".slider-item--exposicion\">\n        "
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias1).call(depth0,(depth0 != null ? depth0.lang : depth0),"es",{"name":"equal","hash":{},"fn":this.program(9, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n        "
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias1).call(depth0,(depth0 != null ? depth0.lang : depth0),"en",{"name":"equal","hash":{},"fn":this.program(11, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  \n      </button>\n      <button class=\"filter filter--exposicion filter--exposicion-tipo\" data-filter=\".slider-item--propia\">\n        "
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias1).call(depth0,(depth0 != null ? depth0.lang : depth0),"es",{"name":"equal","hash":{},"fn":this.program(13, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n        "
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias1).call(depth0,(depth0 != null ? depth0.lang : depth0),"en",{"name":"equal","hash":{},"fn":this.program(13, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " \n      </button>\n      <button class=\"filter filter--exposicion filter--exposicion-tipo\" data-filter=\".slider-item--ajena\">\n        "
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias1).call(depth0,(depth0 != null ? depth0.lang : depth0),"es",{"name":"equal","hash":{},"fn":this.program(15, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n        "
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias1).call(depth0,(depth0 != null ? depth0.lang : depth0),"en",{"name":"equal","hash":{},"fn":this.program(15, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " \n      </button>\n      <button class=\"filter filter--actividad\" data-filter=\".slider-item--actividad\">\n        "
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias1).call(depth0,(depth0 != null ? depth0.lang : depth0),"es",{"name":"equal","hash":{},"fn":this.program(17, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n        "
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias1).call(depth0,(depth0 != null ? depth0.lang : depth0),"en",{"name":"equal","hash":{},"fn":this.program(19, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " \n      </button>\n    </fieldset>\n    <fieldset>\n      <button class=\"filter\" data-filter=\".y2015\">2015</button>\n      <button class=\"filter\" data-filter=\".y2014\">2014</button>\n      <button class=\"filter\" data-filter=\".y2013\">2013</button>\n      <button class=\"filter\" data-filter=\".y2012\">2012</button>\n      <button class=\"filter\" data-filter=\".y2011\">2011</button>\n      <button class=\"filter\" data-filter=\".y2010\">2010</button>\n      <button class=\"filter\" data-filter=\".y2009\">2009</button>\n      <button class=\"filter\" data-filter=\".y2008\">2008</button>\n      <button class=\"filter\" data-filter=\".y2007\">2007</button>\n      <button class=\"filter\" data-filter=\".y2006\">2006</button>\n      <button class=\"filter\" data-filter=\".y2005\">2005</button>\n      <button class=\"filter\" data-filter=\".y2004\">2004</button>\n      <button class=\"filter\" data-filter=\".y2003\">2003</button>\n      <button class=\"filter\" data-filter=\".y2002\">2002</button>\n      <button class=\"filter\" data-filter=\".y2001\">2001</button>\n      <button class=\"filter\" data-filter=\".y2000\">2000</button>\n      <button class=\"filter\" data-filter=\".y1999\">1999</button>\n      <button class=\"filter\" data-filter=\".y1998\">1998</button>\n      <button class=\"filter\" data-filter=\".y1997\">1997</button>\n      <button class=\"filter\" data-filter=\".y1996\">1996</button>\n      <button class=\"filter\" data-filter=\".y1995\">1995</button>\n      <button class=\"filter\" data-filter=\".y1994\">1994</button>\n      <button class=\"filter\" data-filter=\".y1993\">1993</button>\n      <button class=\"filter\" data-filter=\".y1992\">1992</button>\n      <button class=\"filter\" data-filter=\".y1991\">1991</button>\n    </fieldset>\n  </form>\n</div>\n<div id=\"slider-container\" class=\"slider-container thumbnails\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.exposiciones : depth0),{"name":"each","hash":{},"fn":this.program(21, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "      <div class=\"vacio\">\n        <p style=\"display:none\">\n          "
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias1).call(depth0,(depth0 != null ? depth0.lang : depth0),"es",{"name":"equal","hash":{},"fn":this.program(23, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n          "
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias1).call(depth0,(depth0 != null ? depth0.lang : depth0),"en",{"name":"equal","hash":{},"fn":this.program(23, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " \n        </p>\n      </div>\n</div>\n\n";
},"usePartial":true,"useData":true});