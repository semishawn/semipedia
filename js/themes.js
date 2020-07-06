/*$(document).ready(function(){
var radios = document.getElementsByName("theme");
var val = localStorage.getItem('theme');
for(var i=0;i<radios.length;i++){
if(radios[i].value == val){
radios[i].checked = true;
}
}
$('input[name="theme"]').on('change', function(){
localStorage.setItem('theme', $(this).val());
var id = $(this).attr('id');
localStorage.setItem('id', id);
var retrievedid = localStorage.getItem('id');
$('body').attr('id', retrievedid);
});
});*/


$(document).ready(function() {
	if (localStorage.theme) {
		$('body').attr('id', localStorage.theme);
	} else {
		$('body').attr('id', '');
	}

	$('input[name="theme"]').on('change', function() {
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
});