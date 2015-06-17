$(function() {
	
	$(document).scroll(function() { 
		var scroll = $(window).scrollTop();
		if (scroll >= 5) {
			$('.main-nav' ).addClass('sticky-nav');
		} else {
			$('.main-nav').removeClass('sticky-nav');
		}
	});

	$('a[href*=#]:not([href=#])').click(function(e) {

		var target = $.attr(this, 'href');
	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top-180
	    }, 1000);

	    e.preventDefault

	    $('a[href*=#]').removeClass('current-page');
	    $(this).addClass('current-page');
	});

	// var isVisible = function(id) {
	// 	var scrollVal = $(this).scrollTop();

	// 	switch(true) {
	// 		case(scrollVal >= $(id).offset().top-290):
	// 			$('a[href="'+id+'"').addClass('current-page')
	// 		break;
	// 		default:
	// 			$('a[href*=#]').removeClass('current-page');
	// 	} 
	// }
	
	// $(document).scroll(function() {

	// 	isVisible("#unified-social-api-libraries");
	// 	isVisible("#user-registration-api-libraries");
	// 	isVisible("#turnkey-plugins-for-content-management-systems");
	// 	isVisible("#packaged-install");
	// 	isVisible("#open-source-libraries");
	// });
});