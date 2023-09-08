// define computer choice using random number between 1 and 3
function getComputerChoice() {
    var choice = Math.random() * 3;
    if (choice <= 1) {
        choice = "Rock";
    } else if (choice <= 2) {
        choice = "Paper";
    } else {
        choice = "Scissors";
    };
    return choice;
}

let computerWinCounter = 0;
let playerWinCounter = 0;

//define the game of Rock, Paper, Scissors and return a greeting
function playRound(playerSelection, computerSelection) {
    greeting = "You chose " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + ". The computer chose " + computerSelection + ". ";
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return greeting + "You draw."
    }
    if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection == "Rock") {
            playerWinCounter = playerWinCounter + 1;
            return greeting + "You win."
        }
        else if (computerSelection == "Scissors") {
            computerWinCounter = computerWinCounter + 1;
            return greeting + "You lose."
        }
    }
    if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection == "Paper") {
            computerWinCounter = computerWinCounter + 1;
            return greeting + "You lose."
        }
        else if (computerSelection == "Scissors") {
            playerWinCounter = playerWinCounter + 1;
            return greeting + "You win."
        }
    }
    if (playerSelection.toLowerCase() == "scissors") {
        if (computerSelection == "Paper") {
            playerWinCounter = playerWinCounter + 1;
            return greeting + "You win."
        }
        else if (computerSelection == "Rock") {
            computerWinCounter = computerWinCounter + 1;
            return greeting + "You lose."
        }
    }
};

function game() {
    //round 1
    let playerSelection = prompt("Please type your choice: Rock, paper, scissors");
    computerSelection = getComputerChoice();
    console.log(computerSelection);
    alert(playRound(playerSelection, computerSelection));
    //round 2
    playerSelection = prompt("Please type your choice: Rock, paper, scissors");
    computerSelection = getComputerChoice();
    console.log(computerSelection);
    alert(playRound(playerSelection, computerSelection));
    //round 3
    playerSelection = prompt("Please type your choice: Rock, paper, scissors");
    computerSelection = getComputerChoice();
    console.log(computerSelection);
    alert(playRound(playerSelection, computerSelection));
    //round 4
    playerSelection = prompt("Please type your choice: Rock, paper, scissors");
    computerSelection = getComputerChoice();
    console.log(computerSelection);
    alert(playRound(playerSelection, computerSelection));
    //round 5
    playerSelection = prompt("Please type your choice: Rock, paper, scissors");
    computerSelection = getComputerChoice();
    console.log(computerSelection);
    alert(playRound(playerSelection, computerSelection));

    if (computerWinCounter > playerWinCounter) {
        alert("You have " + playerWinCounter + " points. The computer has " + computerWinCounter + " points. You lose. Refresh to play again.")
    }
    else if (playerWinCounter > computerWinCounter) {
        alert("You have " + playerWinCounter + " points. The computer has " + computerWinCounter + " points. You win. Refresh to play again.")
    }
    else {
        alert("You have " + playerWinCounter + " points. The computer has " + computerWinCounter + " points. You draw. Refresh to play again.")
    }
}

game();