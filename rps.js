let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
  let computerChoice;
  const choice = Math.floor(Math.random() * 3);

  if (choice === 0) {
    computerChoice = "rock";
  } else if (choice === 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  return computerChoice;
};

const getHumanChoice = () => {
  const humanChoice = prompt("Enter your Choice: ").toLowerCase();
  return humanChoice;
};

const playGame = () => {
  const playRound = (humanChoice, computerChoice) => {
    if (humanChoice === computerChoice) {
      console.log(`It's a TIE this round`);
    } else if (
      (humanChoice === "rock" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "rock")
    ) {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    } else {
      console.log(`You won! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    }
    return { humanScore, computerScore };
  };

  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  playRound(humanSelection, computerSelection);
};

for (let i = 0; i < 5; i++) {
  playGame();
}

const displayWinner = (humanScore, computerScore) => {
  humanScore > computerScore
    ? console.log(`The winner is Human!!!`)
    : computerScore > humanScore
    ? console.log(`The winner is Computer!!!`)
    : console.log(`TIE!!!`);
};

displayWinner(humanScore, computerScore);
