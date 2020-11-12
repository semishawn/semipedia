// Bouncer
function showBouncer() {
	$('.bouncer').css('opacity', '1');
} setTimeout(showBouncer, 4000);



// Popup
$(document).ready(() => $('.homepage-popup').delay(5500).fadeIn(300));
$('.close').click(() => $('.homepage-popup').fadeOut(300));



// Hide until scroll
$('.recent-semiterms').waypoint(function()
	{$('.recent-semiterms').css('opacity', '1');},
	{offset: '60%'}
);

$('.recent-semiblurbs').waypoint(function()
	{$('.recent-semiblurbs').css('opacity', '1');},
	{offset: '60%'}
);