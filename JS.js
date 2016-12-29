// declare function add
function add(a, b) {
    return a + b;
}
ans = add(10, 5);
console.log("Ans: ", ans);

// assign anonymous function to var add2
var add2 = function(a, b) {
    return a + b;
}
c = add2(3, 6);
console.log("Ans: ", c);

// function to change case
function changeCaseUpper(val) {
    return val.toUpperCase();
}

function changeCaseLower(val){
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
