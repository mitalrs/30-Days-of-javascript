let randomenum = Math.random()
console.log(randomenum)

//output
//0.1608353193970986


//dice
let randomeDicenum = Math.random()*6
console.log(randomeDicenum)



//math.floor does input the some num... and remove the decimal 0.0000->0
let floornum = Math.floor(3.45632)
console.log(floornum)


// floor and random method use togrther
let randomNumber = Math.floor(Math.random()*6)+1
console.log(randomNumber)


// real dice fn
function dice(){
    return Math.floor(Math.random()*6)+1
}
console.log(dice())