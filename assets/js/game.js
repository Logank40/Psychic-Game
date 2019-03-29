// create all of my variables that contain logic for our game
  var wins = 0;
  var losses = 0;
  var guessesLeft = 10;
  // lettersAlreadyGuessed (array)
  var lettersAlreadyGuessed = [];
  // computerChoice (string)
  var computerChoice = ""
  // computerChoicesBank (array of the alphabet)
  var computerChoicesBank = "abcdefghijklmnopqrstuvwxyz".split("");

// create all variables that reference specific parts of the page
  // $wins (document.getElementById("wins"))
  var $wins = document.getElementById("wins")
  // $losses
  var $losses = document.getElementById("losses")
  // $guessesLeft
  var $guessesLeft = document.getElementById("guesses-left")

  // $userGuess
  var $userGuess = document.getElementById("user-guess")
  // $computerGuess
  var $computerGuess = document.getElementById("computer-guess") 
  // $lettersAlreadyGuessed
  var $lettersAlreadyGuessed = document.getElementById("guessed-letters")

// create a function to start/reset the game
function newGame() {
  // reset important game variables
  // assign computerGuess a new random letter
  $computerGuess.innerHTML = computerChoice
  computerChoice = computerChoicesBank[Math.floor(Math.random()*computerChoicesBank.length)]
    // reset the lettersAlreadyGuessed array
    lettersAlreadyGuessed.length = 0;

    // reset guessesLeft back to 10
    guessesLeft = 10;
    // maybe write some information to the page indicating a new game has started
    $wins.innerHTML = wins;
    $losses.innerHTML = losses;
    $guessesLeft.innerHTML = guessesLeft;
    $lettersAlreadyGuessed.innerHTML = "";
}

document.onkeyup = function(event) {
  // run our logic to check our guess
  
    // capture user's guess using event.key and converts responses to lowercase
    var userGuess = event.key.toLowerCase()
  
    //Recording user's response and checking it to our array. confirmimg its a letter
    
    guessesLeft --;
    // if userGuess === computerGuess...you win
      // increase wins by 1
      // start a new game newGame()
    // else
      // decrement guessesLeft by 1 (guessesLeft--)
    if (userGuess === computerChoice) {
      wins ++;
      newGame();
    }

    else if (guessesLeft === 0) {
      losses ++;
      newGame();
    }

    else {
      lettersAlreadyGuessed.push(userGuess);
      $guessesLeft.innerHTML = guessesLeft;
      $lettersAlreadyGuessed.innerHTML = lettersAlreadyGuessed.join(", ")
      $userGuess.innerHTML = userGuess;
    }
    
    // if guessesLeft === 0...you lose
      // increase losses by 1
      // start a new game newGame()
    
    // add letter guessed to lettersAlreadyGuessed array (using .push())

    // display information to the page
      // write userGuess, computerGuess, guessesLeft, and lettersAlreadyGuessed to the page in their respective locations (which you created references to above)
      
}

// run newGame() to start game for the first time
newGame();
