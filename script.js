/*
Declare a computerPlay function representing the computer that randomly returns 'rock','paper', or 'scissors'
    Declare a computerSelection array of strings within the function containing 'rock', 'paper', and 'scissors
    Return a random string from the array using Math.floor(Math.random()*computerSelection.length)
*/

function computerPlay(){
    let computerSelection = ['rock','paper','scissors'];
    return computerSelection[Math.floor(Math.random()*computerSelection.length)];
}

/*
Declare a playRound function that takes two parameters: computerSelection & userSelection
    Take both arguments and capitalize only the first letter
    Declare an if/if else/... beginning with a tie condition and following with each win/loss scenario for the player,
    returning the appropriate message based on a tie/win/loss.
*/

function playRound(userSelection,computerSelection){
    userSelection = userSelection.charAt(0).toUpperCase()+userSelection.toLowerCase().slice(1);
    computerSelection = computerSelection.charAt(0).toUpperCase()+computerSelection.toLowerCase().slice(1);
    let outcome = "";

    if (userSelection==computerSelection){
        return "It's a tie!";
    } else if (userSelection=="Rock" && computerSelection=="Scissors"){
        return "You Win! Rock beats Scissors";
    } else if (userSelection=="Paper" && computerSelection=="Rock"){
        return "You Win! Paper beats Rock!";
    } else if (userSelection=="Scissors" && (computerSelection=="Paper")){
        return "You Win! Scissors beats Paper!";
    } else if (userSelection=="Rock" && computerSelection=="Paper"){
        return "You Lose! Paper beats Rock!";
    } else if (userSelection=="Paper" && computerSelection=="Scissors"){
        return "You Lose! Scissors beats Paper!";    
    } else if (userSelection=="Scissors" && computerSelection=="Rock"){
        return "You Lose! Rock beats Scissors!";
    }
}