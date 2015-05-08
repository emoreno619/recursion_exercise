// palindromeR

// Define a recursive function that returns true if a string is a palindrome and false otherwise.

function palindromeR(string){
	if (string.length != 1){
		achar = string.substring(string.length, string.length -1);
		bchar = string.substring(0, 1);
		
		if (achar == bchar){
			string = string.substring(1, string.length-1)
			return palindromeR(string);
		} else
			return false
	} else
		return true;
}

console.log(palindromeR('racecar'));
console.log(palindromeR('abcde'));
