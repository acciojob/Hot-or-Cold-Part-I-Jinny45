//your code here
var btn = document.getElementById("btn");
var numPtag = document.getElementBYId("respond");
var inputValue = document.getElementById("guess").value;

function randomNumGenerator(){
	randomNum = Math.floor(Math.random()*41)-20;
	document.getElementById("num").innerText = randomNum;
	guessNum();
	print();
}
function guessNum(){
	input = number(document.getElementById("guess").value);
}
function print(){
	if(Math.abs(randomNum - input)<=5){
		document.getElementById("respond").innerText="Hot";
	}
	else {
		document.getElementById("respond").innerHTML = "Cold";
	}
	
}

btn.addEventListener("click", randomNumGenerator);