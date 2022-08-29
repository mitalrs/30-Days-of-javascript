let spanf = document.getElementById("f-num")
let num = 0;

let str = "";


// number function
function one() {
    str += "1";
    spanf.textContent = str
}
function two() {
    str += "2";
    spanf.textContent = str
}
function three() {
    str += "3";
    spanf.textContent = str
}
function four() {
    str += "4";
    spanf.textContent = str
}
function five() {
    str += "5";
    spanf.textContent = str
}
function six() {
    str += "6";
    spanf.textContent = str
}
function seven() {
    str += "7";
    spanf.textContent = str
}
function eight() {
    str += "8";
    spanf.textContent = str
}
function nine() {
    str += "9";
    spanf.textContent = str
}
function zero() {
    str += "0";
    spanf.textContent = str
}


// operator function
function add() {
    str += "+";
    spanf.textContent = str
}
function sub() {
    str += "-";
    spanf.textContent = str
}
function mul() {
    str += "*";
    spanf.textContent = str
}
function div() {
    str += "/";
    spanf.textContent = str
}


// clear and total function
function clearBox() {
    console.log("click");
    spanf.textContent = ""
    str = "";
}

function total() {
    spanf.textContent = new Function("return " + str)()
    // spanf.textContent=eval(spanf.textContent)
}