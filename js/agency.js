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

    // $('.trophy-icon').parent().on('mouseenter', function(){
    //   $(this).children().removeAttr('id');
    //   $(this).attr('id', 'hl-y');
    // }).on('mouseleave',function(){
    //   $(this).attr('id', 'hl-b');
    // });

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

    $().timelinr();

})(jQuery); // End of use strict
