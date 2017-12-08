function fullName(first, last) {
    return first + " " + last;
}
var otherFullName;
otherFullName = function (first, last) {
    return first + " " + last;
};
var thirdFullName = function (first, last) {
    return first + " " + last;
};
console.log(fullName('Jordan', 'Montoya'));
var names = ['Jordan', 'Tiffany', 'Kristine'];
var counter = 0;
(function () {
    for (var name_1 in names) {
        counter++;
    }
})();
console.log(counter);
//# sourceMappingURL=declarationofexpress.js.map