Slider = ({
  sliderTpl: ItineranciasTpls['app/templates/slider.hbs'],
  container: {},
  slides: {},
  layers: {},
  map: {},
  fixed: false,
  inj_target: $('footer'),

  initialize: function (layers, map) {
    this.inj_target.append(this.sliderTpl(exposiciones));
    this.container = $('#slider-container');
    this.container.mixItUp({
        animation: {
          duration: 400,
          effects: 'fade translateZ(-360px)',
          easing: 'ease'
        }
      }
    );
    this.slides = $('.slider-item');
    this.map = map;
    this.layers = layers;
    this.bindActions();
  },

  bindActions: function () { //@todo está básico, hay que mejorar bastante esto
    var _self = this;
    this.slides.hover(function () {  //HOVER
      if (!_self.fixed) {
        layer_id = $(this).data('layer');
        _self.layers.getLayer(layer_id).renderItinerancias(true);
      }
    }, function () {
      if (!_self.fixed)
        _self.map.clearAll(true);
    }).bind('click', function (e) { //CLICK
      e.preventDefault();
      if (_self.fixed && $(this).is('.active')) {
        _self.clearFixed();
      }
      else if(_self.fixed &&!$(this).is('.active') )
      {
        _self.clearFixed();
        _self.fixed = true;
        $(this).addClass('active')
        layer_id = $(this).data('layer');
        _self.layers.getLayer(layer_id).renderItinerancias();
      }else if(!_self.fixed && !$(this).is('.active') ){
        _self.fixed = true;
        $(this).addClass('active')
        layer_id = $(this).data('layer');
        _self.layers.getLayer(layer_id).renderItinerancias();
      }
    });
  },

  clearFixed: function () {
    this.fixed = false;
    this.container.find('.active').removeClass('active');
    this.map.clearAll(true);
  }
});
