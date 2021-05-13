# rock_paper_scissors

This rock paper scissors will first be created for the console, with the user playing 5 rounds against a computer. It will then be updated to take user input and update the game as it's being played through the UI.

What I Learned:

- How to use pseudo code to break down programs into subproblems
- How to randomly choose an item from an array
- How to use indexOf() to see if a string contains a certain value

Pseudo Code:

Declare userScore and computerScore as global variables to track the game

Declare a computerPlay function representing the computer that randomly returns 'rock','paper', or 'scissors'
    Declare a computerChoice array of strings within the function containing 'rock', 'paper', and 'scissors
    Return a random string from the array using Math.floor(Math.random()*computerSelection.length)

Declare a playRound function that takes two parameters: computerSelection & userSelection
    Take both arguments and capitalize only the first letter
    Declare an if/if else/... beginning with a tie condition and following with each win/loss scenario for the player,
    returning the appropriate message based on a tie/win/loss.

Declare two elements, 'round' and 'score' to track user input and update    each round's outcome

Declare a restart button element and hide it, so that it appears at the end of each game once someone gets to 5 wins