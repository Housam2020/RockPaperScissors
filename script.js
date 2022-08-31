function getComputerChoice() {
  //1 = rock, 2 = paper, 3 = scissors
  return Math.floor(Math.random() * 3 + 1);
}

function playRound() {
  const choice = parseInt(
    prompt("Choose 1 (rock), 2 (paper), or 3 (scissors)")
  );
  const computerChoice = getComputerChoice();

  if (choice === computerChoice) {
    return "tie!";
  } else if (choice === 1) {
    if (computerChoice === 2) {
      return "You lose! Paper beats rock";
    } else if (computerChoice === 3) {
      return "You win! Rock beats scissors";
    }
  } else if (choice === 2) {
    if (computerChoice === 1) {
      return "You win! Paper beats rock";
    } else if (computerChoice === 3) {
      return "You lose! Scissors beats paper";
    }
  } else if (choice === 3) {
    if (computerChoice === 1) {
      return "You lose! rock beats paper";
    } else if (computerChoice === 2) {
      return "You win! Scissors beats paper";
    }
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound());
  }
}

playGame();
