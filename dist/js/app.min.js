$(function () {

	lightbox.option({
		'resizeDuration': 200,
		'wrapAround': true,
		'showImageNumberLabel': false,
		'disableScrolling': false
	})

	/* Smooth scroll to sections */

	$("[data-scroll]").on("click", function (event) {
		event.preventDefault();

		let scrollEl = $(this).data("scroll");
		let sctollElPos = $(scrollEl).offset().top;

		$("html, body").animate({
			scrollTop: sctollElPos
		}, 500)
	});

		/* Nav Toggle on mobile
	=====================*/

	let navToggle = $('#navToggle');
	let nav = $('#nav');

	navToggle.on('click', function (event) {
		event.preventDefault();
		nav.toggleClass('show');
	});

	$(window).on("resize", function () {
		nav.removeClass('show');
	});

});

