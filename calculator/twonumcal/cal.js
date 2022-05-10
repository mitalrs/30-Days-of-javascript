let operator=document.getElementById("operater")
console.log(operator)

let num1=8
let num2=5

let total=document.getElementById("total")
console.log(operator)


function add(){
    operator.textContent="+" 
    total.textContent=8+5
}
function sub(){
    operator.textContent="-" 
    total.textContent=8-5
}
function div(){
    operator.textContent="/" 
    total.textContent=8/5
}
function mul(){
    operator.textContent="*" 
    total.textContent=8*5
}
function clean(){
    total.textContent=0
}
