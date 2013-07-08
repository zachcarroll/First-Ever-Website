$(function() {
	$('a.thailand').on('click',function(event){
		event.preventDefault();
		var lightbox = $('div.lightbox');
		var lightboxContainer = $('div.lightboxContainer');
		lightboxContainer.css('display','block');
		lightbox.html('<img src="' + $(this).attr('href') + '" />');
		
		lightbox.on('click',function() {
			$(this).css('display','none');
			lightboxContainer.css('display','none');
		});
	});
});