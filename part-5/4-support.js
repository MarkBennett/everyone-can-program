if (window.call_me === undefined) {
    say("Oops! You need to define a call_me() function in 4.js");
} else {
    if (!window.maybe_called) {
        say("Try calling your call_me() function with the maybe function as an arg. What does it say?");
    }
    if (!window.definately_called) {
        say("Try calling your call_me() function with the definately function as an arg. What does it say?");
    }
}