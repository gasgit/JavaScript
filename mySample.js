// declare function add
function add(a, b) {
    return a + b;
}
ans = add(10, 5);
console.log("Ans: ", ans);

// assign anonymous function to var add2
var add2 = function(a, b) {
    return a + b;
};
c = add2(3, 6);
console.log("Ans: ", c);

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


// create function with accessor
function privateVar() {
    var points = 0;
    this.getPoints = function() {
        return points;
    };
    this.score = function() {
        points++;
    };
}
// declare
var prv = new privateVar();
// loop with mod
for (var i = 1; i <= 20; i++) {

    if (i % 5 === 0) {
        prv.score();
    }

}
// user get accessor
console.log(prv.getPoints());



// modules

var superModule = (function(){
  var secret = 'mysecretcode';
  var password = 12345;

  function getSecret(){
    console.log(secret);
  }

  function getPassword(){
    console.log(password);
  }

  return {
    getSecret: getSecret,
    getPassword: getPassword
  };

})();


superModule.getSecret();

superModule.getPassword();
