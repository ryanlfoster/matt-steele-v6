$(document).ready(function() {

		$('.nav-toggle').click(function(event){

			if ($('#primary-nav ul').is(':visible')){

				$('#primary-nav ul').not('#primary-nav ul ul').slideUp(400, function(){ $('#primary-nav ul').removeAttr('style'); });

				$('a',this).removeClass('open').text('Open Navigation');

			} else {

				$('#primary-nav ul').not('#primary-nav ul ul').slideDown(400);

				$('a',this).addClass('open').text('Close Navigation');
		}

			event.preventDefault();
			});	
	
	$('#primary-nav ul li').each(function(){

		if($(this).has("ul").length){

			$(this).append('<span>▼</span>');

			$('span',this).click(function(){

				if ($('#primary-nav ul ul').is(':visible')){

					$('#primary-nav ul li.open').removeClass('open').find('span').text('▼').parent().find('ul').slideUp(300);
				}

				if ($(this).parent().find('ul').is(':visible')){
 
					$(this).text('▼').parent().find('ul').slideUp(300, function(){ $('#primary-nav ul ul').removeAttr('style'); });

					$(this).parent().removeClass('open');

				} else {

					$(this).text('▲').parent().find('ul').slideDown(300);

					$(this).parent().addClass('open');
				}

			});

		}

	});
	
});

$("#recent-articles-clicker").click(function() {
    $('html, body').animate({
        scrollTop: $("#recent-articles-section").offset().top
    }, 1000);
});

$("#work-clicker").click(function() {
    $('html, body').animate({
        scrollTop: $("#work-section").offset().top
    }, 1000);
});

$("#contact-clicker").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact-section").offset().top
    }, 1000);
});

$("#intro-contact-clicker").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact-section").offset().top
    }, 1000);
});



// scroll up effect for the 'return to top' link in the footer

$(document).ready(function() {		
	$('.scrollable').click(function(e){
		e.preventDefault();
	   	var id = $(this).attr('href');
	   	$('html,body').animate({scrollTop: $(id).offset().top},'slow');
	   	return false;
	});
});

$(document).ready(function(){

	/* validate! */
	$('.validate').validate({
		errorElement: 'span',
    	errorPlacement: function(error, element) {
       	element.parent().find('.error_placehold').html(error);
   	},
    	highlight: function(element) {
       		$(element).parent().addClass('field_error');
   	},
   		unhighlight: function(element) {
     		$(element).parent().removeClass('field_error');
   	}
	});

});
