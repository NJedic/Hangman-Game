// This array holds all of the possible words for the hangman game
var wordChoices = ["robes", "hat", "gloves", "cloak", "wand", "cauldron", "telescope", "scales", "phials", "books"]

// Declared Variables
var randomNumber = Math.floor(Math.random() * 10);
var chosenWord = wordChoices[randomNumber];
var underscoreNumber = chosenWord.length;
var underscoreArray = [];
var counter = 7;
var numberTest = 0;
var lettersGuessedArray = [];



// When the helpButton is clicked...
$("#helpButton").on("click", function(){
	// A random number is generated between 0 and 10 (the number of possible choices in the wordChoice array) 
	var number = Math.floor((Math.random() * wordChoices.length));
	// // That word is then displayed on the page
	$("#game").text(wordChoices[number]);
	// Variable chosenWord equals the word that's chosen from the previous var
	// var chosenWord = wordChoices*[number];
	// console.log(chosenWord);
	// // Variable numberOfSpaces measures the length of the chosen word
	// var numberOfSpaces = chosenWord.length;
	// console.log(numberOfSpaces);

})

