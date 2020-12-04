import 'lazysizes';
declare const Swiper: any;
declare const $: any;
declare const jQuery: any;

const initSlider = () => {
	const indexBanner = new Swiper('.indexBanner .swiper-container', {
		loop: true,
		speed: 1100,
		observer: true,
		observeParents: true,
		parallax: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		watchSlidesProgress: true,
		pagination: {
			el: '.indexBanner .swiper-pagination',
			clickable: true,
		},
		on: {
			progress: function () {
				var swiper = this;
				for (var i = 0; i < swiper.slides.length; i++) {
					var slideProgress = swiper.slides[i].progress;
					var innerOffset = swiper.width * 0.5;
					var innerTranslate = slideProgress * innerOffset;
					swiper.slides[i].querySelector(
						'.banner__img',
					).style.transform =
						'translate3d(' + innerTranslate + 'px, 0, 0)';
				}
			},

			touchStart: function () {
				var swiper = this;
				for (var i = 0; i < swiper.slides.length; i++) {
					swiper.slides[i].style.transition = '';
				}
			},

			setTransition: function (speed) {
				var swiper = this;
				for (var i = 0; i < swiper.slides.length; i++) {
					swiper.slides[i].style.transition = speed + 'ms';
					swiper.slides[i].querySelector(
						'.banner__img',
					).style.transition = speed + 'ms';
				}
			},
		},
	});
	const indexHotService = new Swiper('.indexHotService .swiper-container', {
		slidesPerView: 2,
		spaceBetween: 10,
		speed: 900,
		breakpoints: {
			768: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			1025: {
				spaceBetween: 0,
			},
			1360: {
				slidesPerView: 4,
				spaceBetween: 0,
			},
		},
	});
	const indexCustomer = new Swiper('.indexCustomer .swiper-container', {
		slidesPerColumn: 1,
		slidesPerView: 2, // or 'auto'
		spaceBetween: 0,
		pagination: {
			el: '.indexCustomer .swiper-pagination',
			clickable: true,
		},
		breakpoints: {
			768: {
				slidesPerView: 3, // or 'auto'
			},
			1025: {
				slidesPerColumn: 2,
				slidesPerView: 4, // or 'auto'
				slidesPerGroup: 4,
			},
			1200: {
				slidesPerColumn: 2,
				slidesPerView: 5, // or 'auto'
				slidesPerGroup: 5,
			},
		},
	});
};

const HeaderNav = () => {
	$('.nav__item--hasSub > .nav__link').on('click', function (e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$(this).parents('.nav__item--hasSub').toggleClass('active');
	});
	$('.header--mobile .header__toggle').on('click', function (e) {
		e.preventDefault();
		$('.header').toggleClass('active');
		$('.header')
			.find('.active')
			.each(function () {
				$(this).removeClass('active');
			});
	});
};

const customFancybox = () => {
	$('[data-fancybox]').fancybox({
		hash: false,
	});
};

document.addEventListener('DOMContentLoaded', () => {
	initSlider();
	HeaderNav();
	customFancybox();
});
