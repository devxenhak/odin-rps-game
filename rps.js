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
    computerChoice = "scissor";
  }
  return computerChoice;
};

getComputerChoice();

const getHumanChoice = () => {
  const humanChoice = prompt("Enter your Choice: ").toLowerCase();
  return humanChoice;
};

getHumanChoice();

const playRound = (humanChoice, computerChoice) => {};

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
