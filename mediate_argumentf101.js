// Function expression
var fullName;
fullName = function (first, last) {
    return first + " " + last;
};
console.log(fullName('Jimi', 'Hendrixx'));
// Immediately invoked version
(function (first, last) {
    console.log(first + " " + last);
})('Last', 'Frontier');
//# sourceMappingURL=mediate_argumentf101.js.map