let Util = {}

//Function returns a nodelist of elements from the page based on the input
Util.getEl = function(input){
	return document.querySelectorAll(input);
}

//Adds an event listener
Util.addLis = function(ele, event, func){
	if(ele){
		ele.addEventListener(event, func, false);
	}
}

//Removes an event listener
Util.rmvLis = function(ele, event, func){
	if(ele){
		ele.removeEventListener(event, func, false);
	}
}

//Returns a random integer between the specified min and max values
Util.randomInt = function(min, max){
	if(min < max){
		return Math.floor(Math.random() * ((max + 1) - min)) + min;
	}
	else{
		throw 'Error: randomInt min value must be less than max value';
	}
}

//Returns a random number that is formatted to a given amount of decimals between a minimum and maximum value
Util.randomFloat = function(min, max, decimals){
	if(min < max){
		var num = (Math.random() * (max - min)) + min;
		num = parseFloat(num.toFixed(decimals));
		return num;		
	}
	else{
		throw 'Error: randomFloat min value must be less than max value';
	}
}

//Returns a random RGB color value as a string
Util.getRandomColor = function(){
  var color = 'rgb(' + randomInt(0, 255) + ',' + randomInt(0, 255) + ',' + randomInt(0, 255) + ')';

  return color;
}
