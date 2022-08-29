//if else statemant
let firstCard = 5
let secondCard = 10

let sum = firstCard + secondCard
console.log(sum);



//how to win this game
//king=10
//a=11
//21
if (sum < 21) {
    console.log("Do you want a new card?")
}
else if (sum === 21) {
    console.log("yoo whooh!, you've got the game!")
}
else {
    console.log("you'r lost the game!")
}




let age = 22
if (age <= 20) {
    console.log("you can not enter the club!")
} else {
    console.log("welcome!")
}




let ageOld = 100
if (ageOld < 100) {
    console.log("not elegible")
}
else if (ageOld === 100) {
    console.log("Here is your birthday card frome the King!")
}
else {
    console.log("Not elegible, you have already gotten one")
}



let cardOne = 11
let cardTwo = 10
let sumOfCrd = cardOne + cardTwo
console.log(sumOfCrd)
let isAlive = true

if (sumOfCrd <= 20) {
    console.log("do you want to dreaw a new card?")
} else if (sumOfCrd === 21) {
    console.log("Woohoo! you've got BlackJack!")
} else {
    console.log("you're out of the game!")
    isAlive = flase
}

console.log(isAlive)



// Boolean
console.log(4 === 3) //flase
console.log(5 > 2)   //true
console.log(12 > 12) //flase
console.log(3 < 0)   //flase
console.log(3 >= 3)  //true
console.log(11 <= 11)//true
console.log(3 <= 2)  //flase




let card1 = 11
let card2 = 10
let sumCrd = cardOne + cardTwo
console.log(sumOfCrd)
let message=""


if (sumOfCrd <= 20) {
    message="do you want to dreaw a new card?"
} else if (sumOfCrd === 21) {
    message="Woohoo! you've got BlackJack!"
} else {
    message="you're out of the game!"
}


console.log(message)



