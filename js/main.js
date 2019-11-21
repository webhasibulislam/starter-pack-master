(function ($) {
	"use strict";

	// preloader
	$(window).load(function() {
		//$("#loading").delay(2000).fadeOut(500);
		$("#loading").fadeOut(500);
	})

	// meanmenu
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "1199"
	});

	//data-background

	$("[data-background]").each(function () {
		$(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
	});

	// One Page Nav
	var top_offset = $('.header-section').height() - 10;
	$('.main-menu nav ul').onePageNav({
		currentClass: 'active',
		scrollOffset: top_offset,
	});

	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 245) {
			$(".header-sticky").removeClass("sticky");
		} else {
			$(".header-sticky").addClass("sticky");
		}
	});

	/* magnificPopup img view */
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	/* magnificPopup video view */
	$('.popup-video').magnificPopup({
		type: 'iframe'
	});


	// isotop

	var $grid = $('.portfolio-active').isotope({
		itemSelector: '.grid-item',
		percentPosition: true,
		masonry: {
			// use outer width of grid-sizer for columnWidth
			columnWidth: 1
		}
	})
	

	// filter items on button click
	$('.portfolio-menu').on('click', 'button', function () {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	});

	//for menu active class
	$('.portfolio-menu button').on('click', function (event) {
		$(this).siblings('.active').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
	});

	// scrollToTop
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		topDistance: '300', // Distance from top before showing element (px)
		topSpeed: 300, // Speed back to top (ms)
		animation: 'fade', // Fade, slide, none
		animationInSpeed: 200, // Animation in speed (ms)
		animationOutSpeed: 200, // Animation out speed (ms)
		scrollText: '<i class="fa fa-arrow-up"></i>', // Text for element
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	});

	//counter
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});

	$('.brand-active').owlCarousel({
		loop: true,
		margin: 30,
		nav: false,
		autoplay: true,
		responsive: {
			0: {
				items: 1
			},
			550: {
				items: 2
			},
			767: {
				items: 3
			},
			1000: {
				items: 4
			}
		}
	})

	$('.testimonial-active').owlCarousel({
		loop: true,
		margin: 30,
		navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
		nav: true,
		autoplay: true,
		responsive: {
			0: {
				items: 1
			},
			550: {
				items: 1
			},
			768: {
				items: 2
			},
			1000: {
				items: 3
			}
		}
	})

	// WOW active
	new WOW().init();

	// side-menu

	$(".hamburger").click(function(){
		$(".side-menu").addClass("side-menu-active");
	});

	$(".close").click(function(){
		$(".side-menu").removeClass("side-menu-active");
	});


})(jQuery);