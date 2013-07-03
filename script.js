$(function() {
	$('a.thailand').on('click',function(event){
		event.preventDefault();
		var lightbox = $('div.lightbox');
		var lightboxContainerAndBg = $('div.lightboxContainer,div.lightboxContainerBg');
		lightboxContainerAndBg.css('display','block');
		lightbox.html('<img src="' + $(this).attr('href') + '" />');
		
		lightbox.on('click',function() {
			$(this).css('display','none');
			lightboxContainerAndBg.css('display','none');
		});
	});
});