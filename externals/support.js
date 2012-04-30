function say(message) {
	$(function() {
		$("#target").append("<h1>" + message + "</h1>");
	});
}

function get_random(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

function get_guess() {
	return parseInt(window.prompt("Please supply a guess:"), 10);
}