$(function() {
	smoothScroll(500);
	projectTrans();
	projectLoad();

	$("header h1").fitText(1, { minFontSize: '20px', maxFontSize: '72px' });
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
		var newHTML = 'https://ramyasusarla.github.io/personal-site/projects/'+newFolder + '.html' ;

		$('.project-load').html(spinner).load("https://ramyasusarla.github.io/personal-site/projects/proj-1.html")
		$('.title').text(newTitle);
	});
}

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );

