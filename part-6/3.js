// Create an object like normal
var Person = {};

// Set the Person's name property
Person.name = "Tess";

// Add a method which let's the Person say hello
//
// Notice that we use an anonymous function just like when we made a callback
Person.greet = function() {
	say("Hi! My name is " + this.name + ".");
};
Person.greet();

// We can also use object literals
var Brian = {
	name : "Brian",
	greet : function() {
		say("Hi! My name is " + this.name + ".");
	}
};
Brian.greet();

// You may have noticed that we had to write greet() twice. We can save typing
// using something called inheritence but won't be covering that in this course