// Popup dim on nav ribbon hover
$('.ribbon').on({
	mouseenter: () => $('.popup').css('opacity', '0.5'),
	mouseleave: () => $('.popup').css('opacity', '1')
});



// Local Storage
localStorage.clear();