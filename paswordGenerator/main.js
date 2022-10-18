const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];
    let pswstr = ""
    let rnd = 0
    let pswstr2 = ""
    let rnd2 = 0

let ps1 = document.getElementById("ps1")
let ps2 = document.getElementById("ps2")
const copyBtn1 = document.getElementById("copy-btn1")
const copyBtn2 = document.getElementById("copy-btn2")



function pswGeneratare(){
    pswstr = ""
    pswstr2 = ""
    for (let i = 0; i < 15; i++) {
        rnd = Math.floor(Math.random() * characters.length)
        pswstr+= characters[rnd]
    }

    ps1.innerText = pswstr
    
    
    for (let i = 0; i < 15; i++) {
        rnd2 = Math.floor(Math.random() * characters.length)
        pswstr2+= characters[rnd2]
    }
    ps2.innerText = pswstr2
    
}

copyBtn1.addEventListener("click", function(){
    navigator.clipboard.writeText(ps1.innerText);
})

copyBtn2.addEventListener("click", function(){
    navigator.clipboard.writeText(ps2.innerText);
})