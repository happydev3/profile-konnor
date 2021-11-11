// repeated variables
var $window = $(window);
var $root = $('html, body');

$(document).ready(function () {

    'use strict';

    colorScheme();
    menuToggler();
    sliderOwlCarousel();
    typedJS();
    skills();
    countup();
    portfolioPopup();
    mapInit();

    $('.owl-item.active .hero-slide').addClass('zoom');

});

$window.on('load', (function() {
    $('#overlayer').delay(500).fadeOut('slow');
    $('.loader').delay(1000).fadeOut('slow');
    pagePilling();
    portfolioIsotop();
}));

/*-----------------------------------------------------------------------------
                                   FUNCTIONS
-----------------------------------------------------------------------------*/

/*-------------------------
       Page Pilling
-------------------------*/
function pagePilling() {
    'use strict';

    $('#pagepiling').pagepiling({
        sectionsColor: ['#fff', '#fff', '#fff', '#fff', '#fff','#fff', '#fff' ,'#fff' ,'#fff'],
        anchors: ['home', 'about', 'resume', 'services', 'portfolio', 'contact'],
        menu: '#myMenu',
        direction: 'vertical',
        verticalCentered: true,
        navigation: {
            'position': 'right',
            'tooltips': ['HOME', 'ABOUT ME', 'RESUME', 'SERVICES', 'PORTFOLIO', 'CONTACT']
        },
        loopBottom: true,
        loopTop: true,
        scrollingSpeed: 700,
        easing: 'swing',
        css3: true,
        normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: true,

        //events
        afterRender: function() {},
        afterLoad: function(anchorLink, index) {}
    });
}


/*-------------------------
        Color Scheme
-------------------------*/
function colorScheme() {

    'use strict';

    var $darkLogo = $('.dark-logo');
    $('.color-scheme').click(function() {
        $('body').toggleClass('nill-dark');
        $('.section').toggleClass('bg-dark');
        $('.color-scheme').removeClass('d-none').addClass('d-inline-block');
        $(this).removeClass('d-inline-block').addClass('d-none');
    });
}
/*-------------------------
    MENU TOGGLER
-------------------------*/
function menuToggler() {

    'use strict';

    $('.overlay-menu-toggler').click(function() {
        $('.overlay-menu').addClass('show');
    });
    $('.overlay-menu').click(function() {
        $(this).removeClass('show');
    });

}

/*-----------------------------
      SLIDER OWL CAROUSEL
------------------------------*/
function sliderOwlCarousel() {
    'use strict';

    $('.hero .owl-carousel').owlCarousel({
        loop:true,
        items: 1,
        nav: false,
        dots: false,
        autoplay:true,
        touchDrag: true,
        smartSpeed: 5000,
        animateOut: 'fadeOut',
        autoplayHoverPause: true,
    });
    $('#hero-slider').on('translate.owl.carousel', function() {
        setTimeout(function() {
            $('.hero-slide').removeClass('zoom');
        }, 1000)
	});
	$('#hero-slider').on('translated.owl.carousel', function() {
		$('.owl-item.active .hero-slide').addClass('zoom');
    });
}

/*-------------------------
        TYPED JS
-------------------------*/
function typedJS() {

    'use strict';

    var $element = $('.element');
    if ($element.length) {
        var options = {
            strings: $element.attr('data-elements').split(','),
            typeSpeed: 100,
            backDelay: 3000,
            backSpeed: 50,
            loop: true
        };
        var typed = new Typed('.element', options);
    }
}

/*-------------------------
            Skills
-------------------------*/
function skills() {

    'use strict';

    $('.skillbar').each(function () {
        $(this).find('.skillbar-bar').animate({
            width: $(this).attr('data-percent')
        }, 6000);
    });
}

/*-------------------------
            Count up
  -------------------------*/
function countup() {

    'use strict';

    $('.timer').countTo();
    $('.count-number').removeClass('timer');
}

/*-------------------------
     MAGNIFIC POPUP JS
-------------------------*/
function portfolioPopup() {

    'use strict';

    if (('.portfolio-items').length > 0) {
        $('.portfolio-items').each(function() {
            $(this).magnificPopup({
                delegate: '.js-zoom-gallery',
                type: 'image',
                gallery: {
                    enabled:true
                }
            });
        });
    }
}

/*-------------------------
        ISOTOPE JS
-------------------------*/
function portfolioIsotop() {

    'use strict';

    var $container = $('.portfolio-items');
    var $filter = $('#portfolio-filter');
    $container.isotope({
        filter: '*',
        layoutMode: 'masonry',
        animationOptions: {
            duration: 750,
            easing: 'linear'
        }
    });
    $filter.find('a').on('click', function() {
        var selector = $(this).attr('data-filter');
        $filter.find('a').removeClass('active');
        $(this).addClass('active');
        $container.isotope({
            filter: selector,
            animationOptions: {
                animationDuration: 750,
                easing: 'linear',
                queue: false,
            }
        });
        return false;
    });
}

/*-------------------------
          GOOGLE Map
  -------------------------*/
function mapInit() {

    'use strict';

    if ($('#map').length) {
        var options = {
            center: new google.maps.LatLng(29.947380,-93.903950),
            zoom: 8,
            mapTypeControl: true,
            gestureHandling: 'cooperative',
            panControl: false,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.DEFAULT,
                position: google.maps.ControlPosition.TOP_LEFT
            },
            scaleControl: false,
        };
        var map = new google.maps.Map(document.getElementById('map'), options);
        var marker1 = new google.maps.Marker({
            position: map.getCenter(),
            title: 'Address',
            // icon: 'assets/img/location-map.png',
            animation: google.maps.Animation.BOUNCE
        });
        marker1.setMap(map);
    }
}
