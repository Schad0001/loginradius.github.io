$(function() {
	
	$(document).scroll(function() { 
		var scroll = $(window).scrollTop();
		if (scroll >= 5) {
			$('.main-nav' ).addClass('sticky-nav');
		} else {
			$('.main-nav').removeClass('sticky-nav');
		}
	});

	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
});

