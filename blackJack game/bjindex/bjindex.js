function getRandemoCard(){
    // return Math.floor(Math.random()*13)+1
    let value = Math.floor(Math.random()*13)+1
    if(value===1){
        return 11
    } else if(value ===11 || value ===12 || value===13){
        return 10
    }else{
        return value
    }
}


// let card1 = getRandemoCard()
// let card2 = getRandemoCard()
//let blackjack = false
let sumCrd = 0
let cards = []
console.log(sumCrd)
let message = ""
let isAlive = false


let messageEl = document.querySelector("#message-el")
let sum = document.querySelector("#sum")
let card = document.querySelector("#card")

console.log(cards)

function startGame() {
    isAlive = true
    let randomone=getRandemoCard()
    let randomtwo=getRandemoCard()
    cards = [randomone,randomtwo]
    sum = randomone+randomtwo


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
    let cardn = getRandemoCard()
    sumCrd += cardn
    cards.push(cardn)
    console.log(cards)
    renderGame()

}


