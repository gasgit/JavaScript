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
