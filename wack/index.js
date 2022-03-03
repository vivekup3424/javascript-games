const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");
const button = document.getElementById("run");
const Score = document.getElementById("score");
const Result = document.getElementById("result");
let result = 0;
let randomPosition;
let currentTime = 60;
function randomSquare()
{
    squares.forEach((square) => {
        square.classList.remove("mole");
    })
    randomPosition = Math.floor(Math.random()*squares.length);
    let randomSquare = squares[randomPosition];
    randomSquare.classList.add("mole");
    if (result == 10) {
        Result.textContent = "You Won\n Congrats!!s";
    }

}
//randomSquare();
//setInterval(randomSquare,1000);
button.addEventListener('click',()=>setInterval(randomSquare,1000));

//mole.addEventListener('click',()=>{
//    result++;
//    Score.innerText = result;
//})
squares.forEach(square=>{
    square.addEventListener('mousedown',()=>{
        if(square.id = randomPosition)
        {
            result++;
            score.textContent = result;
        }
    })
})

function countdown()
{
    currentTime--;
    timeLeft.textContent = currentTime;
    if (currentTime == 0) {
        clearInterval(countdownTimerID,1000);
        clearInterval(randomSquare,1000);
        Result.textContent = "Game Over";
    }
}

let countdownTimerID = setinterval(countdown,1000);
