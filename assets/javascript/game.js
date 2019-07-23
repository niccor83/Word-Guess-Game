// portal variables to html
var instructionsText = document.getElementById("instructions-text");
var winsText = document.getElementById("wins-text");
var lettersGuessedText = document.getElementById("guesses-text");
var guessesRemainingText = document.getElementById("guesses-remaining-text");
var wordPlaceHolderText = document.getElementById("placeHolder-text");

// game variables
var isPlaying = false;
var wins = 0;
var lettersGuessed = [];
var underscore = [];
var guessesRemaining = 10;
var wordList = ["thor", "hulk", "iron man", "spider man", "captain marvel", "thanos", "captain america", "black widow", "black panther", "hawkeye", "ant man", "vision", "groot", "falcon", "scarlet witch", "gamora", "star lord", "winter soldier", "doctor strange", "drax", "mantis", "rocket", "war machine", "nebula", "loki", "nick fury", "hela", "odin", "yondu", "wasp"];
var randomWord;
var correctLtr = 0;

//Start Game Function 
function startUp() {
    correctLtr = 0;
    lettersGuessed = [];
    underscore = [];
    guessesRemaining = 10;
    lettersGuessedText.textContent = "Letters Guessed: " + lettersGuessed;
    
    randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    for (var i = 0; i < randomWord.length; i++) {
        underscore.push("_");
        if (randomWord[i] === " ") {
            underscore[i] = "-";
            correctLtr = 1;
            console.log("correct letters = " + correctLtr);
        }
    }
    wordPlaceHolderText.textContent = underscore.join(" "); //removes commas in underscore array and replaces them with spaces
    instructionsText.textContent = "Select a letter";
    guessesRemainingText.textContent = "Guesses Remaining: " + guessesRemaining;
    winsText.textContent = "Wins: " + wins;
}

//Reset game function
function reset() {
    wins = 0;
    correctLtr = 0;
    lettersGuessed = [];
    underscore = [];
    guessesRemaining = 10;
    lettersGuessedText.textContent = "Letters Guessed: " + lettersGuessed;

    randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    for (var i = 0; i < randomWord.length; i++) {
        underscore.push("_");
        if (randomWord[i] === " ") {
            underscore[i] = "-";
            correctLtr = 1;
            console.log("correct letters = " + correctLtr);
        }
    }
    wordPlaceHolderText.textContent = underscore.join(" "); //removes commas in underscore array and replaces them with spaces
    instructionsText.textContent = "Select a letter";
    guessesRemainingText.textContent = "Guesses Remaining: " + guessesRemaining;
    winsText.textContent = "Wins: " + wins;
}

//--------------First key press starts game---------------------
 
    document.onkeyup = function (event) { 
        var userGuess = event.key; 
        
            if (isPlaying === false) {
            startUp();
            isPlaying = true;
            }

        
        //--------------Second Key Press------------------------
        //checks to see if keystroke is a letter in the randomWord" 
        if (isPlaying === true) {
            document.onkeyup = function (event) {
                var userGuess = event.key; 
                
                //checks to see if letter is in the randomWord & not in underscore
                if (randomWord.indexOf(userGuess) > -1 && underscore.indexOf(userGuess) === -1) {
                    for (var i = 0; i < randomWord.length; i++) {
                        if (userGuess === randomWord[i]) {
                            underscore[i] = userGuess;
                            wordPlaceHolderText.textContent = underscore.join(" ");
                            correctLtr++;
                            if (correctLtr === randomWord.length) {
                                wins++;
                                winsText.textContent = "Wins: " + wins;
                                instructionsText.textContent = "You win!";
                               startUp();  
                            }   
                        }
                    }
                }
                //This prevents correctLtr from incrementing if user presses a correct key more than once
                else if (randomWord.indexOf(userGuess) > -1 && underscore.indexOf(userGuess) > -1){
                    instructionsText.textContent = "You have already selected: " + userGuess + " Pick another letter!";
                }
                //if letter not found in randomWord run following code
                else {
                    // adds letter to guessed letter field
                    lettersGuessed.push(userGuess);
                    lettersGuessedText.textContent = "Letters Guessed: " + lettersGuessed;
                    //document.getElementByID("guesses-text").innerhtml = "Letters Guessed: " + lettersGuessed;
                    guessesRemaining--;
                    guessesRemainingText.textContent = "Guesses Remaining: " + guessesRemaining;
                    if(guessesRemaining === 0){
                        instructionsText.textContent = "You Lose! Press any key to start a new game.";
                        reset();
                    }
                }
            }
        }
    }            
        
    