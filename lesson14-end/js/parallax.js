$(document).ready(function() {
	
	$(window).bind('scroll', function(e) {
		parallax();
	});
	
	$('a.earth').click(function() {
		$('html, body').animate({ scrollTop:0 }, 1000,
			function() {
				parallax();
			});
		return false;
	});
	
	$('a.moon').click(function() {
		$('html, body').animate({ scrollTop:$('#moon').offset().top }, 1000,
			function() {
				parallax();
			});
		return false;
	});
	
	$('a.rocket').click(function() {
		$('html, body').animate({ scrollTop:$('#rocket').offset().top }, 1000,
			function() {
				parallax();
			});
		return false;
	});
	
	$('a.saturn').click(function() {
		$('html, body').animate({ scrollTop:$('#saturn').offset().top }, 1000,
			function() {
				parallax();
			});
		return false;
	});
	
});

function parallax() {
	var scrollPosition = $(window).scrollTop();
	$('#stars').css('top', (0 - (scrollPosition * .2)) + 'px');
	$('#images').css('top', (0 - (scrollPosition * .5)) + 'px');
}