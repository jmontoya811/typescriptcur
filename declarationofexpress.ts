function fullName(first : string, last : string) : string {
	return first + " " + last;
}

var otherFullName : (first : string, last : string) => string;

otherFullName = function (first : string, last :string) {
	return first + " " + last;
}

var thirdFullName : (first : string, last : string) => string = function (first : string, last : string) {
	return first + " " + last;
}

console.log(fullName('Jordan', 'Montoya'));

var names : string[] = ['Jordan', 'Tiffany', 'Kristine'];
var counter : number = 0;

(function() {
	for (let name in names) {
		counter++;
	}
})();

console.log(counter);