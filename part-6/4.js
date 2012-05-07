var Game = {};
Game.startGame = function() {
	var self = this;

	if (this.is_correct_guess === undefined) {
		this.feedback("Uh oh! Please define a Game.is_correct_guess(guess) function with returns true or false.")
	}

	this.target = Math.ceil(Math.random() * 10);

	$("form").submit(function(e) {
		e.preventDefault();
		self.onGuess();
	});
};
Game.onGuess = function() {
	var guess = this.readGuess();

	if (this.is_correct_guess(guess)) {
		this.feedback("Congratulations! You guessed it!");
	} else {
		this.feedback("Keep on trying. HINT: The answer is " + this.target + "!");
	}
}
Game.readGuess = function() {
	return parseInt($("#guess").val(), 10);
};
Game.feedback = function(msg) {
	$("#feedback p").html(msg);
};


///////////////////////////////////////////////////////////////////////////////
//
//                         ADD YOUR CODE AFTER HERE!!!
//
///////////////////////////////////////////////////////////////////////////////

// Look at /part-5/1.js and /part-6/3.js if you need some hints




///////////////////////////////////////////////////////////////////////////////
//
//                         ADD YOUR CODE BEFORE HERE!!!
//
///////////////////////////////////////////////////////////////////////////////
$(function() {
	Game.startGame();
});
