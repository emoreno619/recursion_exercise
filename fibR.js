function fibR(num){
	if(num== 0)
		return
	if (num == 1 || num == 2)
		return 1
	else
		return (fibR(num-1)+ fibR(num-2));
}

console.log(fibR(1));
//1
console.log(fibR(2));
//1
console.log(fibR(3));
//2
console.log(fibR(4));
//3
console.log(fibR(5));
//5
console.log(fibR(8));
//21