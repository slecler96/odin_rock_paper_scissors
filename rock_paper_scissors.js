console.log(game())


function getComputerChoice() {
    let max = 3;
    let choice = Math.floor(Math.random() * max)+1;
    if (choice==1) {       
        return "Rock";
    }
    else if (choice==2) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}


function getPlayerSelection() {
    let userChoice = prompt("Choose Rock, Paper or Scissors: ").toLowerCase();
    console.log(userChoice)

    while ((userChoice != "rock") && (userChoice != "paper") && (userChoice != "scissors")) {
        userChoice = prompt(userChoice + " is not valid. Please pick: rock or paper or scissors");
    }

    if (userChoice == "rock") {       
        return "Rock";
    }
    else if (userChoice == "paper") {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        alert("Tie : you both played "+playerSelection);
        return 0;
    }
    else {
        switch (playerSelection) {
            case "Rock":
                if (computerSelection == "Paper") {
                    alert("You lose! Paper beats Rock");
                    return -1;
                }
                else {
                    alert("You win! Rock beats Scissors");
                    return 1;
                }
            case "Paper":
                if (computerSelection == "Scissors") {
                    alert("You lose! Scissors beats Paper");
                    return -1;
                }
                else {
                    alert("You win! Paper beats Rock");
                    return 1;
                }
            case "Scissors":
                if (computerSelection == "Rock") {
                    alert("You lose! Rock beats Scissors");
                    return -1;
                }
                else {
                    alert("You win! Scissors beats Paper");
                    return 1;
                }   
        }
    }
}

function game() {
    let roundNumber = parseInt(prompt("Choose the number of rounds: "));

    while (isNaN(roundNumber) || roundNumber < 0) {
        roundNumber = prompt(roundNumber + " is not a valid number. Please enter a positive number");
    }

    let scoreRound = 0;
    let scorePlayer = 0;
    let scoreComputer = 0;

    for (let round = 1; round <= roundNumber; round++) { 
        let computerSelection = getComputerChoice()
        let playerSelection = getPlayerSelection()
        scoreRound = playRound(playerSelection,computerSelection)
        if (scoreRound == 1) {
            scorePlayer += 1;
        }
        else if (scoreRound == -1) {
            scoreComputer += 1
        }
    }

    if (scorePlayer == scoreComputer) {
        return "The game is tie. The score is "+scorePlayer + "-" + scoreComputer;
    }
    else if (scorePlayer > scoreComputer) {
        return "You win! The score is " + scorePlayer + "-" + scoreComputer;
    }
    else {
        return "You lose! The score is " + scorePlayer+-"-" + scoreComputer;
    }
}