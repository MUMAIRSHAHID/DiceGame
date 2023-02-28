// Get the HTML elements
var score1 = document.getElementById("score-1");
var score2 = document.getElementById("score-2");
var roll1 = document.getElementById("roll-1");
var roll2 = document.getElementById("roll-2");
var newGame = document.getElementById("new-game");
var resultBtn = document.getElementById("result");
var resultMessage = document.getElementById("result-message");

// Set the initial scores
var scorePlayer1 = 0;
var scorePlayer2 = 0;

// Add event listeners to the roll dice buttons
roll1.addEventListener("click", function() {
  var dice = Math.floor(Math.random() * 6) + 1;
  scorePlayer1 += dice;
  score1.innerHTML = scorePlayer1;
});

roll2.addEventListener("click", function() {
  var dice = Math.floor(Math.random() * 6) + 1;
  scorePlayer2 += dice;
  score2.innerHTML = scorePlayer2;
});

// Add event listener to the new game button
newGame.addEventListener("click", function() {
  scorePlayer1 = 0;
  scorePlayer2 = 0;
  score1.innerHTML = 0;
  score2.innerHTML = 0;
  resultMessage.innerHTML = "";

  // Enable the roll dice buttons
  roll1.disabled = false;
  roll2.disabled = false;
});

// Add event listener to the result button
resultBtn.addEventListener("click", function() {
  // Disable the roll dice buttons
  roll1.disabled = true;
  roll2.disabled = true;

  // Determine the winner
  var winner = "";
  if (scorePlayer1 > scorePlayer2) {
    winner = "Player 1";
  } else if (scorePlayer2 > scorePlayer1) {
    winner = "Player 2";
  } else {
    winner = "It's a tie";
  }

  // Show the result message
  resultMessage.innerHTML = "The winner is " + winner;

  // Disable the result button
  
});
