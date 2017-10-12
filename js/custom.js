$(document).ready(function(){
	// menu卷動效果
	$(window).scroll(function(){
		var scrollheight = $(window).scrollTop();
		var jsHeader  = $('.jsHeader');
		if (scrollheight > 80){
			jsHeader.addClass('not-on-top')

		}else
			jsHeader.removeClass('not-on-top')
	})

	// wow.js plugin initialize
	new WOW().init(); 

	// fancybox plugin initialize
	$("[data-fancybox]").fancybox({
		// Options will go here
		loop : true,

	});

	// stellar.js plugin initialize
	$(window).stellar();
	
});