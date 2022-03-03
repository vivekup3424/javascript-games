const cardArray = [
    {
        name: "fries",
        img:  "./images/fries.png",
    },
    {
        name: "cheeseburger",
        img:  "./images/cheeseburger.png",
    },
    {
        name: "hotdog",
        img:  "./images/hotdog.png",
    },
    {
        name: "ice-cream",
        img:  "./images/ice-cream.png",
    },
    {
        name: "milkshake",
        img:  "./images/milkshake.png",
    },
    {
        name: "pizza",
        img:  "./images/pizza.png",
    },
    {
        name: "fries",
        img:  "./images/fries.png",
    },
    {
        name: "cheeseburger",
        img:  "./images/cheeseburger.png",
    },
    {
        name: "hotdog",
        img:  "./images/hotdog.png",
    },
    {
        name: "ice-cream",
        img:  "./images/ice-cream.png",
    },
    {
        name: "milkshake",
        img:  "./images/milkshake.png",
    },
    {
        name: "pizza",
        img:  "./images/pizza.png",
    },
    {
        name: "blank",
        img:  "./images/blank.png",
    },
    {
        name: "white",
        img:  "./images/white.png",
    }

]

for (let i = cardArray.length-2 -1; i > 0; i--) {    //to shuffle an array
    let j = Math.floor(Math.random() * i)
    let k = cardArray[i]
    cardArray[i] =cardArray[j]
    cardArray[j] = k
}

const gridDisplay = document.querySelector('#grid');
const cardsChosen = []
const result = document.getElementById("result");
let score = 0;
const cardsChosenID = [];

function createBoard()
{
    for(let i = 0;i<12;i++)
    {
        const card = document.createElement('img');

        card.setAttribute('src',cardArray[12]['img']);
        card.setAttribute('data-id',i);
        card.addEventListener('click',flipcard);
        gridDisplay.appendChild(card);
        console.log(card);
    }

    console.log("I am feeling heavy. Purrr ahh this gas problem,PURRR AhhhhH!\n");
}

function flipcard()
{
    const cardID = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardID]['name']);
    cardsChosenID.push(cardID);
    this.setAttribute("class",'card');
    this.setAttribute('src',cardArray[cardID]['img']);
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch,500)
    }
    console.log(cardID);
}

function checkMatch()
{   const cards = document.querySelectorAll("img");
    if (cardsChosen[0]==cardsChosen[1]) {
        cards[cardsChosenID[0]].setAttribute('src',cardArray[13]['img']);
        cards[cardsChosenID[1]].setAttribute('src',cardArray[13]['img']);
        cards[cardsChosenID[0]].removeEventListener('click',flipcard);
        cards[cardsChosenID[1]].removeEventListener('click',flipcard);
        score++;
        result.innerText = score;
    }
    else if(cardsChosen[0] != cardsChosen[1])
    {
        cards[cardsChosenID[0]].setAttribute('src',cardArray[12]['img']);
        cards[cardsChosenID[1]].setAttribute('src',cardArray[12]['img']);
        score--;
        result.innerText = score;
    }
    cardsChosen.splice(0,cardsChosen.length);
    cardsChosenID.splice(0,cardsChosenID.length);
}

createBoard();




















