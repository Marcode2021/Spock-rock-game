const playerScoreEl = document.querySelector("#playerScore");
const playerChoiceEl = document.querySelector("#playerChoice");
const computerScoreEl = document.querySelector("#computerScore");
const computerChoiceEl = document.querySelector("#computerChoice");
const resultText = document.querySelector("#resultText");

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

const choices = {
  rock: { name: "Rock", defeats: ["scissors", "lizard"] },
  paper: { name: "Paper", defeats: ["rock", "spock"] },
  scissors: { name: "Scissors", defeats: ["paper", "lizard"] },
  lizard: { name: "Lizard", defeats: ["paper", "spock"] },
  spock: { name: "Spock", defeats: ["scissors", "rock"] },
};

let computerChoice = "";
let playerChoice = "";

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

const whoWins = function () {
  const result = choices[playerChoice].defeats.includes(computerChoice);
  if (result) {
    resultText.textContent = "You Won!";
    resultText.style.color = "dodgerblue";
  } else if (playerChoice === computerChoice) {
    resultText.textContent = "Draw!";
    resultText.style.color = "black";
  } else {
    resultText.textContent = "You Losed!";
    resultText.style.color = "rgb(235, 43, 52)";
  }
};

const checkResult = function () {
  resetSelected();
  computerRandomChoice();
  displayComputerChoice();
  whoWins();
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
