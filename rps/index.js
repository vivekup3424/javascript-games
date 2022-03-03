const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const result = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
const choices = ['rock','paper','scissor'];
function generateComputerChoice()
{
    const randomNumber = Math.floor(Math.random()*(possibleChoices.length));
    computerChoice = choices[randomNumber];
    computerChoiceDisplay.innerText = computerChoice;
}
function printResult()
{
    if ((computerChoice == 'rock' && userChoice == 'scissor') || (computerChoice == 'paper' && userChoice == 'rock')
    || (computerChoice == 'scissor' && userChoice == 'paper')) {
        result.innerText = 'You Lose!'
    }
    else if ((computerChoice == 'rock' && userChoice == 'rock') || (computerChoice == 'paper' && userChoice == 'paper')
    || (computerChoice == 'scissor' && userChoice == 'scissor')) {
        result.innerText = "It's a draw!";
    }
    else
    {
        result.innerText = "You won!";
    }
}
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e)=>{
   userChoice = e.target.id;
   userChoiceDisplay.innerText = userChoice;
   generateComputerChoice();
   printResult();
}))