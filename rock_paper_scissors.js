let computerChoice = getComputerChoice()
console.log(computerChoice)

function getComputerChoice() {
    let max = 3;
    let choice = Math.floor(Math.random() * max)+1;
    if (choice==1) {       
        return("Rock")
    }
    else if (choice==2) {
        return("Paper")
    }
    else {
        return("Scissors")
    }
}