// Copy function
function copy(data) {
	navigator.clipboard.writeText(data);
}



// Random integer function
function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}



// Popup dim on nav ribbon hover
$(".ribbon").on({
	mouseenter: () => $(".navbook").siblings().css("opacity", "0.5"),
	mouseleave: () => $(".navbook").siblings().css("opacity", "1")
});



// Cookies
if (sessionStorage.hasOwnProperty("theme")) {
	var theme = sessionStorage.getItem("theme");
	$("body").attr("id", theme);
}