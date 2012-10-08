// Define some math operations
function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

// Make a function which accepts a function as an argument
function operate(opr, a, b) {
	return opr(a, b);
}

say("add() 1 and 2 = " + operate(add, 1, 2));
say("subtract() 1 from 5 = " + operate(subtract, 5, 1));
say("multiply() 3 and 4 = " + operate(multiply, 3, 4));
say("divide() 10 by 2 = " + operate(divide, 10, 2));



// Many functions accept callbacks which are triggered after an event occurs
//
// This function accepts a callback called completed
function do_something(completed) {
	completed("Done!");
}
do_something(function(message) {
	say("The callback received the message = " + message);
});





// We can even return functions as values from functions!
function make_adder(add_x) {
	return function(y) {
		return add(add_x, y);
	}
}

// Make an adder which adds ten to it's arguments
ten_adder = make_adder(10);
say("ten_adder(5) = " + ten_adder(5));