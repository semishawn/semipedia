// Copy function
function copy(data) {
	navigator.clipboard.writeText(data);
}



// Popup dim on nav ribbon hover
$(".ribbon").on({
	mouseenter: () => $(".nav .popup").css("opacity", "0.5"),
	mouseleave: () => $(".nav .popup").css("opacity", "1")
});



// Slideshow functionality
var count = 0;

$(".slide-btn").click(function() {
	var imgWidth = parseFloat($(".slideshow-container").css("--img-width"));
	var direction = $(this).attr("class").split(" ")[1].replace("slide-", "");

	if (direction == "left") if (count >= 1) count -= 1;
	if (direction == "right") if (count <= 1) count += 1;

	$(".back-spacer").css("min-width", (count * 2 * imgWidth) + "px");
});



// Me having to fix my past cookie erros
localStorage.clear();
sessionStorage.clear();