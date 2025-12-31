let humanScore = 0;
let computerScore = 0;
let humanChoice = "";
let computerChoice = "";
let result = "";
let run5Times = 1;

let history = document.querySelector(".history");
let totalScore = document.querySelector(".score");

// Computer Input
function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3 + 1);
  if (randomNum === 1) {
    computerChoice = "ROCK";
  } else if (randomNum === 2) {
    computerChoice = "PAPER";
  } else {
    computerChoice = "SCISSORS";
  }
}

// Result
function addHistory(result) {
  let addHist = document.createElement("li");
  addHist.textContent = `${result}: ${humanChoice} vs ${computerChoice}`;
  history.appendChild(addHist);
}

// Human vs Computer
function playRound() {
  humanChoice = humanChoice.toUpperCase();
  if (
    (humanChoice === "ROCK" && computerChoice === "SCISSORS") ||
    (humanChoice === "PAPER" && computerChoice === "ROCK") ||
    (humanChoice === "SCISSORS" && computerChoice === "PAPER")
  ) {
    totalScore.textContent = humanScore += 1;
    addHistory("WIN");
  } else if (
    (humanChoice === "ROCK" && computerChoice === "ROCK") ||
    (humanChoice === "PAPER" && computerChoice === "PAPER") ||
    (humanChoice === "SCISSORS" && computerChoice === "SCISSORS")
  ) {
    addHistory("DRAW");
  } else {
    computerScore += 1;
    addHistory("LOSS");
  }
}

let gameRun = 0;
// run 5 times then show result
function result5run() {
  let resulText = "";
  if (run5Times % 5 === 0) {
    gameRun++;
    if (humanScore > computerScore) {
      resulText = `Game ${gameRun}: You WIN!`;
    } else if (humanScore < computerScore) {
      resulText = `Game ${gameRun}: You MOTHERF**KING LOSER!`;
    } else {
      resulText = `Game ${gameRun}: Its a DRAW`;
    }
    const h1 = document.querySelector("h1");
    const displayresult = document.createElement("div");
    displayresult.textContent = `${resulText}`;
    displayresult.classList.add("displayresult");
    h1.after(displayresult);

  } else if ((run5Times - 1) % 5 === 0 && run5Times > 5) {
    const displayresultText = document.querySelector(".displayresult");
    displayresultText.remove();
  }
}
// play the game
function playGame() {
  let computerPlay = getComputerChoice;
  playRound(computerPlay());
  result5run();
}

// human Input
const div = document.querySelector("div");

div.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    // console.history(event.target.outerHTML);
    // console.history(event.target.textContent);
    humanChoice = event.target.textContent;
    playGame();
    run5Times++;
  }
});
