var colorArray;
var rightColor;
var complexity=6;

//fetching elements from the DOM
var heading=document.getElementById("heading");
var squares=document.querySelectorAll(".square");
var message=document.getElementById("message");
var hard=document.getElementById("hard");
var easy=document.getElementById("easy");
hard.addEventListener('click',function(){
		makeActive(hard,easy);
		complexity=6;
		message.textContent="";
		for(var i=3;i<squares.length;i++){
			squares[i].style.backgroundColor=colorArray[i];
		}
		newGame();
	});
easy.addEventListener('click',function(){
		makeActive(easy,hard);
		complexity=3;
		message.textContent="";
		for(var i=3;i<squares.length;i++){
			squares[i].style.backgroundColor="black";
		}
		newGame();
	});
var newColors=document.getElementById("newcolors");
newColors.addEventListener("click",newGame);
newColors.addEventListener("mouseover",function(){
		this.style.backgroundColor="#3f7fbf";
		this.style.color="white";
	});
newColors.addEventListener("mouseout",function(){
		this.style.backgroundColor="white";
		this.style.color="#3f7fbf";
	});

newGame();
makeActive(hard,easy)

function makeActive(blue,white){
	blue.style.backgroundColor="#3f7fbf";
	blue.style.color="white";
	white.style.backgroundColor="white";
	white.style.color="#3f7fbf";
}

function newGame(){
message.textContent="";
//declaring a random array of colors
colorArray=generateColors(complexity);
//Manuplating them
rightColor=assignColor();
console.log(rightColor);
heading.textContent= rightColor;

//assigning colors to squares
colorSquares();
}

function colorSquares(){
	for(var i=0;i<complexity;i++){
		squares[i].style.backgroundColor=colorArray[i];
		console.log(colorArray[i]);
		squares[i].addEventListener("click",checkGuess);
	}
}

function checkGuess(){	
	var clickedColor=this.style.backgroundColor;
	if(clickedColor==rightColor){
		message.textContent="CORRECT!";
		for(var i=0;i<complexity;i++){
		squares[i].style.backgroundColor=rightColor;
		}
	}
	else{
		message.textContent="TRY AGAIN";
		this.style.backgroundColor="black";
	}
}


function generateColors(num){
	var colorArray=[];
	var i=0;
	var firstColorComp,secColorComp,thirdColorComp;
	while(i<num){
		firstColorComp=generateRandomNum(256);
		secColorComp=generateRandomNum(256);
		thirdColorComp=generateRandomNum(256);
		colorArray[i]="rgb("+firstColorComp+", "+secColorComp+", "+thirdColorComp+")";
		i++;
	}
	return colorArray;
}

function assignColor(){
	return colorArray[generateRandomNum(complexity)];
}

function generateRandomNum(limit){
	return Math.floor(Math.random()*limit);
}

