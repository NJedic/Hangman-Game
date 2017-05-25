// Declared Variables
//=========================

// This array holds all of the possible words for the hangman game
var wordChoices = ["robes", "hat", "gloves", "cloak", "wand", "cauldron", "telescope", "scales", "phials", "books"];

// This array holds all of our letters
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Variable to hold index of current question
var index = 0;

//Variable that starts the game with a score of zero
var score = 0;

//Variable that defines a blank space
var blank = "_";

//Empty array to store the chosen word
var underscoreArray = [];

//Empty array to store the letters guessed by the player
var lettersGuessedArray = [];

//Variables used and explained in functions
var number = Math.floor((Math.random() * wordChoices.length));
var chosenWord = wordChoices[number];
var chosenCharacters = chosenWord.split("");
var numberOfSpaces = chosenCharacters.length;
var updatedBlankNonsense = "<p>" + blank + "</p>";
var gameDIV = document.getElementById("game");

//Functions
//===============================

//Function to choose the word and render it to the screen
function renderWord(){
	// A random number is generated between 0 and 10 (the number of possible choices in the wordChoice array) 
	var number = Math.floor((Math.random() * wordChoices.length));
	
	// Variable chosenWord equals the word that's chosen from the previous var
	var chosenWord = wordChoices[number];
	var chosenCharacters = chosenWord.split("");
	underscoreArray.push(chosenCharacters);
			console.log(chosenCharacters);
	
	// Variable numberOfSpaces measures the length of the chosen word
	var numberOfSpaces = chosenCharacters.length;
			console.log(numberOfSpaces);
	
	// Loop that turns spaces into blanks
	for (var i = 0; i < numberOfSpaces; i++){
		blank="_" + blank;

	// Set a variable to publish blanks to HTML
	var updatedBlankNonsense = "<p>" + blank + "</p>";
	
	// Publish word represented by blanks to HTML
	var gameDIV = document.getElementById("game");
	gameDIV.innerHTML = updatedBlankNonsense;
}}

//Function that updates the score
function updateScore() {
	document.getElementById("score").innerHTML = "Supplies Identified: " + score;
}

//Function that updates the leters used
function lettersUsed() {
	document.getElementById("lettersguessed").innerHTML = "Guessed Letters: " + lettersGuessedArray;
}

//Main Game-play Process
//================================

//Game beginning functions
renderWord();
updateScore();
lettersUsed();

//When the user presses any key, the following function runs
document.onkeyup = function(event){
	var key = event.key;
	var i = index;

	if (key == underscoreArray[i]){
		alert("A Match!");
	}
}





// document.onkeyup = function(renderWord){
// 	console.log(chosenWord);
// 	console.log(underscoreArray);
// }

// When the helpButton is clicked...the game begins
// $("#helpButton").on("click", function(renderWord){
// 	console.log("underscoreArray"); 

// 	var key

// })


	// document.onkeyup = function(event){
	// 	var key = event.key
	// 	key = alphabet

	// 	if (key == underscoreArray){
	// 		alert("you matched");
	// 	}




	// // Variable defining user input 
	// var userInput = event.key;

	// if (userInput == underscoreArray)


