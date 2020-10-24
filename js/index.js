$(document).ready(function(){
	$('.searchbar').on("keyup", function() {
		$('.search-results').css('display', 'block');
		var value = $(this).val().toLowerCase();
		$('.search-results > a').filter(function() {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
			$('.search-results > a:visible:gt(4)').hide();
		});
		if( !$(this).val() ) {
			$('.search-results').hide();
		}
	});

	$('.searchbar').bind("enterKey",function(e) {
		$('.search-results > a:visible').get(0).click();
	});
	$('.searchbar').keyup(function(e) {
		if(e.keyCode == 13) {
			$(this).trigger("enterKey");
		}
	});
});

$(document).ready(function() {
	$('.homepage-popup').delay(2500).fadeIn(300);
});
$('.close').click(function() {
	$('.homepage-popup').fadeOut(300);
});