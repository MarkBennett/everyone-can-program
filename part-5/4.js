// We've written these special function you should call your function with
function maybe(name) {
    window.maybe_called = true;
    say("Call " + name + " maybe?");
}
function definately(name) {
    window.definately_called = true;
    say("Call " + name + " definately!");
}




// Define your call_me() function below, it should accept a function as an argument




// Now call your call_me() function with the maybe function we provided.
// What does it say?

// Try calling your function again with the definately function.
// What does it say now? Is it different than before?