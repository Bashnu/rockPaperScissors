/*
Random rock/paper/scissors from computer'
User input for rock/paper/scissors, case insensitive
Rock beats scissors, scissors beats paper, paper beats rock
Report winner and loser at the end of game. Game function calls round function n times

*/
let message;
let playerChoice;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

function playRound(playerChoice,computerSelection){
if (playerChoice === computerSelection){
    message = "You tied.";
} else if (playerChoice === "Rock" && computerSelection === "Scissors") {
    message = "You Win! Rock beats Scissors."
    playerScore ++;
} else if (playerChoice === "Rock" && computerSelection === "Paper") {
    message = "You lose! Rock Loses to Paper."
    computerScore ++;
} else if (playerChoice === "Paper" && computerSelection === "Rock") {
    message = "You Win! Paper beats Rock."
    playerScore ++;
} else if (playerChoice === "Paper" && computerSelection === "Scissors") {
    message = "You lose! Paper Loses to Scissors."
    computerScore ++;
} else if (playerChoice === "Scissors" && computerSelection === "Paper") {
    message = "You Win! Scissors beats Paper."
    playerScore ++;
} else if (playerChoice === "Scissors" && computerSelection === "Rock") {
    message = "You lose! Scissors Loses to Rock."
    computerScore ++;
}
return message;

}

function getComputerChoice(){
    const moveSelections = ["Scissors", "Paper", "Rock"];
    computerSelection = moveSelections[Math.floor(Math.random() * moveSelections.length)];
    return computerSelection;
}

function playerSelection(){
    playerChoice = prompt("What's your move?");
    return playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
}

function playGame(){
    for (let i = 0; i < 4; i++){
        playerChoice = playerSelection();
        computerSelection = getComputerChoice(); 
        playRound(playerChoice,computerSelection);
  console.log("Your Score: " + playerScore + " Computer Score: " + computerScore);
    }
    if( playerScore > computerScore){
        console.log("You Win!");
    } else if (playerScore < computerScore) {
        console.log("You lose! :(")
    } else {
        console.log("You Tied!")
    }
}

playGame(); 
computerSelection = getComputerChoice();
playerChoice = playerSelection();

