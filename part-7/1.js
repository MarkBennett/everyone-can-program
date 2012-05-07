// Make an empty Array
var arr = new Array();
var arr = [];

// Make an array with something in it
var list = new Array(1, 2, 3);
var list = [1, 2, 3];

// You can store any object in an array
var obj = {
	"name" : "Robin"
};
var full = [1, "Bob", obj];

// Access the values of an array using the square brackets
// the key's are called indexes and start with 0.
console.log(list[0]);
console.log(list[1]);
console.log(list[2]);

// Set spots in an array using the square brackets
full[0] = "New Value";
console.log(full[0]);

// Find out how long in an array using length
// Notice that length is not a function of the array
console.log("Our list is " + list.length + " elements long.");

// We often want to do something to each element in an array
// This is one of those times when we use a for loop
for (var i = 0; i < list.length; i++) {
	console.log(list[i]);
}