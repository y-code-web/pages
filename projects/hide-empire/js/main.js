(function() {
	var doc = $(document);
	var testimonialsCarouselOpts = {
		items: 1,
		loop: false,
		dots: false,
		animateIn: 'zoomIn',
		animateOut: 'zoomOut',
		nav: true,
		navText: ['<span class="icon icon_angle"></span>', '<span class="icon icon_angle icon_angle_reverse"></span>']
	};
	function toggleCard() {
		var $cont = $('.cont');
		var $el = $('.el');
		var $btn = $('.el__close-btn');

		setTimeout(function() {
		  $cont.removeClass('s--inactive');
		}, 200);

		$el.click(function() {
			if ($(this).hasClass('s--active')) return;
			$cont.addClass('s--el-active');
			$(this).addClass('s--active');
			$(this).css({'z-index': '1'});
		});

		$btn.click(function(e) {
			var parent = $(this).parents('.el')
			e.stopPropagation();
			$cont.removeClass('s--el-active');
			$('.el.s--active').removeClass('s--active');
			setTimeout(function() {
				console.log( $(this) )
				parent.css({'z-index': 'auto'});
			}, 300)
		});
	}
	doc.ready(function() {
		$('[data-carousel="cont"]').owlCarousel(testimonialsCarouselOpts)
		toggleCard();
	})
}())
//# sourceMappingURL=main.js.map
