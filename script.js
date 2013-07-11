$(function() {
	$('div.lightboxTrigger').click
    	(function() {
			$('div.lightboxContainer', this).toggleClass('hidden');
      	});
    $('div.lightboxTrigger').click
    	(function(event) {
			event.preventDefault();
      	});
});

$(document).ready(function(){
	$('.switch').on('click', function(){
		var text = $("<h2>You better believe it!</h2>")
		$(this).after(text);	
		$(this).remove();
	});
});


  $(document).ready(function() {
	var headerTop = parseInt($('header').css('height'));

	$(window).scroll(function(){
		var scrolled = $(window).scrollTop();
		
		$('nav').css('background-position','0 '+(-(scrolled))+'px');
		
		if (scrolled > headerTop) {
			$('nav').addClass('fixed');
		}
		
		else {
			$('nav').removeClass('fixed');
		}
	});
  });
