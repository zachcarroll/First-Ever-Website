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