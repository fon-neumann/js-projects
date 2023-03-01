const buttons = document.querySelectorAll('.button');
const resultsDiv = document.querySelector('#results');
const scoreDiv = document.querySelector('#score');
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let answer;
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      answer = "rock";
      break;
    case 1:
      answer = "paper";
      break;
    case 2:
      answer = "scissors";
      break;
  }
  return answer;
}

function playRound(playerSelection) {
  const computerSelection = getComputerChoice();
  let result;

  switch (playerSelection) {
    case "rock":
      switch (computerSelection) {
        case "rock":
          result = "Draw";
          break;
        case "paper":
          result = "You lose";
          computerScore++;
          break;
        case "scissors":
          result = "You win";
          playerScore++;
          break;
      }
      break;
    case "paper":
      switch (computerSelection) {
        case "rock":
          result = "You win";
          playerScore++;
          break;
        case "paper":
          result = "Draw";
          break;
        case "scissors":
          result = "You lose";
          computerScore++;
          break;
      }
      break;
    case "scissors":
      switch (computerSelection) {
        case "rock":
          result = "You lose";
          computerScore++;
          break;
        case "paper":
          result = "You win";
          playerScore++;
          break;
        case "scissors":
          result = "Draw";
          break;
      }
      break;
  }

  resultsDiv.textContent = `You chose ${playerSelection}, computer chose ${computerSelection}. ${result}`;
  scoreDiv.textContent = `Score: Player ${playerScore} - ${computerScore} Computer`;

  if (playerScore === 5 || computerScore === 5) {
    if (playerScore > computerScore) {
      alert("You win the game!");
    } else {
      alert("You lose the game.");
    }
    resetGame();
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  scoreDiv.textContent = `Score: Player ${playerScore} - ${computerScore} Computer`;
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    playRound(button.dataset.selection);
  });
});

 