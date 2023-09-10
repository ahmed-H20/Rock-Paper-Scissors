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
let com_photo,player_photo;

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
        p_result.textContent = `You Win! ${player} beats ${com}`;        
        playerscore.textContent = ++player_score;

    }
    else if (result === "com") {
        p_result.textContent =`You Lose! ${player} beats ${com}`;
        computerscore.textContent = ++com_score;
    }
    else if (result === "draw"){
        p_result.textContent = "Draw!";        
    }

    if (player_score == 5){
        p_result.textContent = `You are the Winner! :)`;
        return;
    }
    else if(com_score == 5){
        p_result.textContent = `You are Loser! :(`;
        return
    }

}

function photoSelector(choice){
    if(choice == 'rock'){
        return 'rock.png';
    }
    else if(choice == 'paper'){
        return 'paper.png';
    }
    else if(choice == 'scissors'){
        return 'scissors.png';
    }
}

const p_result = document.querySelector(".result");
const playerscore = document.querySelector('.playerscore');
const computerscore = document.querySelector('.computerscore');



