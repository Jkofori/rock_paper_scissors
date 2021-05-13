// Global variables to keep track of the score
let userScore = 0;
let computerScore = 0;

// Randomize computer's selection of rock/paper/scissors
function computerPlay(){
    let computerChoice = ['rock','paper','scissors'];
    return computerChoice[Math.floor(Math.random()*computerChoice.length)];
}

// Determine a winner based on user & computer input
function playRound(userSelection,computerSelection){

    userSelection = userSelection.charAt(0).toUpperCase()+userSelection.toLowerCase().slice(1);

    computerSelection = computerSelection.charAt(0).toUpperCase()+computerSelection.toLowerCase().slice(1);
    
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

// create round element to print each round's outcome to user
const round = document.createElement('p');
const greeting = document.getElementById('greeting');
round.textContent = '';
greeting.appendChild(round);

// create score element to print updated score to user
const score = document.createElement('p');
score.textContent = '';
greeting.appendChild(score);

// define restartButton element and hide for the end of each game
const restartButton = document.getElementById('restartButton');
restartButton.style.display='none';

// simulate each round after every user selection, restarting each game at 5
const btn = document.querySelector('.buttons');
btn.addEventListener('click', function(e){

    let outcome = playRound(e.target.getAttribute('id'),computerPlay());

    updateScore(outcome); // update score and print to user
    score.textContent = "User: "+userScore+" Computer: "+computerScore;

    if(userScore==5){
        round.textContent = 'Congrats! You Won!' // declare winner

        btn.style.display='none'; // hide play buttons & show restart button
        restartButton.style.display='';

    } else if(computerScore==5) {
        round.textContent = 'Sorry, You Lost!' // declare loser

        btn.style.display='none'; // hide play buttons & show restart button
        restartButton.style.display='';

    } else {
        round.textContent = outcome; // print outcome of the round 
    }
});

// hide restart button, reset score, and provide play buttons
restartButton.addEventListener('click', function(){
    btn.style.display='';
    restartButton.style.display = 'none';

    userScore=0;
    computerScore=0;

    round.textContent = '';
    score.textContent = "User: "+userScore+" Computer: "+computerScore;
});

function updateScore(outcome){
    if(outcome.indexOf("Win") > -1){
        userScore++;
    } else if (outcome.indexOf("Lose") > -1){
        computerScore++;
    } else {
    }
}
    