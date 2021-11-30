$(document).ready(function() {
	$('.noidung').slideUp();

	$('.khoi h3').on('click', function(event) {
		event.preventDefault();
		$(this).next().slideToggle();

		$('html, body').animate({scrollTop:$(this).offset().top},400); 
	});
});