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

let player;
let computer
let result;
let player_score = 0;
let com_score = 0;

function playRound(choice) {    
    player = choice;
    com = getComputerChoice().toLowerCase();    
    let pointer = player + com;
     
    
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
        console.log(`You Win! ${player} beats ${com}`)
    }
    else if (result === "com") {
        console.log(`You Lose! ${player} beats ${com}`)
    }
    else if (result === "draw"){
        console.log("Draw!")
        
    }

}

// const btn = document.querySelector("button");
// btn.addEventListener('click', playRound("paper"));
