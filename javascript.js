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

let playerSelection = prompt("Please type your choice: Rock, paper, scissors")
alert("You chose " + playerSelection)

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return "You draw. Try again"
    }
    else if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection == "Paper") {
            return "You lose. Refresh to play again."
        }
        else if (computerSelection == "Scissors") {
            return "You win. Refresh to play again."
        }
    }
    else if (playerSelection.toLowerCase() == "scissors") {
        if (computerSelection == "Paper") {
            return "You win. Refresh to play again."
        }
        else if (computerSelection == "Rock") {
            return "You lose. Refresh to play again."
        }
        else if (playerSelection.toLowerCase() == "paper") {
            if (computerSelection == "Rock") {
                return "You win. Refresh to play again."
            }
            else if (computerSelection == "Scissors") {
                return "You lose. Refresh to play again."
            }
        }
    }
};

computerSelection = getComputerChoice();
playerSelection = "rock";
playRound(playerSelection, computerSelection)