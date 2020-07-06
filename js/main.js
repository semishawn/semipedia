$('li>a, p>a').not(".post-link").addClass('inline');
$('p>a').not(".404-link").attr('target', '_blank');


$(".ribbon").on({
	mouseenter: function() {$('.popup').css('opacity', '0.5');},
	mouseleave: function() {$('.popup').css('opacity', '1');}
});


$('.navicon>label').click(function() {
	if ($('#toggle').is(':checked')) { 
		$('.top').css({
			'transform': 'rotate(0)',
			'top': 'calc(var(--a)/8)'
		});
		$('.mid').css({'transform': 'scale(1)'});
		$('.bot').css({
			'transform': 'rotate(0)',
			'bottom': 'calc(var(--a)/8)'
		});
	} else {
		$('.top').css({
			'transform': 'rotate(45deg)',
			'top': 'calc(var(--a)/2 - var(--b)/2)'
		});
		$('.mid').css({'transform': 'scale(0)'});
		$('.bot').css({
			'transform': 'rotate(-45deg)',
			'bottom': 'calc(var(--a)/2 - var(--b)/2)'
		});
	}
});