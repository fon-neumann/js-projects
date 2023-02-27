function getComputerChoice() {
    let answer
    switch (Math.round(Math.random() * 2)) {
      case 0:
        answer = "rock";
        break;
      case 1:
        answer = "paper";
        break;
      case 2:
        answer = "scissors";
    }
    return answer
  }
  
  function oneRound(playerSelection, computerSelection) {
    switch (playerSelection) {
      case "rock":
        switch (computerSelection) {
          case "rock":
            return "Draw";
          case "paper":
            return "You lose";
          case "scissors":
            return "You win";
        }
      case "paper":
        switch (computerSelection) {
          case "rock":
            return "You win";
          case "paper":
            return "Draw";
          case "scissors":
            return "You lose";
        }
      case "scissors":
        switch (computerSelection) {
          case "rock":
            return "You lose";
          case "paper":
            return "You win";
          case "scissors":
            return "Draw";
        }
    }
  }
  
  function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
      let computerSelection = getComputerChoice()
      let playerSelection = prompt("Enter your bid").toLowerCase()
      let result = oneRound(playerSelection, computerSelection)
      console.log(result)
      if (result === "You win") {
        playerScore++;
      } else if (result === "You lose") {
        computerScore++;
      }
    }
    if (playerScore > computerScore) {
      return "You win the game!";
    } else if (playerScore < computerScore) {
      return "You lose the game.";
    } else {
      return "It's a tie!";
    }
  }
  
  console.log(game())