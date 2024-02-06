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

function playGame() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt(
      "Choose rock, paper, or scissors: "
    ).toLowerCase();
    const computerSelection = getComputerChoice(1, 3);
    const result = playRound(playerSelection, computerSelection);
    console.log(result);

    if (result.startsWith("You win!")) {
      playerScore++;
    } else if (result.startsWith("You lose!")) {
      computerScore++;
    }
  }

  if (playerScore > computerScore) {
    console.log("YOU WIN THE GAME!");
  } else if (playerScore < computerScore) {
    console.log("YOU LOST THE GAME!");
  } else {
    console.log("Tie game!");
  }
}

console.log(playGame());
