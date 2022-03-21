$(document).ready(function() {
	(function() {
		var wow = new WOW({
			live: true,
			mobile: false,
			boxClass: 'wow',
			animateClass: 'animated',
			offset: 0
		});
		wow.init();
		$('.video-wrap iframe').on('click', function() {
			$('.video-wrap').toggleClass('active');
		})

		if ( window.pageYOffset > 0 ) {
				$('.header').addClass('header_stick');
		} else {
			$('.header').removeClass('header_stick');
		}
		$(window).scroll(function() {
			var winT = $(this).scrollTop();
			if ( winT > 0 ) {
				$('.header').addClass('header_stick');
			} else {
				$('.header').removeClass('header_stick');
			}
		})
		$('body').scrollspy({target: ".scroll-spy"});


		$(".menu__list a").on('click', function(event) {
			var headerHeight = $('.header').outerHeight();
			if (this.hash !== "") {
				event.preventDefault();
				var hash = this.hash;
				$('html, body').animate({
					scrollTop: $(hash).offset().top - parseInt(headerHeight) - 10
				}, 800, function(){
					// window.location.hash = hash;
				});
			}
		});
		$('.menu-bar').click(function() {
			$('.menu').toggleClass('visible')
		})
		$('.menu-close').click(function() {
			$('.menu').removeClass('visible')
		})
		$('[data-target="#thanks"]').click(function() {
			$('#exampleModal, #exampleModal1').modal('hide');
		})
	}());
})
//# sourceMappingURL=maps/main.js.map
