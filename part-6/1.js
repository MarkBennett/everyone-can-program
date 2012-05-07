// Making an object is simple
var obj = new Object();

// or

var obj = {};

// Storing an accessing values is also simple
obj["key1"] = "value1";
obj["key2"] = "value2";
obj["key3"] = "value3";

console.log(obj["key1"]);
console.log(obj["key2"]);
console.log(obj["key3"]);

// You can also get the keys and values of an object as properties
console.log(obj.key1);
console.log(obj.key2);
console.log(obj.key3);

// Setting object properties is even easier
obj.key4 = "New value!";
console.log(obj.key4);

// If you use the square brackets though, you can use keys which don't work with the property accesor
// obj.+!blarg = "broken!";     <== This doesn't work!
obj["+!blarg"] = "works!";


// When making an object you can set keys and values
var obj_literal = {
	"key1" : 1,
	"key2" : 2,
	"key3" : 3
};
console.log(obj_literal.key2);

// Key don't need to be strings
var odd_keys = {
  1: "One",
  2: "Two",
  "name" : "Bob"	
};