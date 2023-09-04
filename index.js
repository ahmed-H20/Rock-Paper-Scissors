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

function playRound() {
    player = prompt("Enter your choice (paper, rock, scissors): ").toLowerCase();
    com = getComputerChoice().toLowerCase()    
    let pointer = player + com
     
    
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

function game(){
    
    // calculate the points
    for (let i = 0; i < 5; i++){        
        playRound();
        if (result === "player"){
            player_score++;
        }
        else if(result === "com"){
            com_score++;
        }
    }
    // check the winner and print him    
    if (player_score > com_score){
        console.log("congratulations! You are the Winner :)")
        return;
    }
    else if (player_score < com_score){
        console.log("You are Losser :(")
        return;
    }else{
        console.log("you and computer equaly play one more round to ditermint the winner")
        return;
    }  
    
}
 

game()
