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
var guessesRemaining = 10;
var wordList = ["bear"]; //["Thor", "Hulk", "Iron Man", "Spider Man", "Captain Marvel", "Thanos", "Captain America", "Black Widow", "Black Panther", "Hawkeye", "Ant Man", "Vision", "Groot", "Falcon", "Scarlet Witch", "Gamora", "Star-Lord", "Winter Soldier", "Doctor Strange", "Drax", "Mantis", "Rocket", "War Machine", "Nebula", "Loki", "Nick Fury", "Hela", "Odin", "Yondu", "Wasp"];
var randomWord;

// on first key press, starts game, generates random word & matching underscore placeholder for letters, sets Guesses Remaining = 10, Wins = 0
document.onkeyup = function (event) {
    var userGuess = event.key;
    if (isPlaying === false) {
        var randomWord = wordList[Math.floor(Math.random() * wordList.length)];
        var underscore = [];

        for (var i = 0; i < randomWord.length; i++) {
            underscore += "_ ";
        }
        wordPlaceHolderText.textContent = underscore;
        instructionsText.textContent = "Select a letter";
        guessesRemainingText.textContent = "Guesses Remaining: " + guessesRemaining;
        winsText.textContent = "Wins: " + wins;
        isPlaying = true;

        // on key press checks to see if keystroke is a letter in the randomWord" 
        if (isPlaying === true) {
            document.onkeyup = function (event) {
                var userGuess = event.key;
                console.log(userGuess);

                if (randomWord.indexOf(userGuess) > -1) {
                    for (var i = 0; i < randomWord.length; i++) {
                        if (userGuess === randomWord[i]) {
                            underscore[i] = userGuess;
                        }
                    }
                }
                else {
                    // adds letter to guessed letter field
                    lettersGuessed.push(userGuess);
                    lettersGuessedText.textContent = "Letters Guessed: " + lettersGuessed;
                    guessesRemaining--;
                    guessesRemainingText.textContent = "Guesses Remaining: " + guessesRemaining;

                }

            }
        }
    }
}