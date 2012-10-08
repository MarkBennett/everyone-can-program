if (window.greeter === undefined) {
    say("Please define greeter(name, callback)");
}

// Look below here for examples of calling your greeter with different callbacks
greeter("Bob", function() {
    console.log("Done showing the name");
});

greeter("Sarah", function() {
	say("Done showing the name.");
});

greeter("Kyle", function() {
	alert("Done showing the name.");
});