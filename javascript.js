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

function getHumanChoice() {
	let humanChoice = prompt("Please input Rock, Paper or Scissors");	
	
	return humanChoice;
}

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
	} else if(computerChoice === "paper" && humanChoice === "rock") {
		console.log("You lose! Rock beats Paper");
		computerScore++;
	} else if(computerChoice === "rock" && humanChoice === "Scissors") {
		console.log("You lose! Rock beats Scissors");
	  computerScore++;
  } else if(computerChoice === "scissors" && humanChoice === "paper") {
		console.log("You lose! Scissors beats Paper");
	  computerScore++;
	} else if(computerChoice === humanChoice) {
		console.log("It's a draw!");
		computerScore++;
		humanScore++;
	}
}

function playGame() {
	for(let i = 0; i < 5; i++) {
		let computerChoice = getComputerChoice();
		let humanChoice = getHumanChoice();
		playRound(humanChoice, computerChoice);
	}
	if(humanScore > computerScore) {
		console.log("The Winner is the human!");
	} else if(humanScore < computerScore) {
		console.log("The Winner is the computer!");
	} else if(humanScore === computerScore) {
		console.log("It's a tie!");
	}
}

playGame();
