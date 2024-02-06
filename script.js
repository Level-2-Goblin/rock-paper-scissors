function getComputerChoice(min, max) {
  let choice = Math.floor(Math.random() * (max - min + 1) + min);
  if (choice == 1) {
    return "Rock";
  } else if (choice == 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice(1, 3);
