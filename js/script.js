
var a = 2,
	b = 3, 
	Value = (a * a) + (2 * a * b) - (b * b);


console.log( 'and the result is:' + Value);


if (Value > 0) {
    console.log('Wynik dodatni');
} else if (Value < 0) {
    console.log('Wynik ujemny');
}; 


if (Value == 0) {
	console.log ('jestem zerem');
} if (!Value == 0) {
	console.log ('nie jestem zerem');
};