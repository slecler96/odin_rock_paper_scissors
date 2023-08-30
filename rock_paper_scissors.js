const ROCK = "rock"
const PAPER = "paper"
const SCISSORS = "scissors"


const playerButtons = document.querySelectorAll('.player_buttons button')
const computerButtons = document.querySelectorAll('.computer_buttons button')
const roundOutcomeMessage = document.querySelector('.roundOutcomeMessage')
const currentScore = document.querySelector('.score')
const gameOutcomeMessage = document.querySelector('.gameOutcomeMessage')
const restartButton = document.querySelector('#restartButton')

restartButton.addEventListener('click',() => location.reload());

let playerScore = 0;
let computerScore=0;

playerButtons.forEach(button => { button.addEventListener('click', getPlayerSelection) });



function playRound(playerSelection, computerSelection) {
    // returns 1 when the player wins the round, -1 when he loses and 0 and the game is tie
    let result
    console.log(computerSelection)
    if (playerSelection == computerSelection) {
        tieRoundMessage()
        result = 0;
    }
    else {
        switch (playerSelection) {
            case ROCK:
                if (computerSelection == PAPER) {
                    result = -1;
                }
                else {
                    result = 1;
                }
            case PAPER:
                if (computerSelection == SCISSORS) {
                    result = -1;
                }
                else {
                    result = 1;
                }
            case SCISSORS:
                if (computerSelection == ROCK) {
                    result = -1;
                }
                else {
                    result = 1;
                }   
        }
    }
    console.log("result"+result)
    result === 1 ? winRoundMessage() : loseRoundMessage()
    
    updateScore(result)
    checkWinner()
}


/* 
Get the choice of the user, highlight the corresponding button in green and call getComputerChoice 
*/
function getPlayerSelection(event) {
    let userChoice = event.target.id;
    event.target.style.background = 'green';
    let computerChoice = getComputerChoice()
    setTimeout(() => {
        event.target.style.background = '';
      }, 500);
    playRound(userChoice, computerChoice) ;


}

/*
Get the choice of the computer (random choice) and highlight the corresponding button in red
*/
function getComputerChoice(event) {
    let computerChoices = [ROCK, PAPER, SCISSORS];
    let max = 3;
    let choice = Math.floor(Math.random() * max);
    let computerChoice = computerChoices[choice]
    console.log("comp choice "+computerChoice)
    const computerButton = document.querySelector('#'+computerChoice+'Computer');  
    computerButton.style.background = 'red';
    setTimeout(() => {
        computerButton.style.background = '';
      }, 500);
    return computerChoice
}
    


function checkWinner() {
    if (playerScore === 5 || computerScore === 5) {
        let win = (compScore > playerScore) ? 'computer' : 'player';
        updateWinner(win);
      }
}

/*




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

*/
function tieRoundMessage(){
    const outcomeMessage = document.querySelector('.roundOutcomeMessage');
    outcomeMessage.textContent = "Tie game";
}



function winRoundMessage(){
    const outcomeMessage = document.querySelector('.roundOutcomeMessage');
    outcomeMessage.textContent = "You win!";
}

function loseRoundMessage(){
    const outcomeMessage = document.querySelector('.roundOutcomeMessage');
    outcomeMessage.textContent = "You lose!";

}



function updateScore(roundOutcome) {
    if (roundOutcome == 1) {
        playerScore += 1;
    }
    else if (roundOutcome == -1) {
        computerScore += 1;
    }
    console.log("score"+playerScore)
    const score = document.querySelector('.score p').textContent = `Player ${playerScore} - ${computerScore} Computer`
}

/* console.log("start")
const buttons = document.querySelectorAll('button')



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
 */