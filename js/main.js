// Popup dim on nav ribbon hover
$('.ribbon').on({
	mouseenter: () => $('.base-body .popup').css('opacity', '0.5'),
	mouseleave: () => $('.base-body .popup').css('opacity', '1')
});



// Local Storage
localStorage.clear();