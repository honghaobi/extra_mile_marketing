// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 54)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '#mainNav',
        offset: 54
    });

    // Closes the Responsive Menu on Menu Item Click
    $('#navbarResponsive>ul>li>a').click(function() {
        $('#navbarResponsive').collapse('hide');
    });

    // jQuery to collapse the navbar on scroll
    $(window).scroll(function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    });


    $('.flip').click(function(){
        $(this).find('.card').addClass('flipped').mouseleave(function(){
            $(this).removeClass('flipped');
        });
        return false;
    });

    $('#myModal').on('shown.bs.modal', function () {
      $('#myInput').focus()
    });

    $('.p-img').on('click', function(event) {
      $('.panel-container').show();
      $('.panel-img').addClass('animated fadeIn').removeClass('fadeOut');
      $('.panel-container').append("<p>" + this.dataset.description + "</p>");
    });

    $('.panel-container').on('click', function(event) {
      $('.panel-container').hide();
      $('.panel-img').removeClass('fadeIn').addClass('fadeOut');
    });

    $('.alphabet').on('click', function(){
      $('.r1, .c1').removeClass('r1').addClass('r3');
    });

    if ($("#timeline").get(0)) {
      $().timelinr();
    }

    /**
     * Create the map
     */
    var map = AmCharts.makeChart("chartdiv", {
      "type": "map",
      "theme": "light",
      "projection": "eckert3",
      "dataProvider": {
        "map": "worldLow",
        "getAreasFromMap": true
      },
      "areasSettings": {
        "selectedColor": "#672578"
      },
      /**
       * Add init event to perform country selection
       */
      "listeners": [{
        "event": "init",
        "method": function(e) {
          preSelectCountries( ["AO","AR","AU","BR","CA","CN","CZ","DZ","ES","FR","HN","IN","KZ","NG","NI","RU","SD","TZ","US"]);
        }
      }]
    });

    /**
     * Function which extracts currently selected country list.
     * Returns array consisting of country ISO2 codes
     */

    var colors = ['#118172','#672578','#FDB82C','#710000','#001E46','#81B822','#1174C3'];
    function preSelectCountries(list) {
      for(var i = 0; i < list.length; i++) {
        var area = map.getObjectById(list[i]);
        area.showAsSelected = true;
        console.log(area);
        area.selectedColorReal = colors[i%colors.length + 1];
        map.returnInitialColor(area);
      }
    }



})(jQuery); // End of use strict
