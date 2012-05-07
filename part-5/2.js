// YOUR CODE GOES HERE
function is_correct_guess(guess, target) {
	return guess === target;
}

///////////////////////////////////////////////////////////////////////////////
//
//                         ADD YOUR CODE BEFORE THIS
//
///////////////////////////////////////////////////////////////////////////////

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
		feedback("Uh oh! Please define a is_correct_guess() function.")
	}

	target = Math.ceil(Math.random() * 10);

	$("form").submit(function(e) {
		e.preventDefault();

		var guess = readGuess();

		if (is_correct_guess(guess, target)) {
			feedback("Congratulations! You guessed it!");
		} else {
			feedback("Keep on trying. HINT: The answer is " + target + "!");
		}
	});
}

$(function() {
	start_game();
});