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

//define the game of Rock, Paper, Scissors and return a greeting
function playRound(playerSelection, computerSelection) {
    greeting = "You chose " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + ". The computer chose " + computerSelection + ". ";
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return greeting + "You draw. Try again."
    }
    else if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection == "Paper") {
            return greeting + "You lose. Refresh to play again."
        }
        else if (computerSelection == "Scissors") {
            return greeting + "You win. Refresh to play again."
        }
    }
    else if (playerSelection.toLowerCase() == "scissors") {
        if (computerSelection == "Paper") {
            return greeting + "You win. Refresh to play again."
        }
        else if (computerSelection == "Rock") {
            return greeting + "You lose. Refresh to play again."
        }
        else if (playerSelection.toLowerCase() == "paper") {
            if (computerSelection == "Rock") {
                return greeting + "You win. Refresh to play again."
            }
            else if (computerSelection == "Scissors") {
                return greeting + "You lose. Refresh to play again."
            }
        }
    }
};

function game() {
    // have user enter their choice and confirm it in an alert
    let playerSelection = prompt("Please type your choice: Rock, paper, scissors");
    alert("You chose " + playerSelection);
    //announce game resolution
    computerSelection = getComputerChoice();
    alert(playRound(playerSelection, computerSelection));
    // have user enter their choice and confirm it in an alert
    playerSelection = prompt("Please type your choice: Rock, paper, scissors");
    alert("You chose " + playerSelection);
    //announce game resolution
    computerSelection = getComputerChoice();
    alert(playRound(playerSelection, computerSelection));
    // have user enter their choice and confirm it in an alert
    playerSelection = prompt("Please type your choice: Rock, paper, scissors");
    alert("You chose " + playerSelection);
    //announce game resolution
    computerSelection = getComputerChoice();
    alert(playRound(playerSelection, computerSelection));
    // have user enter their choice and confirm it in an alert
    playerSelection = prompt("Please type your choice: Rock, paper, scissors");
    alert("You chose " + playerSelection);
    //announce game resolution
    computerSelection = getComputerChoice();
    alert(playRound(playerSelection, computerSelection));
    // have user enter their choice and confirm it in an alert
    playerSelection = prompt("Please type your choice: Rock, paper, scissors");
    alert("You chose " + playerSelection);
    //announce game resolution
    computerSelection = getComputerChoice();
    alert(playRound(playerSelection, computerSelection));
}

game();