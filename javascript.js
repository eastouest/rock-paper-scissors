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

//set maximum points and starting count for each player
let max_points = 5;
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

//define game end (i.e. when any player reaches 5 points)
function checkGameEnd() {
    if (computerWinCounter == max_points || playerWinCounter == max_points) {
        if (computerWinCounter > playerWinCounter) {
            alert("You have " + playerWinCounter + " points. The computer has " + computerWinCounter + " points. You lose. Refresh to play again.");
            result.textContent = "You have " + playerWinCounter + " points. The computer has " + computerWinCounter + " points. You lose. Refresh to play again.";
        }
        else if (playerWinCounter > computerWinCounter) {
            alert("You have " + playerWinCounter + " points. The computer has " + computerWinCounter + " points. You win. Refresh to play again.");
            result.textContent = "You have " + playerWinCounter + " points. The computer has " + computerWinCounter + " points. You win. Refresh to play again.";
        }
    }
}

//create results field
let result = document.createElement('div');
result.textContent = "The result will be displayed here.";
let result_field = document.createElement('div');
container.style = "width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; margin-top: 20px;";
result_field.style = "border: 1px solid black; width: 300px; height: 100px; margin: 0 auto; text-align: center; padding-top: 40px; font-size: 20px; display: block;";
container.appendChild(result_field);
result_field.appendChild(result);

//define event listeners for buttons to play the game, display results and announce winner
let buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        computerSelection = getComputerChoice();
        alert(playRound(playerSelection, computerSelection));
        result.textContent = "Computer has " + computerWinCounter + " points. You have " + playerWinCounter + " points.";
        checkGameEnd();
    });
});

