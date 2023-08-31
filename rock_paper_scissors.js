
/*
Constants
*/
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const MAXSCORE = 5;


const playerButtons = document.querySelectorAll('.player_buttons button');
const roundOutcomeMessage = document.querySelector('.roundOutcomeMessage');
const gameOutcomeMessage = document.querySelector('.gameOutcomeMessage');
const restartButton = document.querySelector('#restartButton');

/*
Display the score required to win
*/
const maxScorehtml = document.querySelector('#maxScore'); 
maxScorehtml.textContent = MAXSCORE;

/*
Reload the web page when the user clicks on the restart button
*/
restartButton.addEventListener('click',() => location.reload());


/*
Scores
*/
let playerScore = 0;
let computerScore=0;


/*
Activate player buttons
*/
playerButtons.forEach(button => {button.addEventListener('click', getPlayerSelection)});


/*
Play a round of rock paper scissors, display the winner and update the score.
Then it checks if the player or the computer wins the game by reaching the maximum score
*/
function playRound(playerSelection, computerSelection) {
    // returns 1 when the player wins the round, -1 when he loses and 0 and the game is tie
    let result = 0;
    if (playerSelection === computerSelection) {
        tieRoundMessage()
        result = 0;
    }
    else {
        switch (playerSelection) {
            case ROCK:
                if (computerSelection === PAPER) {
                    result = -1;
                    break;
                }
                else {
                    result = 1;
                    break;
                }
            case PAPER:
                if (computerSelection === SCISSORS) {
                    result = -1;
                    break;
                }
                else {
                    result = 1;
                    break;
                }
            case SCISSORS:
                if (computerSelection === ROCK) {
                    result = -1;
                    break;
                }
                else {
                    result = 1;
                    break;
                }   
        }
        result === 1 ? winRoundMessage(playerSelection,computerSelection) : loseRoundMessage(playerSelection,computerSelection)
    }

    
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
    const computerButton = document.querySelector('#'+computerChoice+'Computer');  
    computerButton.style.background = 'red';
    setTimeout(() => {
        computerButton.style.background = '';
      }, 500);
    return computerChoice
}
    

/*
Check is the player or the computer reached the maximum score and wins the game
*/
function checkWinner() {
    if (playerScore === MAXSCORE || computerScore === MAXSCORE) {
        let winner = (computerScore > playerScore) ? 'computer' : 'player';
        updateWinner(winner);
      }
}

/*
Check is the player or the computer reached the maximum score and wins the game
*/
function updateWinner(winner) {
    const gameOutcomeMessage = document.querySelector('.gameOutcomeMessage');
    let message = `${winner} wins! Click restart to play again.`;
    showText(message, 0, 50)
    playerButtons.forEach(button => { button.removeEventListener('click', getPlayerSelection) });
}

/*
Show text letter by letter with a specified time interval
*/
function showText(message, index, interval) {   
    const gameOutcomeMessage = document.querySelector('.gameOutcomeMessage');
    if (index < message.length) {
        gameOutcomeMessage.append(message[index++]);
      setTimeout(function () { showText(message, index, interval); }, interval);
    }
}

/*
Message displayed when the round is tied
*/
function tieRoundMessage(){
    const outcomeMessage = document.querySelector('.roundOutcomeMessage');
    outcomeMessage.textContent = "Tie game";
}


/*
Message displayed when the player wins the round
*/
function winRoundMessage(playerSelection, computerSelection){
    const outcomeMessage = document.querySelector('.roundOutcomeMessage');
    if (playerSelection === SCISSORS) {
        outcomeMessage.textContent = `${playerSelection} beat ${computerSelection}.  You win!`;
    }
    else {
        outcomeMessage.textContent = `${playerSelection} beats ${computerSelection}.  You win!`;
    }   
}

/*
Message displayed when the player loses the round
*/
function loseRoundMessage(playerSelection, computerSelection){
    const outcomeMessage = document.querySelector('.roundOutcomeMessage');
    if (computerSelection === SCISSORS) {
        outcomeMessage.textContent = `${computerSelection} beat ${playerSelection}.  You lose!`;
    }
    else {
        outcomeMessage.textContent = `${computerSelection} beats ${playerSelection}.  You lose!`;
    }
    

}


/*
Update the score after each round
*/
function updateScore(roundOutcome) {
    if (roundOutcome == 1) {
        playerScore += 1;
    }
    else if (roundOutcome == -1) {
        computerScore += 1;
    }
    const score = document.querySelector('.score p').textContent = `Player ${playerScore} - ${computerScore} Computer`
}

