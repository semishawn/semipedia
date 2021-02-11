$('body').attr('id', localStorage.theme);

$('input[name="theme"]').change(function() {
	// Default theme
	if ($('#default-button').is(':checked')) {
		$('body').attr('id', '');
		localStorage.theme = '';
	}
	// Noir theme
	if ($('#noir-button').is(':checked')) {
		$('body').attr('id', 'noir');
		localStorage.theme = 'noir';
	}
	// Cool theme
	if ($('#cool-button').is(':checked')) {
		$('body').attr('id', 'cool');
		localStorage.theme = 'cool';
	}
	// Balmy theme
	if ($('#balmy-button').is(':checked')) {
		$('body').attr('id', 'balmy');
		localStorage.theme = 'balmy';
	}
});