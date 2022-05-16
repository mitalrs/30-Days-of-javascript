let card1 = 11
let card2 = 10
let sumCrd = card1 + card2
let cards = [card1, card2]
console.log(sumCrd)
let message = ""


let messageEl = document.querySelector("#message-el")
let sum = document.querySelector("#sum")
let card = document.querySelector("#card")

function startGame() {
    renderGame()
}

function renderGame() {
    if (sumCrd <= 20) {
        message = "do you want to dreaw a new card?"
    } else if (sumCrd === 21) {
        message = "Woohoo! you've got BlackJack!"
        blackJack = true
    } else {
        message = "you're out of the game!"
    }
    messageEl.textContent = message
    sum.textContent = "Sum: " + sumCrd

    card.textContent = "Cards: " 
    for (let i = 0; i < cards.length; i++) {
    card.textContent += cards[i] +" "
    }
    
}

function newCard() {
    console.log("Drawing a new card from the deck!")
    let cardn = 2
    sumCrd += cardn
    cards.push(cardn)
    console.log(cards)
    renderGame()

}