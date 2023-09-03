// getComputerChoice
/* result =  random ‘Rock’, ‘Paper’ or ‘Scissors’.*/
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
    let com = computerSelection.toLowerCase()
    let player = playerSelection.toLowerCase()
    let pointer = player + com
    let result 
    
    switch(pointer){
        case "paperrock": result =  "player"
        break;
        case "paperpaper": result =  "draw"
        break;
        case "paperscissors": result =  "com"
        break;

        case "rockrock": result =  "draw"
        break;
        case "rockpaper": result =  "com"
        break;
        case "rockscissors": result =  "player"
        break;

        case "scissorsrock": result =  "com"
        break;
        case "scissorspaper": result =  "player"
        break;
        case "scissorsscissors": result =  "draw"
        break;
    }

    if (result === "player"){
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    else if (result === "com") {
        return `You Lose! ${playerSelection} beats ${computerSelection}`
    }
    else if (result === "draw"){
        return "Draw! You and Computer are equality"
    }

}
 
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));