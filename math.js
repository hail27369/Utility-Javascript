//returns a random integer between the specified min and max values
function randomInt(min, max){
	if(min < max){
		return Math.floor(Math.random() * ((max + 1) - min)) + min;
	}
	else{
		throw 'Error: randomInt min value must be less than max value';
	}
}

//Returns a random number that is formatted to a given amount of decimals between a minimum and maximum value
function randomFloat(min, max, decimals){
	if(min < max){
		var num = (Math.random() * (max - min)) + min;
		num = parseFloat(num.toFixed(decimals));
		return num;		
	}
	else{
		throw 'Error: randomFloat min value must be less than max value';
	}
}
