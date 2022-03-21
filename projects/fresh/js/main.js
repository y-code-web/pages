// $(document).ready(function() {
// 	svg4everybody();

// 	$('.phone').inputmask({"mask": "+7 (999) 999-99-99"});
	
// 	(function() {
// 		window.addEventListener('load', function() {
// 		var forms = document.getElementsByClassName('needs-validation');
// 		var validation = Array.prototype.filter.call(forms, function(form) {
// 			form.addEventListener('submit', function(event) {
// 				if (form.checkValidity() === false) {
// 					event.preventDefault();
// 					event.stopPropagation();
// 				} else {
// 					event.preventDefault();
// 					$.ajax({
// 						url: "action.php",
// 						type: "post",
// 						data: $(form).serialize(),
// 						success: function(e) {
// 							$(form).removeClass('was-validated');
// 							$(form).find('.form-control').val('');
// 							if ( $(form).closest('.modal').length ) {
// 								$(form).closest('.modal').modal('hide')
// 							}
// 							$('#thanksModal').modal('show')
// 						}
// 					})
// 				}
// 				form.classList.add('was-validated');
// 			}, false);
// 		});
// 	}, false);
// 	})();


// 	function checkLazyOneItem(e) {
// 		var currentIndex = e.item.index;
// 		var currentSlide = e.relatedTarget.$stage.children()[currentIndex];
// 		var lazyImg = currentSlide.querySelector('.lazy-img');
		
// 		if ( !$(lazyImg).hasClass('lazyload') ){
// 			$(lazyImg).addClass('lazyload');
// 		}
// 	};

// 	function checkLazyManyItems(e) {
// 		var slides = e.relatedTarget.$stage.children();
// 		[].forEach.call(slides, function(elem) {
// 			if ( elem.classList.contains('active') ) {
// 				var lazyImgs = elem.querySelectorAll('.lazy-img');
// 				[].forEach.call(lazyImgs, function(elems) {
// 					if ( !elems.classList.contains('lazyload') ) {
// 						elems.classList.add('lazyload')
// 					}
// 				})
// 			}
// 		})
// 	};

// 	function createYaMapScriptTag() {
// 		var script = document.createElement('script');
// 		script.src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=79a918b5-80ce-4251-8c86-5acfc234a698";
// 		script.type = "text/javascript";
// 		script.id = 'ya-maps';
// 		var customScripts = document.querySelector('script[src="js/main.js"]');
// 		document.body.insertBefore(script, customScripts);
// 	};

// 	function yaMapInit() {
// 		ymaps.ready(function () {
// 			var myMap = new ymaps.Map('map', {
// 				center: [55.748513, 37.627229],
// 				zoom: 13,
// 				controls: ['zoomControl', 'fullscreenControl']
// 			}, {
// 				searchControlProvider: 'yandex#search'
// 			}),

// 			myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
// 				hintContent: 'Место встречи',
// 				balloonContent: 'Москва, Раушская набережная, 4/5, этаж 3, оф. 346'
// 			}, {
// 				iconLayout: 'default#image',
// 				iconImageHref: 'images/loc.svg',
// 				iconImageSize: [30, 42],
// 				iconImageOffset: [-5, -38]
// 			});
// 			myMap.geoObjects
// 				.add(myPlacemark);
// 			if ( $(window).width() < 768 ) {
// 				myMap.behaviors.disable('drag');
// 			}
// 		});
// 	}

// 	function getPoisitionMap() {
// 		var flag = true;
// 		$(window).on('scroll', function() {
// 			if ( $('#map').length ) {
// 				var top_of_element = $("#map").offset().top;
// 				var bottom_of_element = $("#map").offset().top + $("#map").outerHeight();
// 				var bottom_of_screen = $(window).scrollTop() + $(window).outerHeight();
// 				var top_of_screen = $(window).scrollTop();

// 				if ( flag ) {
					
// 					if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
// 						createYaMapScriptTag();
// 						var map = document.getElementById('ya-maps');
						
// 						map.onload = function() {
// 							yaMapInit();
// 						};
// 						flag = false;
// 					}
// 				}
// 			}
// 		});
// 	}

// 	getPoisitionMap();

// 	$('[data-toggle]').click(function() {
// 		if ( $(this).data('toggle') == 'toggleVisible' ) {
// 			var target = $(this).data('target');
// 			$('[data-id="'+target+'"]').toggleClass('visible');
// 		}
// 		if ( $(this).data('toggle') == 'mobile-dropdown' ) {
// 			var target = $(this).data('target');
// 			$('[data-id="'+target+'"]').toggleClass('isOpen');
// 		}
// 		if ( $(this).data('toggle') == 'anchor' ) {
// 			var offsetHeight = $('.header').outerHeight();
// 			var target = $($(this).attr('href')).offset().top - (73 - 1);
// 			$('body,html').animate({
// 				scrollTop: target
// 			}, 500);
// 		}
// 		if ( $(this).data('toggle') == 'teamDescr' ) {
// 			$(this).toggleClass('active');
// 			$(this).siblings('.team-member-body').toggleClass('active')
// 		}
// 	})
	
// 	var contactFlag = false;
// 	var carouselsFlag = false;
// 	var carouselWorksFlag = false;
// 	function replaceElems() {
// 		if ( $(window).width() < 1183 ) {
// 			if ( !contactFlag ) {
// 				contactFlag = true;
// 			}
// 		} else {
// 			if ( contactFlag ) {
// 				contactFlag = false
// 			}
// 		}
// 	}
// 	function destroyAndReinitSliders() {
// 		var options = {
// 			items: 1,
// 			nav: true,
// 			margin: 10,
// 			dots: false,
// 			loop: false,
// 			navText: ['<svg class="svg-icon">'+
// 						'<use xlink:href="images/svg-sprite/svgSprite.svg#chevron2"></use>'+
// 					  '</svg>',
// 					  '<svg class="svg-icon">'+
// 						'<use xlink:href="images/svg-sprite/svgSprite.svg#chevron2"></use>'+
// 					  '</svg>'],
// 			onInitialized: function(event) {
// 				checkLazyOneItem(event);
// 			},
// 			onTranslated: function(event) {
// 				checkLazyOneItem(event);
// 			}
// 		};
// 		if ( $(window).width() < 975 ) {
// 			carouselWorksFlag = false
// 			if ( !carouselWorksFlag ) {
// 				$('.works-carousel').owlCarousel(options);
// 				$('.team-slider').owlCarousel(options);
// 				carouselWorksFlag = true;
// 			}
// 		} else {
// 			carouselWorksFlag = true
// 			$('.works-carousel .lazy-img, .team-slider .lazy-img').addClass('lazyload')
// 			if ( carouselWorksFlag ) {
// 				$('.works-carousel').owlCarousel('destroy');
// 				$('.team-slider').owlCarousel('destroy');
// 				carouselWorksFlag = false;
// 			}
// 		}
// 	}
// 	destroyAndReinitSliders();
// 	replaceElems();
// 	$(window).resize(function() {
// 		replaceElems();
// 		destroyAndReinitSliders();
// 	})
// 	$(window).scroll(function() {
// 		var pageTop = $(this).scrollTop();
// 		if ( pageTop > 10 ) {
// 			$('.header').addClass('sticky')
// 		} else {
// 			$('.header').removeClass('sticky')
// 		}
// 	})


// 	var offsetHeight = $('.header').outerHeight();
// 	$('body').scrollspy({
// 		offset: offsetHeight
// 	});

// 	$('.menu-nav li a').click(function (event) {
// 		var scrollPos = $($(this).attr('href')).offset().top - ($('.header').outerHeight() - 1);
// 		$('body,html').animate({
// 			scrollTop: scrollPos
// 		}, 500);
// 		if ( $(window).width() < 1520 ) {
// 			$('.menu-close').click()
// 		}
// 		return false;
// 	});

// 	function setHeaderWidth() {
// 		var parentwidth = $(".wrapper").width();
// 		$(".header").width(parentwidth);
// 	}
// 	setHeaderWidth();
// 	$(window).resize(function() {
// 		setHeaderWidth();
// 	})


// 	// $('[data-click="animated"]').click(function() {
// 	// 	var $this = $(this);
// 	// 	var duration = $(this).data('duration');
// 	// 	$(this).append('<span class="button-click"></span>')
// 	// 	setTimeout(function() {
// 	// 		$this.children('.button-click').remove();
// 	// 	}, duration)
// 	// })


// 	if ( $(window).width() > 992 ) {
// 		new WOW().init({
// 			mobile: false,
// 			resetAnimation: false,
// 		});
// 	}

// 	$('.reviews-carousel').owlCarousel({
// 		items: 1,
// 		nav: true,
// 		margin: 10,
// 		dots: false,
// 		loop: false,
// 		mouseDrag: false,
// 		touchDrag: false,
// 		pullDrag: false,
// 		freeDrag: false,
// 		animateIn: 'fadeIn',
// 		navText: ['<svg class="svg-icon">'+
// 					'<use xlink:href="images/svg-sprite/svgSprite.svg#chevron2"></use>'+
// 				  '</svg>',
// 				  '<svg class="svg-icon">'+
// 					'<use xlink:href="images/svg-sprite/svgSprite.svg#chevron2"></use>'+
// 				  '</svg>'],
// 		responsive: {
// 			0: {
// 				nav: false,
// 				dots: true
// 			},
// 			992: {
// 				nav: true,
// 				dots: false
// 			},
// 		},
// 		onInitialized: function(event) {
// 			checkLazyOneItem(event)
// 		},
// 		onTranslated: function(event) {
// 			checkLazyOneItem(event);
// 			$(players).each(function (i, elem) {
// 				elem.stopVideo();
// 				$(event.target).find('.modal-video-poster').show();
// 				$(event.target).find('.modal-play-button').show();
// 			});
// 		},
// 	})




// 	$(".video-trigger").click(function (e) {
// 		// var player = document.getElementById('video-iframe')
// 		// if (player.destroy) {
// 		//   player.destroy();
// 		// }
// 		var theModal = $(this).data("target"),
// 			videoSRC = $(this).attr("data-video"),
// 			// videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=1&showinfo=0&html5=1&mute=1",
// 			videoSRCauto = videoSRC + "?enablejsapi=1&modestbranding=1&rel=0&controls=1&showinfo=0&html5=1",
// 			videoTitle = $(this).find('[data-video-title]').text(),
// 			videoText = $(this).find('[data-video-text]').text(),
// 			videoPosterSrc = $(this).find('[data-video-poster]').data('video-poster');
// 		$(theModal + ' [data-modal-title]').text(videoTitle);
// 		$(theModal + ' [data-modal-text]').text(videoText);
// 		$(theModal + ' [data-modal-poster]').attr('style', 'background-image: url('+videoPosterSrc+')');
// 		$(theModal + ' iframe').attr('src', videoSRCauto);

// 		$(theModal + ' button.modal-close').click(function () {
// 			$(theModal + ' iframe').attr('src', videoSRCauto);
// 			$(theModal).find('[data-video-title]').text('')
// 			$(theModal).find('[data-video-txt]').text('');
// 			$(theModal + ' .modal-play-button').show()
// 			$(theModal + ' .modal-video-poster').show()
// 		});
// 		if ( $(e.target).closest('.button-angles').length ) {
// 			$($(e.target).data('target')).modal('show')
// 			if ( $(e.target).closest('.button-angles-in').length ) {
// 				$($(e.target).parent().data('target')).modal('show');
// 			}
// 			e.stopPropagation();
// 		}

// 	});
// 	$(".works-trigger").click(function () {
// 		var theModal = $(this).attr("href"),
// 			videoSRC = $(this).attr("data-video"),
// 			videoSRCauto = videoSRC + "?enablejsapi=1&modestbranding=1&rel=0&controls=1&showinfo=0&html5=1",
// 			videoPosterSrc = $(this).find('[data-video-poster]').data('video-poster');
// 			videoTitle = $(this).find('[data-video-title]').text();
		
// 		$(theModal + ' [data-modal-poster]').attr('style', 'background-image: url('+videoPosterSrc+')');
// 		$(theModal + ' [data-modal-title]').text(videoTitle).addClass('modal-product-title_works');
// 		$(theModal + ' [data-modal-text]').remove();
// 		$(theModal + ' iframe').attr('src', videoSRCauto);

// 		$(theModal + ' button.modal-close').click(function () {
// 			$(theModal + ' iframe').attr('src', videoSRCauto);
// 			$(theModal + ' .modal-play-button').show()
// 			$(theModal + ' .modal-video-poster').show()
// 			$(theModal + ' [data-modal-title]').text('').removeClass('works-title');
// 		});
// 	});
	
// 	// $('.modal-play-button').on('click', function(e) {
// 	// 	e.preventDefault();
// 	// 	$(this).siblings('iframe')[0].src += "&autoplay=1";
// 	// 	$(this).siblings('iframe').show();
// 	// 	$(this).siblings('.modal-video-poster').hide();
// 	// 	$(this).hide();
// 	// })

// 	$('.modal-close').click(function() {
// 		if ( $(this).closest('.modal-request').length ) {
// 			$(this).closest('.modal-request').find('form').removeClass('was-validated')
// 		}
// 	})

// 	$('.requestFormVideo').click(function() {
// 		$(this).closest('.modal').modal('hide');
// 		var target = $(this).attr('href')
// 		$(this).closest('.modal').find('iframe').attr('src', ' ');
// 		$(this).closest('.modal').find('[data-video-title]').text('')
// 		$(this).closest('.modal').find('[data-video-txt]').text('');
// 		$(this).closest('.modal').find('.modal-play-button').show()
// 		$(this).closest('.modal').find('.modal-video-poster').show()
// 		setTimeout(function() {
// 			$(target).modal('show')
// 		}, 500)
// 	})


// 	function checkTabLink(target) {
// 		if ( $(window).width() < 992 ) {
// 			if ( $(target).closest('.works').length ) {
// 				if ( $(target).hasClass('active') ) {
// 					$(target).closest('.mobile-dropdown-drop').siblings('.mobile-dropdown-toggle').children('span').text($(target).text())
// 					if ( $(target).parent().is(':first-child') ) {
// 						$(target).closest('.mobile-dropdown').addClass('firstItemSelected')
// 					} else {
// 						$(target).closest('.mobile-dropdown').removeClass('firstItemSelected')
// 					}
// 				}
// 			}
// 		}
// 	}
// 	$('[data-toggle="popover"]').popover();
// 	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
// 		checkTabLink($(e.target));
// 		$(e.target).closest('.mobile-dropdown').removeClass('isOpen')
// 	})
// 	$('a[data-toggle="tab"]').each(function(index, elem) {
// 		checkTabLink($(elem));
// 	})

// })



$(document).ready(function() {
	svg4everybody();
	$('[data-toggle]').click(function() {
		if ( $(this).data('toggle') == 'toggleVisible' ) {
			var target = $(this).data('target');
			$('[data-id="'+target+'"]').toggleClass('visible');
			$('body').toggleClass('overflow-hidden');
		}
		if ( $(this).data('toggle') == 'anchor' ) {
			if ( $(window).width() > 991 ) {
				var target = $($(this).attr('href')).offset().top - 57
			} else {
				console.log('lalalal');
				var target = $($(this).attr('href')).offset().top
			}
			$('body,html').animate({
				scrollTop: target
			}, 500);
		}
	});
	$('.menu-nav').click(function() {
		$('.menu').removeClass('visible')
		$('body').removeClass('overflow-hidden');
	})
	$('.phone').inputmask({"mask": "+7 (999) 999-99-99"});
	(function() {
		window.addEventListener('load', function() {
		var forms = document.getElementsByClassName('needs-validation');
		var validation = Array.prototype.filter.call(forms, function(form) {
			form.addEventListener('submit', function(event) {
				if (form.checkValidity() === false) {
					event.preventDefault();
					event.stopPropagation();
				} else {
					event.preventDefault();
					$.ajax({
						url: "action.php",
						type: "post",
						data: $(form).serialize(),
						success: function(e) {
							console.log('letter sended');
							$(form).removeClass('was-validated');
							$(form).find('.form-control').val('');
							if ( $(form).closest('.modal').length ) {
								$(form).closest('.modal').modal('hide')
							}
							$('#thanksModal').modal('show')
						}
					})
				}
				form.classList.add('was-validated');
			}, false);
		});
	}, false);
	})();
	$('.owner-play-button').click(function() {
		var target = $(this).attr('data-target');
		var src = $(this).attr('data-src')
		$(target).find('.owner-video').append('<iframe src="'+src+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
	})
	$('#owner-modal').on('hidden.bs.modal', function (e) {
		$(this).find('iframe').remove()
	})
})