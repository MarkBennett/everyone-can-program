// Make an empty queue
var queue = [];

// Add some elements to the queue
queue.push(1);
queue.push(2);
queue.push(3);

console.log("queue = " + queue);
while(queue.length > 0) {
	console.log("removing " + queue.shift() + " from the queue");
}
console.log("queue = " + queue);





// Make a stack
var stack = [];

// Add some elements to the stack
stack.push(1);
stack.push(2);
stack.push(3);

console.log("stack = " + stack);
while(stack.length > 0) {
	console.log("removing " + stack.pop() + " from the stack");
}
console.log("stack = " + stack);
