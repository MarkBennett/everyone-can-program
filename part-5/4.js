// Define your greeter() function here
//
// It should accept a name, and a callback function to call with your message of greeting.
//
// See /part-5/3.js for some insipiration if you're stuck.


// Look below here for examples of calling your greeter with different callbacks
greeter("Bob", function(msg) {
	console.log(msg)
});

greeter("Sarah", function(msg) {
	say(msg);
});

greeter("Kyle", function(msg) {
	alert(msg);
});