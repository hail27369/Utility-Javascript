//adds an event listener
function addLis(ele, event, func){
	if(ele){
		ele.addEventListener(event, func, false);
	}
}

//removes an event listener
function rmvLis(){
	if(ele){
		ele.removeEventListener(event, func, false);
	}
}
