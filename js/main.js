$('li > a, p > a').not('.post-link').addClass('inline');
$('p > a').not('.404-link').attr('target', '_blank');


$('.ribbon').on({
	mouseenter: function() {$('.base-body > .popup').css('opacity', '0.5');},
	mouseleave: function() {$('.base-body > .popup').css('opacity', '1');}
});


localStorage.clear();