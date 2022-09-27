// returning value
let player1t = 102
let player2t = 107

function fastRecer(){
    if(player1t < player2t){
        return player1t;
    }
    else if(player2t < player1t){
        return player2t;
    }else{
        return player1t;
    }

}
let fastestRacer= fastRecer()
console.log(fastestRacer)

 

function totalRaceTime(){
    return player1t + player2t 
}
let trt = totalRaceTime()
console.log(trt);