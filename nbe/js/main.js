!function(){var t=$(document),a=$(window),i=$('[data-id="header"]'),s=($('[data-validate="form"] form'),i.outerHeight(),{items:1,nav:!1,dots:!0,dotsContainer:'[data-slider-nav="learn-steps"]',autoplay:!1,animateIn:"fadeInRight",animateOut:"fadeOutLeft",lazyLoad:!0,mouseDrag:!1,touchDrag:!1,pullDrag:!1,freeDrag:!1}),o={items:1,nav:!1,dots:!0,dotsContainer:'[data-slider-nav="quiz-steps"]',autoplay:!1,autoHeight:!0,mouseDrag:!1,touchDrag:!1,pullDrag:!1,freeDrag:!1},l={items:1,margin:50,autoplay:!1,nav:!1,dots:!1,responsive:{992:{items:2,margin:40},1200:{items:3,margin:17}}},d={errorPlacement:function(t,e){t.appendTo(e.parents(".form-group"))},submitHandler:function(t){$("#modalThanks").modal("show"),$("#modalOffer").modal("hide"),setTimeout(function(){t.submit()},3e3)}};$.validator.addMethod("valueNotEquals",function(t,e,a){return a!==t},function(t,e){return $(e).data("msg-required")});var n,e=(n={},function(t,e,a){a||(a="Don't call this twice without a uniqueId"),n[a]&&clearTimeout(n[a]),n[a]=setTimeout(t,e)});function r(){$(this).is(":not(:checked)")?$(this).siblings().find('input[type="submit"]').prop("disabled",!0):$(this).siblings().find('input[type="submit"]').prop("disabled",!1)}function c(){var t=$(this).attr("data-open");$("body").addClass("scroll-hidden"),$('[data-id="'+t+'"]').addClass("visible")}function u(){var t=$(this).attr("data-close");$("body").removeClass("scroll-hidden"),$('[data-id="'+t+'"]').removeClass("visible")}function h(t){if(""!==this.hash){i.addClass("header_fixed"),t.preventDefault();var e=this.hash;i.outerHeight(),$("html, body").animate({scrollTop:$(e).offset().top},500)}}function p(t,e){$(t+" li").click(function(){$(e).trigger("to.owl.carousel",[$(this).index(),1e3])})}function f(t){$(t).each(f),$(this).parent().parent().addClass("visible"),$(this).prop("Counter",0).animate({Counter:$(this).text()},{duration:3e3,easing:"swing",step:function(t){$(this).text(Math.ceil(t))}})}function g(){$(this).find(".video-box__video").get(0).play(),$(this).find(".video-box__poster").toggle(),$(this).find(".video-box__button").toggle(),$(this).parent().find(".video-box__poster-title").toggle()}t.ready(function(){svg4everybody({loadSprite:!1}),$(".nav-pills .nav-link").click(function(){$(".header__menu").removeClass("visible"),$("body").removeClass("scroll-hidden")});var e,t;$("img.fit-image");if(f("[data-count-text]"),$("[data-checkbox]").on("change",r),$("[data-checkbox]").each(function(){$(this).is(":not(:checked)")?$(this).siblings().find('input[type="submit"]').prop("disabled",!0):$(this).siblings().find('input[type="submit"]').prop("disabled",!1)}),$("[data-open]").click(c),$("[data-close]").click(u),$("[data-video]").click(g),e='[data-slider="quiz-steps"]',$('[data-step="next"]:not([disabled])').click(function(){var t=$(this).closest(".quiz__step"),a=[];t.find('.form-control, select, input[type="radio"]').each(function(t,e){$(e).valid()?a.push("true"):a.push("false")}),-1!=a.indexOf("false")||$(e).trigger("next.owl.carousel")}),t='[data-slider="quiz-steps"]',$('[data-step="back"]').click(function(){$(t).trigger("prev.owl.carousel")}),$('[data-validate="form"] form').each(function(){$(this).validate(d)}),$("#menu-scrolSpy a").click(h),$('[data-slider="learn-steps"]').length&&975<=a.width()&&($('[data-slider="learn-steps"]').owlCarousel(s),p('[data-slider-nav="learn-steps"]','[data-slider="learn-steps"]')),$('[data-slider="quiz-steps"]').length&&$('[data-slider="quiz-steps"]').owlCarousel(o),$('[data-slider="video-cards"]').length&&$('[data-slider="video-cards"]').owlCarousel(l),$("#offer-img").addClass("visible"),$("#typed").length)new Typed("#typed",{stringsElement:"#typed-strings",typeSpeed:50,backSpeed:50,backDelay:1e3,loop:!0,loopCount:1/0});$(".collapse").on("show.bs.collapse",function(){var t=$(this).find(".lazy-img"),e=$(this).find(".lazy-background");t.each(function(){$(this).addClass("lazyload")}),e.each(function(){$(this).addClass("lazyload")})}),$('[data-toggle="tab"]').on("show.bs.tab",function(){var t=$(this).attr("href");$(t).find(".lazy-img").each(function(){$(this).closest(".collapse").length||$(this).addClass("lazyload")})}),$(".modal").on("show.bs.modal",function(){$(this).find(".lazy-img").each(function(){$(this).addClass("lazyload")})})}),a.on("scroll resize load",function(t){"scroll"==t.type&&$(this).scrollTop(),"resize"==t.type&&e(function(){$('[data-slider="learn-steps"]').length&&(a.width()<975?($('[data-slider="learn-steps"]').trigger("destroy.owl.carousel"),$('[data-slider="learn-steps"]').removeClass("owl-carouse owl-theme")):($('[data-slider="learn-steps"]').addClass("owl-carousel owl-theme"),$('[data-slider="learn-steps"]').owlCarousel(s),p('[data-slider-nav="learn-steps"]','[data-slider="learn-steps"]')))},500,"resize"),t.type})}();