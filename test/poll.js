// Make poll title consistent
var titleHeight = $('.poll-title').height();
$('.poll-title').height(titleHeight);

// Enable button on radio select
$('input').click(function() {
	$('.submit').removeAttr('disabled');
});

/*$('.submit').click(function() {
	if ($('input[type="radio"]').is(':checked')) {
		$('.submit').addClass('loading');
	};
	if ($('textarea').val()) {
		$('.submit').addClass('loading');
	};
});*/

// Result function
$('.submit').click(function() {
	$('*').not('input').each(function() {
		if ($(this).css('display') == 'none') {
			$(this).show();
		};
	});
	$('.poll-title').html('Thanks!');
	$('.option-indicator').hide();
	$('.option-percent').each(function() {
		var percent = ($('.option-percent').index(this) + 1) * 21.9;
		percent = percent.toString().substr(0,4) + '%';
		$(this).html(percent);
		$(this).next().animate({width: percent}, 500);
	});
	$('label').css('pointer-events', 'none');
	$('.poll-count').html('37 votes');
	$(this).prop('disabled', true);
});