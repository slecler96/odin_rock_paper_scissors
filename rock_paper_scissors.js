// console.log(game())




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
    // returns 1 when the player wins the round, -1 when he loses and 0 and the game is tie
    if (playerSelection == computerSelection) {
        tieRoundMessage()
        return 0;
    }
    else {
        switch (playerSelection) {
            case "Rock":
                if (computerSelection == "Paper") {
                    loseRoundMessage()
                    return -1;
                }
                else {
                    winRoundMessage()
                    return 1;
                }
            case "Paper":
                if (computerSelection == "Scissors") {
                    loseRoundMessage()
                    return -1;
                }
                else {
                    winRoundMessage()
                    return 1;
                }
            case "Scissors":
                if (computerSelection == "Rock") {
                    loseRoundMessage()
                    return -1;
                }
                else {
                    winRoundMessage()
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


function tieRoundMessage(){
    const outcomeMessage = document.querySelector('#roundOutcomeMessage');
    outcomeMessage.textContent = "Tie game";
}



function winRoundMessage(){
    const outcomeMessage = document.querySelector('#roundOutcomeMessage');
    outcomeMessage.textContent = "You win!";
}

function loseRoundMessage(){
    const outcomeMessage = document.querySelector('#roundOutcomeMessage');
    outcomeMessage.textContent = "You lose!";

}

function displayUpdatedScore(){
    const score = document.querySelector('#score').textContent = 
            "Player " + playerScore + " - " + computerScore + " Computer";
}


function updateScore(roundOutcome) {
    if (roundOutcome == 1) {
        playerScore += 1;
    }
    else if (roundOutcome == -1) {
        computerScore += 1;
    }
    console.log(computerScore)
}

console.log("start")
const buttons = document.querySelectorAll('button')

let computerScore = 0;
let playerScore = 0;
let roundNumber = 0;

buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        roundOutcome = playRound(button.id,getComputerChoice());
        roundNumber += 1;
        updateScore(roundOutcome);
        displayUpdatedScore(playerScore, computerScore);
        if (roundNumber == 5) {
            const gameOutcomeMessage = document.querySelector('#gameOutcomeMessage');
            if (playerScore > computerScore) {
                gameOutcomeMessage.textContent = 'The game is over : You win!';
            }
            else if (computerScore > playerScore) {
                gameOutcomeMessage.textContent = 'The game is over : Computer wins!';
            }
            else {
                gameOutcomeMessage.textContent = 'The game is over : It\'s a tie!';
            }
        };
    });
});

