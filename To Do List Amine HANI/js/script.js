$(function(){
	
	$('.form-btn').click(function(){
		var title = $('.form-title').val();
		var description = $('.form-description').val();
		if(title && description != "") {
			$('.list-empty').remove();
			var element = 
			'<div class="list-ready">' +
			'<div class="list-ready-title">' +
			'<div class="list-ready-title-p">' +
			title +
			'<a class="clear-button" href="#" aria-label="clear-button"></a>' +
			'</div>' +
			'<a class="roll-up" href="#" aria-label="roll-up"></a>' +
			'</div>' +
			'<div class="list-ready-description">' +
			'<p>' + description + '</p>' +
			'</div>' +
			'</div>';
			$(element).appendTo($('.list'));
			$('.list-ready').addClass('display-none').slideDown(500);
			
			$('.form-description').val('');
			$('.form-title').val('');
			$('.form').animate( {padding:'25px 40px 35px'}, {duration:500});
			return false;
		}
	});

	$('.list').on('mouseenter', '.clear-button', function(){
			$(this).toggleClass("clear-rotation");
	});
	$('.list').on('mouseleave', '.clear-button', function(){
		$(this).toggleClass("clear-rotation");
	});

	$('.list').on('click', '.clear-button', function(){  
		$(this).closest('.list-ready').hide('slow', function(){
			$(this).remove();
			if($('div').is('.list-ready') != true) {
			$('.list').append('<p class="list-empty">La liste est vide ...</p>');
			$('.form').animate( {padding:'45px 40px 55px'}, {duration:500});
		}
		});
	});

	$('.list').on('click', '.roll-up', function(){
    var title = $(this).closest('.list-ready').find('.list-ready-description');
    if(title.is(':visible')) {
			title.slideUp(400);
			$(this).addClass('roll-up-rotation');
    }else {
			title.slideDown(400);
			$(this).removeClass('roll-up-rotation');
    }
  });

});