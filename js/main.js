// Popup dim on nav ribbon hover
$('.ribbon').on({
	mouseenter: () => $('.nav > .popup').css('opacity', '0.5'),
	mouseleave: () => $('.nav > .popup').css('opacity', '1')
});



// Local Storage
localStorage.clear();