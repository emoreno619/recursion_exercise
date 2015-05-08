// powerR

// Define a function called power which take two arguments: a number and an 
// exponent to raise that number to. For example:

// console.log(power(2, 3));
// //=> 8

// console.log(power(4, 2));
// //=> 16

function powerR(base, exp){
	if (exp != 0){
		return base * powerR(base, exp-1)
	} else
		return 1;
}

console.log(powerR(2, 1));
//=> 2

console.log(powerR(2, 3));
//=> 8

console.log(powerR(4, 2));
//=> 16