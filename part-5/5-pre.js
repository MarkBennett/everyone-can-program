// Define our own call_me() function
function call_me(func) {
    this.call_me.called = true;
    func("Carly");
}