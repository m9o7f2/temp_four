$(function () {
	$(window).scroll(function() {
		if ($(window).scrollTop() > 600){
			$("nav").addClass('red')
		}
	})
})