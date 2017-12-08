function nameFunction(name) {
    var n = name;
    function printName() {
        console.log(n);
    }
    printName();
}
nameFunction('Jordan');
function nameFunction2(name) {
    var n = name;
    return function () {
        console.log(n);
    };
}
var nameAgain = nameFunction2('Tiffany');
nameAgain();
// * * *
function lineup() {
    var nowBatting = 1;
    return {
        nextBatter: function () { nowBatting++; },
        currentBatter: function () { return nowBatting; }
    };
}
var batters = lineup();
console.log(batters.currentBatter());
batters.nextBatter();
console.log(batters.currentBatter());
batters.nextBatter();
console.log(batters.currentBatter());
var pitchers = lineup();
console.log(pitchers.currentBatter());
//# sourceMappingURL=closeintro.js.map