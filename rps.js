let HumanScore;
let computerScore;

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

const playRound = (humanChoice, computerChoice) => {
  if (humanChoice === computerChoice) {
    console.log(`It's a TIE`);
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
  } else {
    console.log(`You won! ${humanChoice} beats ${computerChoice}`);
  }
};

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
