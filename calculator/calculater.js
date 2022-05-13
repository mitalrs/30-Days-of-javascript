let spanf = document.getElementById("f-num")
let num = 0;




// number function
function one() {
    spanf.textContent += "1"
    num = 1;
}
function two() {
    spanf.textContent += "2"
    num = 2;
    return num;
}
function three() {
    spanf.textContent += "3"
    num = 3;
}
function four() {
    spanf.textContent += "4"
    num = 4;
}
function five() {
    spanf.textContent += "5"
    num = 5;
}
function six() {
    spanf.textContent += "6"
    num = 6;
}
function seven() {
    spanf.textContent += "7"
    num = 7;
}
function eight() {
    spanf.textContent += "8"
    num = 8;
}
function nine() {
    spanf.textContent += "9"
    num = 9;
}
function zero() {
    spanf.textContent += "0"
    num = 0;
}


// operator function
function add() {
    spanf.textContent += "+"
}
function sub() {
    spanf.textContent += "-"
}
function mul() {
    spanf.textContent += "*"

}
function div() {
    spanf.textContent += "/"

}


// clear and total function
function clearBox() {
    console.log("click");
    spanf.textContent = ""
}

function total() {
    spanf.textContent = Function(spanf.textContent)
}