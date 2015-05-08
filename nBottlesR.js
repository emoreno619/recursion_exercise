// nBottlesR

// Define a function that takes an argument n and returns the lyrics to 99 bottles of beer on the wall, 
// starting with that number n. For example, singSong(99) would print out the lyrics to 99 Bottles of Beer on the Wall.

function nBottlesR(n){
	var lyrics = "";
	if (n != 0){
		if (n != 1 && n != 2){
			lyrics  = lyrics  = n + " bottles of beer on the wall, " + n + " bottles of beer, take one down, pass it around, " + (n -1) + " bottles of beer on the wall.";
			return lyrics + nBottlesR(n-1);
		} else {
			if (n == 2)
				lyrics  = n + " bottles of beer on the wall, " + n + " bottles of beer, take one down, pass it around, " + (n -1) + " bottle of beer on the wall.";
			if (n == 1)
				lyrics  = n + " bottle of beer on the wall, " + n + " bottle of beer, take it down, pass it around, " + (n -1) + " bottles of beer on the wall.";
			return lyrics + nBottlesR(n-1);
		}
	} else {
		return "";
	}
}

console.log(nBottlesR(1));
console.log(nBottlesR(2));
console.log(nBottlesR(10));