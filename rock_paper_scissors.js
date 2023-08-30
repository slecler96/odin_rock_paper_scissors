console.log(game())

/*
Si tu veux du code plus générique, tu pourrais mettre tes 3 choix dans un tableau et écrire une fonction qui prend un élément au hasard du tableau :)
 */
function getComputerChoice() {
    let max = 3;
    let choice = Math.floor(Math.random() * max)+1;
    /*
    Fait toujours des comparaisons avec === plutôt que ===, le double égal peut faire des choses un peu bizarre
     */
    if (choice==1) {
        /*
         "Rock" est une constante, tu devrais la définir une fois pour toute en faisant un
         const ROCK = "Rock"
         puis réutiliser cela partout.
         Cela remplacera de potentielles erreurs de Rock qui devient Rok en erreur d'utilisation d'une variable non défini, que ton IDE devrait voir.
         */
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

    /*
    Une manière plus élégante de l'écrire serait
    while (![ROCK, PAPER, SCISSORS].includes(userChoice))
     */
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
            /*
            Tu te répètes beaucoup ici !
            Tu pourrais déjà commencer par sortir l'alert du switch non ?
             */
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
        /*
        Je te conseille d'utiliser des templates string pour cela, ça fait plus propre que d'utiliser des + partout
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
         */
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

    /*
    Tu répètes beaucoup "The score is ...", tu peux faire mieux je pense
     */
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