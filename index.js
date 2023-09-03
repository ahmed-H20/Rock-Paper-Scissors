// getComputerChoice
/* return random ‘Rock’, ‘Paper’ or ‘Scissors’.*/
function getComputerChoice(){
    let comChoice = Math.floor(Math.random() * 3);

    if(comChoice == 0){
        return "Rock";
    }
    else if (comChoice == 1){
        return "Paper"
    }else{
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
  // your code here!
}
 
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));