/*
Declare a computerPlay function representing the computer that randomly returns 'rock','paper', or 'scissors'
    Declare a computerChoice array of strings within the function containing 'rock', 'paper', and 'scissors
    Return a random string from the array using Math.floor(Math.random()*computerSelection.length)
*/

function computerPlay(){
    let computerChoice = ['rock','paper','scissors'];
    return computerChoice[Math.floor(Math.random()*computerChoice.length)];
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

/*
Declare a game function that plays 5 rounds of rock,paper,scissors and reports a winner/loser at the end with a score
    Declare two local variables within game function to keep score, userScore & computerScore
    Declare a for statement going through 5 iterations of the playRound function, updating the score within each iteration
        Declare a local variable, userInput, within the for statement to take the user's selection
        Declare a local variable, outcome, that executes playRound, taking variable userInput and function computerPlay as 
        respective parameters. 
        Print outcome to the user.
        Declare an if/if else statement that updates & prints score based on if outcome variable contains keyword 'win',
        'lose', or 'tie'
    Return the winner of the 5 round game based on who has the higher score
*/

function game(){
    let userScore = 0;
    let computerScore = 0;

    for(counter=0;counter<5;counter++){

        let userInput = prompt("Please enter your choice (rock/paper/scissors):");

        let outcome = playRound(userInput,computerPlay());

        console.log(outcome);

        if(outcome.indexOf("Win") > -1){
            userScore++;
            console.log("User: "+userScore+" Computer: "+computerScore);
        } else if (outcome.indexOf("Lose") > -1){
            computerScore++;
            console.log("User: "+userScore+" Computer: "+computerScore);
        }
    }

    if(userScore==computerScore){
        console.log("It's a tie! \n User: "+userScore+" Computer: "+computerScore);
    } else if (userScore>computerScore){
        console.log("Congrats, you won! \n User: "+userScore+" Computer: "+computerScore);
    } else {
        console.log("Sorry, you lost! \n User: "+userScore+" Computer: "+computerScore);
    }
}
    