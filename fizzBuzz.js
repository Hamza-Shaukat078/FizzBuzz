
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3); 
    return choices[randomIndex];
}


function getHumanChoice() {
    let choice = prompt("Enter Rock, Paper, or Scissors:").toLowerCase();
    
   
    while (!["rock", "paper", "scissors"].includes(choice)) {
        choice = prompt("Invalid choice! Please enter Rock, Paper, or Scissors:").toLowerCase();
    }

    return choice;
}


let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
    console.log('You chose: ' + humanChoice);
    console.log('Computer chose: ' + computerChoice);

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        console.log('You win! '+ humanChoice + ' beats ' + computerChoice);
        humanScore++;
    } else {
        console.log('You lose! '+ computerChoice + ' beats ' + humanChoice);
        computerScore++;
    }
}


function playGame() {
    humanScore = 0; 
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        console.log('Round '+ (i + 1));
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log('Score: You ' + humanScore + ' - ' + computerScore + ' Computer\n');
    }

   
    if (humanScore > computerScore) {
        console.log(" Congratulations! You won the game! ");
    } else if (humanScore < computerScore) {
        console.log(" You lost the game. Better luck next time!");
    } else {
        console.log("It's a draw! Well played!");
    }
}


playGame();
