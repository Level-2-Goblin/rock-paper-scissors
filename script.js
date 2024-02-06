function getComputerChoice(min, max) {
  let choice = Math.floor(Math.random() * (max - min + 1) + min);
  if (choice == 1) {
    return "rock";
  } else if (choice == 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  let win = `You win! ${playerSelection} beats ${computerSelection}!`;
  let lose = `You lose! ${computerSelection} beats ${playerSelection}!`;
  let tie = `Tie round! You both chose ${playerSelection}!`;
  if (playerSelection == computerSelection) {
    return tie;
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return win;
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    return lose;
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return lose;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return win;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return lose;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return win;
  }
}

const playerSelection = prompt(
  "Choose rock, paper, or scissors: "
).toLowerCase();
const computerSelection = getComputerChoice(1, 3);
console.log(playRound(playerSelection, computerSelection));
