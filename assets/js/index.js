let cards = [];
let sumOfTwoCards = 0;

let cardsEl = document.getElementById("cards");
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum");

let playButtonEl = document.getElementById("play");
let newCardButtonEl = document.getElementById("new-card");

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if(randomNumber === 1) {
        return 11;
    }
    else if (randomNumber > 11) {
        return 10;
    }
    else {
        return randomNumber;
    }
}

function startGame() {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sumOfTwoCards = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sumOfTwoCards
    if (sumOfTwoCards <= 20) {
        messageEl.textContent = "Do you want to draw a new card? 🙂";
        disablePlayButton();
    }
    else if (sumOfTwoCards === 21) {
        messageEl.textContent = "Wohoo! You've got Blackjack! 🥳";

        disableNewCard();
        disablePlayButton();
    }
    else {
        messageEl.textContent = "You're out of the game! 😭";
        disableNewCard();
        disablePlayButton();
    }
}

function newGame () {
    startGame();
    disablePlayButton();
    enableNewCard();
}

function newCard() {
    let thirdCard = getRandomCard();
    sumOfTwoCards += thirdCard;
    cards.push(thirdCard);
    renderGame();
}

function disablePlayButton() {
    playButtonEl.disabled = true;
}

function disableNewCard() {
    newCardButtonEl.disabled = true;
}

function enablePlayButton() {
    playButtonEl.disabled = false;
}

function enableNewCard() {
    newCardButtonEl.disabled = false;
}