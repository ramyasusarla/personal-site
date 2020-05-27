$(function() {
	smoothScroll(500);
	projectTrans();
	projectLoad();
});

function smoothScroll (duration) {
	$('a[href^= "#"]').on('click', function (event){
		var target = $( $(this).attr('href'));

		if(target.length){
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, duration);
		}
	});
}

function projectTrans(){

	$('.return').click(function(){
		$('.project-trans').css('left','0%');
		$('.projects-container').hide(800);
	});

	$('.thumb-unit').click(function(){
		$('.project-trans').css('left', '-100%');
		$('.projects-container').show(800);
	});

	
}

function projectLoad(){
	$.ajaxSetup({ cache: true})
	$('.thumb-unit').click(function(){
		var $this = $(this);
		var newFolder = $this.data('folder');
		var newTitle = $this.find('strong').text();
		var spinner = '<div class="loader">Loading...</div>';
		var newHTML = '/projects/'+newFolder + '.html' ;

		$('.project-load').html(spinner).load(newHTML)
		$('.title').text(newTitle);
	});
}

