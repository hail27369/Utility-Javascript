//returns a random integer between 0 and the specified max value (returns as a string)
function randomInt(maxVal){
	var num = Math.random()*maxVal;
	return num.toFixed();
}
