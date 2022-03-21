var app = {
	init: function() {
		app.basket_preview_close();
		// app.scrollspy();
		app.toggles();
		app.search_open();
		app.menu_open();
		app.front_carousel();
		app.color_carousel();
		app.product_slider();
		app.print_carousel();
		app.similar_carousel();
		// app.stick_header();
		app.quick_view();
		app.another_test();
		app.pageTop();
		// app.stick_elems();
		// app.stick_test();
	},
	another_test: function() {
		var waitForFinalEvent = (function () {
		  var timers = {};
		  return function (callback, ms, uniqueId) {
			if (!uniqueId) {
			  uniqueId = "Don't call this twice without a uniqueId";
			}
			if (timers[uniqueId]) {
			  clearTimeout (timers[uniqueId]);
			}
			timers[uniqueId] = setTimeout(callback, ms);
		  };
		})();
		var sections = $('.section'), nav = $('.scrollspy_init'), nav_height, nav_offset, menu_offset, menu_height, header_height;
		var content = $("#content");
		var header = $('.header');
		var menu = $('.menu');
		var afterElem = $('.after-fixed-init');
		var sticky;
		var resizeW,
			winW = $(window).width(),
			winT = $(window).scrollTop();
		function identify_val() {
			nav_height = nav.outerHeight();
			menu_offset = menu.offset().top;
			if (nav.length) {
				nav_offset = nav.offset().top;
			}
			header_height = header.outerHeight();
			menu_height = menu.outerHeight();
			if ( $(window).width() > 767 ) {
				sticky = content.offset().top - menu_height;
			} else {
				sticky = 0;
			}
		}
		identify_val();
		function resizeHandler() {
			if ( $(window).width() > 767) {
				$(window).scroll(function(){
					header.removeClass('fixed')
					var that = $(this).scrollTop();
					if ( that > ( header_height - menu_height ) ) {
						menu.addClass('fixed');
						content.css({'padding-top': menu_height});
					} else {
						menu.removeClass('fixed');
						content.removeAttr('style');
					};
					if ( $('.scrollspy_init_list').length ) {
						if ( that > ( header_height + $('.under-header').outerHeight() - menu_height - $('.scrollspy_init_list').outerHeight() ) ) {
							$('.scrollspy_init_list').addClass('fixed');
							$('.scrollspy_init_list').css({'top': menu_height});
							afterElem.css({'padding-top': $('.scrollspy_init_list').outerHeight()})
						} else {
							$('.scrollspy_init_list').removeClass('fixed');
							$('.scrollspy_init_list').removeAttr('style');
							afterElem.removeAttr('style');
							// afterElem.css({'padding-top': '0'})
						}
					} else {
						if ( that > ( $('.under-header').outerHeight() + $('.under-head-title').outerHeight() + header_height - nav_height - menu_height ) ) {
							nav.addClass('fixed');
							nav.css({'top': menu_height});
							afterElem.css({'padding-top': nav_height})
						} else {
							nav.removeClass('fixed');
							nav.removeAttr('style');
							// afterElem.css({'padding-top': '0'})
						}
					}
				});
			} else{
				menu.removeClass('fixed');
				nav.removeClass('fixed');
				nav.removeAttr('style');
				$('.scrollspy_init_list').removeAttr('style');
				content.removeAttr('style');
				afterElem.removeAttr('style')
				$(window).scroll(function(){
					var that = $(this).scrollTop();
					if ( that > 0 ) {
						header.addClass('fixed');
						content.css({'padding-top': header_height})
					} else {
						header.removeClass('fixed')
						content.css({'padding-top': '0'})
					}
					if ( $('.scrollspy_init_list').length ) {
						if ( that > ( $('.under-header').outerHeight() - $('.scrollspy_init_list').outerHeight() ) ) {
							$('.scrollspy_init_list').css({'top': header_height});
							$('.scrollspy_init_list').addClass('fixed');
							afterElem.css({'padding-top': $('.scrollspy_init_list').outerHeight() })
						} else {
							$('.scrollspy_init_list').css({'top': '0'});
							$('.scrollspy_init_list').removeClass('fixed');
							afterElem.css({'padding-top': '0' })
						}
					} else {
						afterElem.removeAttr('style');
						nav.removeClass('fixed')
						// if ( that > ( $('.under-header').outerHeight() + $('.under-head-title').outerHeight() + header_height - nav_height - menu_height ) ) {
						// 	nav.addClass('fixed');
						// 	nav.css({'top': header_height});
						// 	afterElem.css({'padding-top': $('.scrollspy_init_list').outerHeight()})
						// } else {
						// 	nav.removeClass('fixed');
						// 	nav.removeAttr('style');
						// 	// afterElem.css({'padding-top': '0'})
						// }
					}
				});
			}
		}
		$(window).on('scroll', function() {
			var that = $(this).scrollTop();
			sections.each(function() {
				if( $(window).width() > 767 ) {
					var top = $(this).offset().top - nav_height - menu_height;
				} else {
					if ( $('.scrollspy_init_list').length ) {
						var top = $(this).offset().top -  $('.scrollspy_init_list').outerHeight() - header_height;
					} else {
						var top = $(this).offset().top - nav_height - header_height;
					}
				}
				var bottom = top + $(this).outerHeight();

				if (that >= top && that <= bottom) {
					nav.find('a').removeClass('active');
					sections.removeClass('active');

					$(this).addClass('active');
					nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
				}
			});
		})
		nav.find('a').on('click', function () {
			var $el = $(this), id = $el.attr('href');
			if ( $(window).width() > 767 ) {
				$('html, body').animate({
					scrollTop: $(id).offset().top - nav_height - menu_height + 1
				}, 500);
			} else {
				if ( $('.scrollspy_init_list').length ) {
					$('html, body').animate({
						scrollTop: $(id).offset().top - header_height - $('.scrollspy_init_list').outerHeight()
					}, 500);
				} else {
					$('html, body').animate({
						scrollTop: $(id).offset().top - header_height + 1
					}, 500);
				}
			}

			return false;
		});
		resizeHandler();

		$(window).on('resize', function() {
			var thatW = $(this).width();
			waitForFinalEvent(function() {
				identify_val();
				resizeHandler()
			}, 500, "stick")
		})

		
	},
	scrollspy: function() {
		$(window).scroll(function() {
			stick_anchors();
		});
		var elem = $('.scrollspy_init');
		var menu = $('.menu');
		var elem_height, elem_offset, menu_height, offsetHeight;
		identify_val();
		$(window).resize(function() {
			identify_val();
		});
		function identify_val() {
			elem_height = elem.outerHeight();
			elem_offset = elem.offset().top;
			menu_height = menu.outerHeight();
			offsetHeight = elem_height + menu_height;
		};
		function stick_anchors() {
			if ( $(window).scrollTop() > elem_offset ) {
				elem.addClass('product-anchor_fixed');
				elem.css({'top': menu_height});
			} else {
				elem.removeClass('product-anchor_fixed');
			}
		};
		$('body').scrollspy({
			target: '.scrollspy_init',
			offset: offsetHeight
		});
		$(".scrollspy_init a").on('click', function(event) {

			if (this.hash !== "") {

				event.preventDefault();

				var hash = this.hash;
				var scrollPos = $('body').find($(this).attr('href')).offset().top - (offsetHeight - 1);
				var result = $(hash).offset().top - offsetHeight;
				console.log($(hash).offset().top)
				console.log($('#hair-care').offset().top)
				$('html, body').animate({
					scrollTop: result
				}, 800, function(){

				// window.location.hash = hash;
				});

			}
		});
		var sections = $('.section'), nav = $('.scrollspy_init'), nav_height, nav_offset, menu_height, header_height;
		var header = $('.header');
		var menu = $('.menu');
		identify_val();
		$(window).resize(function() {
			identify_val();
		});
		function identify_val() {
			nav_height = nav.outerHeight();
			if (nav.length) {
				nav_offset = nav.offset().top;
			}
			menu_height = menu.outerHeight();
			header_height = header.outerHeight();
		};
		$(window).on('scroll', function () {
			var cur_pos = $(this).scrollTop();
			stick_anchors()
			sections.each(function() {
				if( $(window).width() > 768 ) {
					var top = $(this).offset().top - nav_height - menu_height;
				} else {
					var top = $(this).offset().top - nav_height - header_height;
				}
				var bottom = top + $(this).outerHeight();

				if (cur_pos >= top && cur_pos <= bottom) {
					nav.find('a').removeClass('active');
					sections.removeClass('active');

					$(this).addClass('active');
					nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
				}
			});
		});
		nav.find('a').on('click', function () {
			var $el = $(this), id = $el.attr('href');
			if ( $(window).width() > 768 ) {
				$('html, body').animate({
					scrollTop: $(id).offset().top - nav_height - menu_height + 1
				}, 500);
			} else {
				$('html, body').animate({
					scrollTop: $(id).offset().top - header_height - nav_height + 1
				}, 500);
			}

			return false;
		});
		function stick_anchors() {
			if ( $(window).width() > 768 ) {
				if ( $(window).scrollTop() > (nav_offset - nav_height) ) {
					nav.addClass('fixed');
					nav.css({'top': menu_height});
					$('.after-fixed-init').css({'padding-top': nav_height});
				} else  {
					nav.removeClass('fixed');
					nav.css({'top': 'auto'});
					$('.after-fixed-init').css({'padding-top': '0'});
				}
			} else {
				if ( $('.scrollspy_init_list').length ) {
					if ( $(window).scrollTop() > (nav_offset - nav_height) ) {
						nav.addClass('fixed');
						nav.css({'top': header_height});
						$('.after-fixed-init').css({'padding-top': nav_height});
					} else  {
						nav.removeClass('fixed');
						nav.css({'top': 'auto'});
						$('.after-fixed-init').css({'padding-top': '0'});
					}
				}
			}
		};
	},
	quick_view: function() {
		$('[data-fancybox^="quick-view"]').fancybox({
		  animationEffect   : "zoom-in-out",
		  animationDuration : 400,
		  transitionEffect: 'slide',
		  transitionDuration: 500,
		  margin : 0,
		  gutter : 0,
		  touch  : {
			vertical: false
		  },
		  baseTpl	:
		  '<div class="fancybox-container user-view-wrap" role="dialog" tabindex="-1">' +
		  '<div class="fancybox-bg"></div>' +
		  '<div class="fancybox-inner">' +
		  '<div class="fancybox-stage"></div>' +
		  '<div class="fancybox-form-wrap">' +
		  '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' +
		  '<svg viewBox="0 0 40 40">' +
		  '<path d="M10,10 L30,30 M30,10 L10,30" />' +
		  '</svg>' +
		  '</button></div>' +
		  '</div>' +
		  '</div>',
		  onInit: function(instance) {
			var current = instance.group[instance.currIndex];
			instance.$refs.form = current.opts.$orig.parent().find('.user-view');
			instance.$refs.form.appendTo( instance.$refs.container.find('.fancybox-form-wrap') );
			var list = '', 
				$bullets;
			for ( var i = 0; i < instance.group.length; i++ ) {
			  list += '<li><a data-index="' + i + '" href="javascript:;"><span>' + ( i + 1 ) + '</span></a></li>';
			}
			$bullets = $( '<ul class="product-bullets">' + list + '</ul>' ).on('click touchstart', 'a', function() {
			  var index = $(this).data('index');
			  $.fancybox.getInstance(function() {
				this.jumpTo( index );
			  });
			});
			instance.$refs.bullets = $bullets.appendTo( instance.$refs.stage );
		  },
		  beforeShow : function( instance ) {
			instance.$refs.stage.find('ul:first')
			  .children()
			  .removeClass('active')
			  .eq( instance.currIndex )
			  .addClass('active');
		  },
		  afterClose: function(instance, current) {
			instance.$refs.form.appendTo( current.opts.$orig.parent() );
		  }
		});
	},
	toggles: function() {
		$('.toggle__button').click(function() {
			$(this).parent().siblings().slideToggle(100);
			$(this).parent().parent().toggleClass('toggle_active');
		})
		$('.anchor-menu__toggle:not(.anchor-menu__untoggle)').click(function(e) {
			e.preventDefault();
			var el = $(this);
			var id = el.attr('href');
			// console.log(id);
			$('.anchor-menu__toggle:not(.anchor-menu__untoggle)').removeClass('active');
			$('.product-descr__content > div').slideUp();

			el.addClass('active');
			$('.product-descr__content').find('div'+id).slideDown();
		})
	},
	menu_open: function() {
		$('.logo-section__hamburger').click(function() {
			$(this).toggleClass('is-active');
			$('.menu').toggleClass('menu_open');
		})
	},
	search_open: function() {
		var flag = false;
		$('.search:not(.search_decorative)').submit(function() {
			if ( $(window).width() > 767 ) {
				if ( !flag ) {
					return false;
				} else {
					return true;
				}
			}
		});
		$('.search__button_call-input').on('click', function() {
			if ($(window).width() > 767) {
				if ( $(this).hasClass('active') ) {
					flag = true;
				}
				$(this).addClass('active');
				$('.search:not(.search_decorative)').addClass('search_active');
			}
		});
		$(document).on('click', function(e) {
			if ($(window).width() > 767) {
				if(!$(e.target).closest('.search:not(.search_decorative)').length) {
					$('.search:not(.search_decorative)').removeClass('search_active');
					$('.search__button_call-input').removeClass('active');
				}
			}
		})
		$('.search__button_for_mob').on('click', function() {
			if ($(window).width() < 767) {
				$(this).toggleClass('active');
				$('.search:not(.search_decorative)').toggleClass('search_active');
			}
		});
	},
	basket_preview_close: function() {
		$('.basket').on('mouseover',function() {
			if ( $(window).width() > 767 ) {
				$(this).addClass('basket_active');
			}
		})
		$(document).on('mouseover', function(e) {
			var el = $(this);
			if ( $(window).width() > 767 ) {
				if(!$(e.target).closest('.basket').length) {
					$('.basket').removeClass('basket_active');
				}
			}
		})
		$('.basket__link').click(function(e) {
			if ( $(window).width() < 767 ) {
				e.preventDefault();
				$(this).parent().addClass('basket_active');
			}
		})
		$('.basket-preview__close').click(function() {
			$('.basket').removeClass('basket_active');
		})
		$(document).on('click', function(e) {
			if ( $(window).width() < 767 ) {
				if(!$(e.target).closest('.basket').length) {
					$('.basket').removeClass('basket_active');
				}
			}
		})
	},
	front_carousel: function() {
		$('.front-carousel').owlCarousel({
			items: 1,
			loop: true,
			dots: true,
			nav: true,
			navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
			navSpeed: 1500,
			dotSpeed: 1500,
			smartSpeed: 1500,
			autoplay: true,
			autoplayHoverPause: true,
			autoplayTimeout: 4000
		})
	},
	color_carousel: function() {
		$('.color-carousel').owlCarousel({
			loop: false,
			dots: false,
			nav: true,
			navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
			navSpeed: 1500,
			dotSpeed: 1500,
			smartSpeed: 1500,
			autoplay: true,
			autoplayHoverPause: true,
			autoplayTimeout: 4000,
			responsive: {
				0: {
					items: 1
				},
				576: {
					items: 2,
					margin: 20
				},
				768: {
					items: 3
				},
				992: {
					items: 4
				},
				1500: {
					items: 5,
					margin: 30
				}
			}
		})

	},
	product_slider: function() {
		$('.product-carousel').owlCarousel({
			items: 1,
			loop: false,
			dots: false,
			nav: true,
			navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
			responsive: {
				0: {
					dots: false
				},
				992: {
					dots: true
				}
			}
		})
	},
	similar_carousel: function() {
		$('.similar-carousel').owlCarousel({
			loop: false,
			dots: false,
			nav: true,
			navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
			responsive: {
				0: {
					items: 1,
					dots: false
				},
				576: {
					items: 2
				},
				992: {
					dots: true,
					items: 4
				}
			}
		})
	},
	print_carousel: function() {
		$('.paint-carousel').owlCarousel({
			loop: true,
			nav: false,
			dots: false,
			responsive: {
				320: {
					items: 1
				},
				400: {
					items: 2
				},
				575: {
					items: 3
				},
				767: {
					items: 5,
					dots: true
				},
				992: {
					items: 7,
					dots: true
				}
			}
		})
	},
	stick_header: function() {

		var waitForFinalEvent = (function () {
		  var timers = {};
		  return function (callback, ms, uniqueId) {
			if (!uniqueId) {
			  uniqueId = "Don't call this twice without a uniqueId";
			}
			if (timers[uniqueId]) {
			  clearTimeout (timers[uniqueId]);
			}
			timers[uniqueId] = setTimeout(callback, ms);
		  };
		})();

		var sections = $('.section'), nav = $('.scrollspy_init'), nav_height, nav_offset, menu_height, header_height;
		var content = $("#content");
		var header = $('#header');
		var menu = $('.menu');
		var sticky;
		function identify_val() {
			nav_height = nav.outerHeight();
			if (nav.length) {
				nav_offset = nav.offset().top;
			}
			header_height = header.outerHeight();
			menu_height = menu.outerHeight();
			if ( $(window).width() > 767 ) {
				sticky = content.offset().top - menu_height;
			} else {
				sticky = 0;
			}
		}
		identify_val();
		scrollSticks()
		// resize_val()
		$(window).resize(function () {
			waitForFinalEvent(function(){
				identify_val();
			}, 500, "val_calc");
			waitForFinalEvent(function(){
				// resize_val()
			}, 500, "stick");
			// waitForFinalEvent(function(){
			// 	if ( $(window).width() > 767 ) {
			// 		deskTopFunction();
			// 	}
			// }, 500, "desk");
			// waitForFinalEvent(function(){
			// 	if ( $(window).width() < 767 ) {
			// 		mobFunction();
			// 	}
			// }, 500, "mob");
			// waitForFinalEvent(function(){
			// 	resize_val()
			// }, 500, "stick");
		});
		if ( $(window).width() > 767 ) {
			deskTopFunction();
		} else {
			mobFunction();
		}
		$(window).resize(function () {
			waitForFinalEvent(function(){
				if ( $(window).width() > 767 ) {
					deskTopFunction();
				} else {
					mobFunction();
				}
			}, 500, "header");
		});


		function deskTopFunction() {
			$(window).scroll(function() {
				if (window.pageYOffset > sticky) {
					// header.removeClass("header_sticky_mob");
					header.addClass("header_sticky_desktop");
					// content.css({'padding-top': menu_height});
				} else {
					// header.removeClass("header_sticky_mob");
					header.removeClass("header_sticky_desktop");
					// content.css({'padding-top': '0'});
				}
			});
		}
		function mobFunction() {
			$(window).scroll(function() {
				if (window.pageYOffset > 0) {
					// header.removeClass("header_sticky_desktop");
					header.addClass("header_sticky_mob");
					// content.css({'padding-top': header_height})
				} else {
					// header.removeClass("header_sticky_desktop");
					header.removeClass("header_sticky_mob");
					// content.css({'padding-top': '0'})
				}
			});
		}
		function scrollSticks() {
			$(window).on('scroll', function (e) {
				var cur_pos = $(this).scrollTop();
				if ( $(window).width() > 768 ) {
					if ( cur_pos > (nav_offset - nav_height) ) {
						nav.addClass('fixed');
					} else  {
						nav.removeClass('fixed');
					}
				} else {
					nav.removeClass('fixed');
					console.log(nav_offset - nav_height)
					if ( $('.scrollspy_init_list').length ) {
						if ( cur_pos > (nav_offset - nav_height) ) {
							nav.addClass('fixed');
						} else  {
							nav.removeClass('fixed');
						}
					}
				}
				sections.each(function() {
					if( $(window).width() > 768 ) {
						var top = $(this).offset().top - nav_height - menu_height;
					} else {
						var top = $(this).offset().top - nav_height - header_height;
					}
					var bottom = top + $(this).outerHeight();

					if (cur_pos >= top && cur_pos <= bottom) {
						nav.find('a').removeClass('active');
						sections.removeClass('active');

						$(this).addClass('active');
						nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
					}
				});
			});
		}
		// function resize_val() {
		// 	if ( $(window).width() > 768 ) {
		// 		if ( nav.hasClass('fixed') ) {
		// 			nav.css({'top': menu_height});
		// 			$('.after-fixed-init').css({'padding-top': nav_height});
		// 		} else {
		// 			nav.css({'top': 'auto'});
		// 			$('.after-fixed-init').css({'padding-top': '0'});
		// 		}
		// 	} else {
		// 		if ( $('.scrollspy_init_list').length ) {
		// 				nav.css({'top': header_height});
		// 				$('.after-fixed-init').css({'padding-top': nav_height});
		// 			} else  {
		// 				nav.css({'top': 'auto'});
		// 				$('.after-fixed-init').css({'padding-top': '0'});
		// 			}
		// 	}
		// }
		
		nav.find('a').on('click', function () {
			var $el = $(this), id = $el.attr('href');
			if ( $(window).width() > 768 ) {
				$('html, body').animate({
					scrollTop: $(id).offset().top - nav_height - menu_height + 1
				}, 500);
			} else {
				if ( $('.scrollspy_init_list').length ) {
					$('html, body').animate({
						scrollTop: $(id).offset().top - header_height - nav_height + 1
					}, 500);
				} else {
					$('html, body').animate({
						scrollTop: $(id).offset().top - header_height + 1
					}, 500);
				}
			}

			return false;
		});

	},
	stick_test: function() {

		function debounce(func, wait, immediate) {
		  var timeout;
		  return function() {
			var context = this, args = arguments;
			var later = function() {
			  timeout = null;
			  if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		  };
		};

		var sections = $('.section'), nav = $('.scrollspy_init'), nav_height, nav_offset, menu_height, header_height;
		var content = $("#content");
		var header = $('#header');
		var menu = $('.menu');
		var sticky;
		var identify_val = function(e) {
			nav_height = nav.outerHeight();
			if (nav.length) {
				nav_offset = nav.offset().top;
			}
			header_height = header.outerHeight();
			menu_height = menu.outerHeight();
			if ( $(window).width() > 767 ) {
				sticky = content.offset().top - menu_height;
			} else {
				sticky = 0;
			}
		};
		identify_val();
		// $(window).bind('resizeEnd', function() {

		// });
		function call_stick_elem() {
			if ( $(window).width() > 767 ) {
				deskTopFunction();
				test_anchors()
			} else {
				mobFunction();
				test_anchors_product();
			}
		}
		call_stick_elem()
		var resizeFn = debounce(function() {
			if ( $(window).width() > 767 ) {
				deskTopFunction();
				test_anchors()
			} else {
				mobFunction();
				test_anchors_product();
			}
		}, 100);
		$(window).on("resize", identify_val);
		$(window).on("resize", resizeFn);
		$(window).on("scroll", call_stick_elem);
		function deskTopFunction() {
			$(window).scroll(function() {
				if (window.pageYOffset > sticky) {
					header.removeClass("header_sticky_mob");
					header.addClass("header_sticky_desktop");
					content.css({'padding-top': menu_height});
				} else {
					header.removeClass("header_sticky_mob");
					header.removeClass("header_sticky_desktop");
					content.css({'padding-top': '0'});
				}
			});
		}
		function mobFunction() {
			$(window).scroll(function() {
				if (window.pageYOffset > 0) {
					header.removeClass("header_sticky_desktop");
					header.addClass("header_sticky_mob");
					content.css({'padding-top': header_height})
				} else {
					header.removeClass("header_sticky_desktop");
					header.removeClass("header_sticky_mob");
					content.css({'padding-top': '0'})
				}
			});
		}
		function test_anchors() {
			// $(window).on('scroll', function (e) {
				var cur_pos = $(this).scrollTop();
				if ( $(window).scrollTop() > (nav_offset - nav_height) ) {
					nav.addClass('fixed');
					nav.css({'top': menu_height});
					$('.after-fixed-init').css({'padding-top': nav_height});
				} else  {
					nav.removeClass('fixed');
					nav.css({'top': 'auto'});
					$('.after-fixed-init').css({'padding-top': '0'});
				}
			// });
		}
		function test_anchors_product() {
			// $(window).on('scroll', function (e) {
				var cur_pos = $(this).scrollTop();
				if ( $('.scrollspy_init_list').length ) {
					if ( $(window).scrollTop() > (nav_offset - nav_height) ) {
						nav.addClass('fixed');
						nav.css({'top': header_height});
						$('.after-fixed-init').css({'padding-top': nav_height});
					} else  {
						nav.removeClass('fixed');
						nav.css({'top': 'auto'});
						$('.after-fixed-init').css({'padding-top': '0'});
					}
				}
			// });
		}
	},
	stick_elems: function() {
		var waitForFinalEvent = (function () {
		  var timers = {};
		  return function (callback, ms, uniqueId) {
			if (!uniqueId) {
			  uniqueId = "Don't call this twice without a uniqueId";
			}
			if (timers[uniqueId]) {
			  clearTimeout (timers[uniqueId]);
			}
			timers[uniqueId] = setTimeout(callback, ms);
		  };
		})();
		var menu = $('.menu'),
			header = $('.header'),
			nav = $('.anchor-menu');
			navProduct = $('.products-anchor');

		var menu_height, header_height, nav_height, menu_offset, navOfsset;
		function identify_values() {
			menu_height = menu.outerHeight();
			menu_offset = menu.scrollTop();
			header_height = header.outerHeight();
			nav_height = nav.outerHeight();
			navOfsset = nav.scrollTop();
			navProduct_height = navProduct.outerHeight();
		}
		identify_values();
		test();
		$(window).resize(function () {
			identify_values();
			// waitForFinalEvent(function(){
			// }, 500, "stick");
			test()
			$(".menu").sticky('update');
			$(".stick-elem_product").sticky('update');
			$(".stick-elem").sticky('update');
			$(".header").sticky('update');
		});
	},
	pageTop: function() {
		$('.page-top').on('click', function(e) {
			event.preventDefault();
			$("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
		})
	}
}

$(document).ready(function() {
	app.init();
	$("form").submit(function(e) {
    	e.preventDefault()
    	$.ajax({
	        url: "action.php",
	        type: "post",
	        data: $(this).serialize(),
	        success: function(data) {
	        	$('.clear_btn').trigger('click');
	        	$('.fancybox-close-small').trigger('click');
        	}
        });
    });
})
//# sourceMappingURL=maps/main.js.map
