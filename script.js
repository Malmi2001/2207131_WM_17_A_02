try {
  const dice1 = document.getElementById("dice1");
  const dice2 = document.getElementById("dice2");
  let player1Score = document.getElementById("player1_score");
  let player2Score = document.getElementById("player2_score");
  const playButton = document.getElementById("play");
  let player1 = document.getElementById("name1");
 let player2 = document.getElementById("name2");
  let player1TotalScore = 0;
  let player2TotalScore = 0;
  const timerElement = document.getElementById("timer");
  let timeLeft = 2 * 60; 
  let timer;

  function startTimer() {
    // Start the timer 
    timer = setInterval(function() {
      let minutes = Math.floor(timeLeft / 60);
      let seconds = timeLeft % 60;

      timerElement.innerHTML = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

      timeLeft--;

      if (timeLeft < 0) {
        clearInterval(timer);
        timerElement.innerHTML = "Time's up!";
       let winner = player1TotalScore > player2TotalScore ? player1 + " is the winner!" : player2 + " is the winner!";
       console.log(winner)
      }
    }, 1000);
  }

  function diceRoll() {
    let value1 = Math.floor(Math.random() * 6) + 1;
    let value2 = Math.floor(Math.random() * 6) + 1;

    // Update the HTML elements for the dice
    dice1.innerHTML = value1;
    dice2.innerHTML = value2;

    if (value1 > value2) {
      player1TotalScore++;
      player1Score.innerHTML = player1TotalScore;
      console.log(player1 + " " + player1Score.innerHTML);
    } else if (value2 > value1) {
      player2TotalScore++;
      player2Score.innerHTML = player2TotalScore;
      console.log(player2 + " " + player2Score.innerHTML);
    }

    if (player1TotalScore >= 100 || player2TotalScore >= 100) {
      clearInterval(timer);
      timerElement.innerHTML = player1TotalScore >= 100 ? player1 + " is the winner!" : player2+ " is the winner!";
    }
  }

  // Listen for the click on the playButton
  playButton.addEventListener("click", function() {
    diceRoll();
    startTimer(); // Start the timer when the play button is clicked
  });
} catch (error) {
  console.log("Error Occured", error.message);
}

