let meters = 0
let feet = 0
let gallon =0
let liter =0
let kilogram =0
let pounds =0
let input20 = document.getElementById("input20")
const btnCvt = document.getElementById("btn-cvt")
const feetMeter = document.getElementById("feet-meter")
const literGallon = document.getElementById("liter-gallon")
const kilosPounds = document.getElementById("kilos-pounds")

let inputvalue = input20.value

btnCvt.addEventListener("click",function(){
    feet = inputvalue/3.2808
    meters = inputvalue*3.2808
    feetMeter.innerText = ` ${inputvalue}  meters = ${meters.toFixed(3)} feet | ${inputvalue} feet = ${feet.toFixed(3)} meters`

    liter = inputvalue*0.264172
    gallon = inputvalue/0.264172
    literGallon.innerText = ` ${inputvalue}  liters = ${liter.toFixed(3)} gallons | ${inputvalue} gallons = ${gallon.toFixed(3)} liters`

    kilogram = inputvalue*2.2046
    pounds = inputvalue/2.2046
    kilosPounds.innerText = ` ${inputvalue}  kilos = ${kilogram.toFixed(3)} pounds | ${inputvalue} pounds = ${pounds.toFixed(3)} kilos`
})