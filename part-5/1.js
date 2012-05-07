// Define a function to say hello
function greetings() {
	say("Greetings!");
}

// Call the greeter
greetings();


// Define a function which accepts a number and returns "even" if the number
// is even. "odd" otherwise
function oddOrEven(num) {
	var remainder = num % 2;

	if (0 === remainder) {
		return "even";
	} else {
		return "odd"
	}
}

// Call oddOrEven with an argument
oddOrEven(100);

// Display the return value of oddOrEven()
say("1 is " + oddOrEven(1));
say("2 is " + oddOrEven(2));

// This will raise an error
// remaineder is only defined when you're inside oddOrEven()
say("remainder is " + remainder);