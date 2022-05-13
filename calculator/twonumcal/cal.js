let operator=document.getElementById("operater")
console.log(operator)

let num1=8
let num2=5

let total=document.getElementById("total")
console.log(operator)

var v="0";

function add(){
    operator.textContent="+" 
    // total.textContent=8+5
     return v ="+";
}
function sub(){
    operator.textContent="-" 
    // total.textContent=8-5
    return v ="-";
}
function div(){
    operator.textContent="/" 
    // total.textContent=8/5
    return v ="/";
}
function mul(){
    operator.textContent="*" 
    // total.textContent=8*5
    return v ="*";
}
function clean(){
    operator.textContent="_" 
    total.textContent=0
}
function caltotal(){
    if(v=="+"){
        total.textContent=8+5
    }
    if(v=="-"){
        total.textContent=8-5
    }
    if(v=="*"){
        total.textContent=8*5
    }
    if(v=="/"){
        total.textContent=8/5
    }
}