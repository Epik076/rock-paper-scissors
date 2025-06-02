console.log("Hello World");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
	let randomNumber = Math.floor(Math.random() * 3) + 1;
	let computerChoice = "";
	switch(randomNumber) {
		case 1: computerChoice = "Rock";
			break;
		case 2: computerChoice = "Paper";
			break;
		case 3: computerChoice = "Scissors";
			break;
	}
	return computerChoice;
}
	let computerChoice = getComputerChoice();
	console.log(computerChoice);

function getHumanChoice() {
	let humanChoice = prompt("Please input Rock, Paper or Scissors");	
	
	return humanChoice;
}
	let humanChoice = getHumanChoice();
	console.log(humanChoice);

function playRound(humanChoice, computerChoice) {
	humanChoice = humanChoice.toLowerCase();	
	computerChoice = computerChoice.toLowerCase();
	
	if(humanChoice === "paper" && computerChoice === "rock") {
		console.log("You win! Paper beats Rock");
		humanScore++;
	} else if(humanChoice === "rock" && computerChoice === "scissors") {
		console.log("You win! Rock beats Scissors");
		humanScore++;
	} else if(humanChoice === "scissors" && computerChoice === "paper") {
		console.log("You win! Scissors beats Paper");
		humanScore++;
	} else if(humanChoice === "paper" && computerChoice === "rock") {
		console.log("You lose! Rock beats Paper");
		computerScore++;
	} else if(humanChoice === "rock" && computerChoice === "Scissors") {
		console.log("You lose! Rock beats Scissors");
	  computerScore++;
  } else if(humanChoice === "scissors" && computerChoice === "paper") {
		console.log("You lose! Scissors beats Paper");
	  computerScore++;
	}
}
