// $('wrapper').addClass('loaded');

// $('.icon-menu').click(function (event) {
// 	$(this).toggleClass('active');
// 	$('.menu__body').toggleClass('active');
// 	$('body').toggleClass('lock');
// });

function ibg() {
	$.each($('.ibg'), function (index, val) {
		if ($(this).find('img').length > 0) {
			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
		}
	});
}
ibg();

// $(window).resize(function (event) {
// 	mainblock();
// });
// function mainblock() {
// 	var h = $(window).outerHeight();
// 	$('.header').css('min-height', h);
// }
// mainblock();

const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function () {
	this.classList.toggle('is-active');
});
