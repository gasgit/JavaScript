// function to change case
function changeCaseUpper(val) {
    return val.toUpperCase();
}

function changeCaseLower(val) {
    return val.toLowerCase();
}
// print results
console.log(changeCaseUpper("wassmall"));

// function to pass a string and function
function demoFunctionPass(str, passFunction) {
    console.log(passFunction(str));
}
// call on demoFunctionPass
demoFunctionPass("tinycase", changeCaseUpper);

demoFunctionPass("THISWASUPPER", changeCaseLower);


// assign functions as data
var say = console.log;
say("hello world!!");

var changeLwr = changeCaseLower;
console.log(changeLwr("CHANGE_LOWER"));
