(function(){
	var doc = $(document),
		win = $(window);
	// function for create yaMap tag script

		function createYaMapScriptTag() {
			var script = document.createElement('script');
			script.src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=774f5f14-9f3b-433c-9ab6-b18c13c24a9d";
			script.type = "text/javascript";
			script.id = 'ya-maps';
			var customScripts = document.querySelector('script[src="js/main.js"]');
			document.body.insertBefore(script, customScripts);
			console.log(script)
		};

	// =============================

	// yandex map init

		function yaMapInit() {
			ymaps.ready(function () {
				var myMap = new ymaps.Map('map', {
					center: [55.753215, 37.622504],
					zoom: 13,
					controls: ['zoomControl', 'fullscreenControl']
				}, {
					searchControlProvider: 'yandex#search'
				}),

				myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
					hintContent: 'Наш офис',
					balloonContent: 'Адрес: г. Город, ул. Улица, '
				}, {
					iconLayout: 'default#image',
					iconImageHref: 'images/loc.svg',
					iconImageSize: [30, 42],
					iconImageOffset: [-5, -38]
				});
				myMap.geoObjects
					.add(myPlacemark);
			});
		}

		function getPoisitionMap() {
			var flag = true;
			$(window).on('scroll', function() {
				if ( $('#map').length ) {
					var top_of_element = $("#map").offset().top;
					var bottom_of_element = $("#map").offset().top + $("#map").outerHeight();
					var bottom_of_screen = $(window).scrollTop() + $(window).outerHeight();
					var top_of_screen = $(window).scrollTop();

					if ( flag ) {
						if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
							createYaMapScriptTag();
							var map = document.getElementById('ya-maps');
							map.onload = function() {
								yaMapInit();
							};
							flag = false;
						}
					}
				}
			});
		}

	// ==============


	// check lazy-imgs in owl where one slide

		function checkLazyOneItem(e) {
			var currentIndex = e.item.index;
			var currentSlide = e.relatedTarget.$stage.children()[currentIndex];
			var lazyImg = currentSlide.querySelector('.lazy-img');
			if ( !lazyImg.classList.contains('lazyload') ){
				lazyImg.classList.add('lazyload');
			}
		};

	// ==================

	// check lazy-img in owl where many slides
		function checkLazyManyItems(e) {
			var slides = e.relatedTarget.$stage.children();
			[].forEach.call(slides, function(elem) {
				if ( elem.classList.contains('active') ) {
					var lazyImgs = elem.querySelectorAll('.lazy-img');
					[].forEach.call(lazyImgs, function(elems) {
						if ( !elems.classList.contains('lazyload') ) {
							elems.classList.add('lazyload')
						}
					})
				}
			})
		}

	// =======================

	doc.ready(function() {
		svg4everybody({
			polyfill: true
		});
		$('[data-toggle]').click(function(e) {
			e.preventDefault();
			if ( $(this).data('toggle') == 'toggleClass' ) {
				$('#'+ $(this).data('target')).toggleClass('visible')
			};
			if ( $(this).data('toggle') == 'anchor' ) {
				$("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
			};
			if ( $(this).data('toggle') == 'tab' ) {
				$(this).parent().siblings().find('a').removeClass('active');
				var href = $(this).attr('href');
				$(this).addClass('active')
				if ( !$(href).find('.lazy-img').hasClass('lazyload') ) {
					$(href).find('.lazy-img').addClass('lazyload')
				};
				setTimeout(function() {
				}, 1000);
				$(href).siblings().addClass('out').removeClass('active');
				setTimeout(function() {
					$(href).siblings().hide();
				}, 1000)
				$(href).removeClass('out').addClass('active');
				setTimeout(function() {
					$(href).show();
				}, 1000)
			}
			if ( $(this).data('toggle') == 'owl-trigger' ) {
				var target = $(this).data('target');
				if ( $(this).data('direction') == 'prev' ) {
					$('#' + target).trigger('prev.owl.carousel', [300]);
				}
				if ( $(this).data('direction') == 'next' ) {
					$('#' + target).trigger('next.owl.carousel', [300]);
				}
			}
		});
		$('.anchors a').click(function() {
			if ( $(this).attr('href') != '' || $(this).attr('href') != '#' ) {
				if ( $( $(this).attr('href').length ) ) {
					$("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
					if ( $(this).closest('.menu').length ) {
						$(this).closest('.menu').removeClass('visible');
					}
				}
			}
		});
		$('.calc-wash__input').on('change', function() {
			if ( $(this).prop('checked') ) {
				$(this).closest('.calc__wash-column').siblings().find('.calc-wash__dropdown').slideUp(500);
				$(this).siblings().find('.calc-wash__dropdown').slideDown(500);
			}
		})
		$('.init-modal').magnificPopup({
		  type: 'inline',
		  midClick: true,
		  mainClass: 'mfp-fade'
		});
		if ( !$('.tabs-pane.active').find('.lazy-img').hasClass('lazyload') ) {
			$('.tabs-pane').find('.lazy-img').addClass('lazyload')
		};
		$('.our-works-slider').owlCarousel({
			items: 2,
			margin:30,
			nav: true,
			dots: false,
			loop: true,
			navText: [
						'<span class="our-works__img lazy-box lazy-loading">'+
							'<img'+
								' class="lazy-img lazy-box-img lazyload"'+
								' data-sizes="auto"'+
								' data-src="images/large-angle.png"'+
								' src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="'+
								' alt="">'+
						'</span>',
						'<span class="our-works__img lazy-box lazy-loading">'+
							'<img'+
								' class="lazy-img lazy-box-img lazyload"'+
								' data-sizes="auto"'+
								' data-src="images/large-angle.png"'+
								' src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="'+
								' alt="">'+
						'</span>'
						],
			autoHeight: false,
			responsive: {
				0: {
					items: 1,
					margin: 0,
					autoHeight: true
				},
				768: {
					items: 2,
					margin: 30,
					autoHeight: false
				}
			},
			onInitialized: checkLazyManyItems,
			onTranslated:checkLazyManyItems,
		});
		$('.reviews-slider').owlCarousel({
			items: 1,
			margin:30,
			nav: true,
			dots: false,
			loop: true,
			animateIn: 'zoomIn',
			animateOut: 'zoomOut',
			navText: [
				'<svg class="reviews__button-icon svg-icon">'+
					'<use xlink:href="images/svg-sprite/svgSprite.svg#arrow"></use>'+
				'</svg>',
				'<svg class="reviews__button-icon svg-icon">'+
					'<use xlink:href="images/svg-sprite/svgSprite.svg#arrow"></use>'+
				'</svg>'
			],
			onInitialized: function(event) {
				counter(event);
				checkLazyOneItem(event);
			},
			onTranslated: function(event) {
				counter(event);
				checkLazyOneItem(event);
			}

		});
		function counter(event) {
			var element = event.target;
			var items = event.item.count;
			var item = event.item.index + 1;

			if(item > items) {
				item = item - items;
			}
			item = item + '';
			items = items + '';
			if ( item.length < 2 ) {
				item = '0' + item;
			}
			if ( items.length < 2 ) {
				items = '0' + items;
			}
			$('.reviews__slider-current').html(item);
			$('.reviews__slider-total').html(items);
		};
		getPoisitionMap();
		$('.check-input').each(function() {
			var submit = $(this).closest('form').find('input[type="submit"]') || $(this).closest('form').find('button[type="submit"]');
			$(this).on('change', function() {
				if ( !$(this).is(':checked') ) {
					console.log(submit)
					submit.attr('disabled', true)
				} else {
					submit.removeAttr('disabled')
				}
			})
		});
		$(".ajax-form").submit(function(e) {
			e.preventDefault(), console.log("1"), $.ajax({
				url: "action.php",
				type: "post",
				data: $(this).serialize(),
				success: function(e) {
					$.magnificPopup.instance.close()
					$.magnificPopup.open({
						items: {
							src: '#thanksModal',
						},
						type: 'inline'
					});
				}
			})
		});
	});
}())