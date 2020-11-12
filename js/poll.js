// Enable button functions
$('input').change(function() {
	if ($('input').is(':checked')) {$('.submit').removeAttr('disabled')}
	else {$('.submit').prop('disabled', true)};
});
$('textarea').keyup(function() {
	if ($(this).val()) {$('.submit').removeAttr('disabled')}
	else {$('.submit').prop('disabled', true)};
});

// Result function
$('.submit').click(function() {
	if ($('input').is(':checked')) $('.submit').addClass('loading');
	if ($('textarea').val()) $('.submit').addClass('loading');

	$(document).ajaxComplete(function() {
		var titleHeight = $('.poll-title').height();
		$('.poll-title').html('Thanks!').height(titleHeight);
		$('.option-fill, .option-percent, .poll-count').show();
		$('.option-indicator').hide();
		$('label').css('pointer-events', 'none');
		$('.submit').removeClass('loading').prop('disabled', true);
	});
});