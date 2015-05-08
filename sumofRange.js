// sumofRange
// Define a function sumOfRange that takes a number x and returns the sum of all digits between 0 and x.

function sumofRange(x){
	var sum = 0;
	if (x != 0){
		sum = x + sumofRange(x-1);
		return sum;
	}
	else
		return sum;
}

console.log(sumofRange(0));
//0
console.log(sumofRange(1));
//1
console.log(sumofRange(2));
//3
console.log(sumofRange(3));
//6
console.log(sumofRange(4));
//10