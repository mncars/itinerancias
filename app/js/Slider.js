Slider = ({
  sliderTpl: ItineranciasTpls['app/templates/slider.hbs'],
  container: {},
  slides: {},
  map: {},
  fixed: false,
  inj_target: $('footer'),

  initialize: function (map) {
    this.inj_target.append(this.sliderTpl(exposiciones));

    this.container = $('#slider-container');

    //basado en esto: http://codepen.io/patrickkunka/pen/ltgde

    this.container.mixItUp({
        animation: {
          //enable: false,
          duration: 400,
          effects: 'fade',
          easing: 'ease'
        },
        controls: {
          //toggleFilterButtons: true,
          enable: false // desactivamos el filtrado automatico
          //toggleLogic: 'and'
        },
        callbacks: {
          onMixStart: function(state, futureState){
            map.clearAll();
            $(".vacio p").hide();
            //con esto ocultamos los markers que no son del año.
            if (futureState.activeFilter == '.mix') {
              $(".itinerancia-marker").show();
              return;
            }
            $(".itinerancia-marker").hide();

            var filtro = "." + futureState.activeFilter.split(".").join("") + "-marker"; //borro los puntos intermedios

            $(filtro).show();
            //console.log(filtro);
            //var filtrosActivos = futureState.activeFilter.split(",");
            //console.log(filtrosActivos);
            //$.each(filtrosActivos, function( index, filtro ) {
            //  $(filtro + "-marker").show();
            //});
          }, 
          onMixFail: function(){
            $(".vacio p").show(); //alert('No items were found matching the selected filters.');
          }   
        }
      }
    );
    this.slides = $('.slider-item');
    this.map = map;
    this.bindActions();
  },

  bindActions: function () { //@todo está básico, hay que mejorar bastante esto
    var _self = this;
    this.slides.hover(function () {  //HOVER
      if (!_self.fixed) {
        layer_id = $(this).data('layer');
        _self.map.renderExposicion(layer_id, true);
      }
    }, function () {
      if (!_self.fixed)
        _self.map.clearAll(true);
    }).bind('click', function (e) { //CLICK
      e.preventDefault();
      if (_self.fixed && $(this).is('.active')) {
        _self.clearFixed();
      } else if(_self.fixed &&!$(this).is('.active')) {
        _self.clearFixed();
        _self.fixed = true;
        $(this).addClass('active');
        layer_id = $(this).data('layer');
        _self.mostrarExposicion(layer_id);
        _self.map.renderExposicion(layer_id, false);
      } else if(!_self.fixed && !$(this).is('.active') ) {
        _self.fixed = true;
        $(this).addClass('active');
        layer_id = $(this).data('layer');
        _self.mostrarExposicion(layer_id);
        _self.map.renderExposicion(layer_id, false);
      }
    });
  },
 
  clearFixed: function () {
    this.fixed = false;
    this.container.find('.active').removeClass('active');
    this.map.clearAll(true);
  },

  mostrarExposicion: function(layer_id) {
    markers = this.map.getExposicionMarkers(layer_id);
    var markerAux = markers[0];
    $.event.trigger({
      type: "verItinerancia",
      exposicion_marker: markerAux
    });
  }, 


  /**
   * Listen in to custom Snap events
   * @param  {String}   evt The snap event name
   * @param  {Function} fn  Callback function
   * @return {Object}       Snap instance
   */
  on: function(evt, fn) {
      this.eventList[evt] = fn;
      return this;
  },

  /**
   * Stops listening to custom Snap events
   * @param  {String} evt The snap event name
   */
  off: function(evt) {
      if (this.eventList[evt]) {
          this.eventList[evt] = false;
      }
  },
});
