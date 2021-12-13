const playerScoreEl = document.querySelector("#playerScore");
const playerChoiceEl = document.querySelector("#playerChoice");
const computerScoreEl = document.querySelector("#computerScore");
const computerChoiceEl = document.querySelector("#computerChoice");
const resultText = document.querySelector("#resultText");
const resetBtn = document.querySelector(".reset-icon");

const playerRock = document.querySelector("#playerRock");
const playerPaper = document.querySelector("#playerPaper");
const playerScissors = document.querySelector("#playerScissors");
const playerLizard = document.querySelector("#playerLizard");
const playerSpock = document.querySelector("#playerSpock");

const computerRock = document.querySelector("#computerRock");
const computerPaper = document.querySelector("#computerPaper");
const computerScissors = document.querySelector("#computerScissors");
const computerLizard = document.querySelector("#computerLizard");
const computerSpock = document.querySelector("#computerSpock");

const allGameIcons = document.querySelectorAll(".far");

const jsConfetti = new JSConfetti();

const choices = {
  rock: { name: "Rock", defeats: ["scissors", "lizard"] },
  paper: { name: "Paper", defeats: ["rock", "spock"] },
  scissors: { name: "Scissors", defeats: ["paper", "lizard"] },
  lizard: { name: "Lizard", defeats: ["paper", "spock"] },
  spock: { name: "Spock", defeats: ["scissors", "rock"] },
};

let computerChoice = "";
let playerChoice = "";
let computerScoreNumber = 0;
let playerScoreNumber = 0;

// Passing player seelction value and styling icons

const resetSelected = function () {
  allGameIcons.forEach((icon) => {
    icon.classList.remove("selected");
  });
};

const computerRandomChoice = function () {
  const computerChoiceNumber = Math.floor(Math.random() * 5);
  const choicesArr = ["rock", "paper", "scissors", "lizard", "spock"];
  computerChoice = choicesArr[computerChoiceNumber];
};

// Add selected styling & computer choice
const displayComputerChoice = function () {
  switch (computerChoice) {
    case "rock":
      computerRock.classList.add("selected");
      computerChoiceEl.textContent = " --- Rock";
      break;
    case "paper":
      computerPaper.classList.add("selected");
      computerChoiceEl.textContent = " --- Paper";
      break;
    case "scissors":
      computerScissors.classList.add("selected");
      computerChoiceEl.textContent = " --- Scissors";
      break;
    case "lizard":
      computerLizard.classList.add("selected");
      computerChoiceEl.textContent = " --- Lizard";
      break;
    case "spock":
      computerSpock.classList.add("selected");
      computerChoiceEl.textContent = " --- Spock";
      break;

    default:
      break;
  }
};

const clearResult = function (resultContent, resultColor) {
  resultText.textContent = resultContent;
  resultText.style.color = resultColor;
};

const updateScore = function () {
  const result = choices[playerChoice].defeats.includes(computerChoice);
  if (result) {
    clearResult("You Won!", "dodgerblue");
    playerScoreNumber++;
    playerScoreEl.textContent = playerScoreNumber;
  } else if (playerChoice === computerChoice) {
    clearResult("It's a tie!", "black");
  } else {
    clearResult("You Losed!", "rgb(235, 43, 52)");
    computerScoreNumber++;
    computerScoreEl.textContent = computerScoreNumber;
  }

  if (playerScoreNumber === 10) {
    jsConfetti.addConfetti();
  }
};

const resetGame = function () {
  computerChoice = "Choice";
  playerChoice = "Choice";
  computerScoreNumber = 0;
  playerScoreNumber = 0;
  clearResult("Let's start the game", "black");
  resetSelected();
  playerChoiceEl.textContent = " --- Choice";
  computerChoiceEl.textContent = " --- Choice";
  playerScoreEl.textContent = playerScoreNumber;
  computerScoreEl.textContent = computerScoreNumber;
};

const checkResult = function () {
  resetSelected();
  computerRandomChoice();
  displayComputerChoice();
  updateScore();
};

const select = function (choice) {
  playerChoice = choice;
  checkResult();
  // Add 'selected' styling & playerChoice
  switch (playerChoice) {
    case "rock":
      playerRock.classList.add("selected");
      playerChoiceEl.textContent = " --- Rock";
      break;
    case "paper":
      playerPaper.classList.add("selected");
      playerChoiceEl.textContent = " --- Paper";
      break;
    case "scissors":
      playerScissors.classList.add("selected");
      playerChoiceEl.textContent = " --- Scissors";
      break;
    case "lizard":
      playerLizard.classList.add("selected");
      playerChoiceEl.textContent = " --- Lizard";
      break;
    case "spock":
      playerSpock.classList.add("selected");
      playerChoiceEl.textContent = " --- Spock";
      break;

    default:
      break;
  }
};

//////////////////////////////////////////
// Event listeners

resetBtn.addEventListener("click", resetGame);
