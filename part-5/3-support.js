// DON'T MODIFY THE CODE FOLLOWING THIS LINE!!!

var target;

function readGuess() {
    return parseInt($("#guess").val(), 10);
}
function feedback(msg) {
	$("#feedback p").html(msg);
}
function start_game() {
	if (!window.is_correct_guess) {
		feedback("Uh oh! Please define an is_correct_guess(guess, target) function.")
	}

	target = Math.ceil(Math.random() * 10);

	$("form").submit(function(e) {
		e.preventDefault();

		var guess = readGuess();

		if (is_correct_guess(guess, target)) {
			feedback("Congratulations! You guessed it!");
		} else {
			feedback("Keep on trying. HINT: The answer is " + target + ", you guessed " + guess + ".");
		}
	});
}

$(function() {
	start_game();
});