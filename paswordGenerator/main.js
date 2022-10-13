const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];
    let pswstr = 0
    let rnd = 0
    let pswstr2 = 0
    let rnd2 = 0

let ps1 = document.getElementById("ps1")
let ps2 = document.getElementById("ps2")

// rnd = Math.floor(Math.random() * characters.length)
// console.log(characters[rnd])

function pswGeneratare(){
    for (let i = 0; i < 15; i++) {
        rnd = Math.floor(Math.random() * characters.length)
        pswstr+= characters[rnd]
        // console.log(i+" "+characters[rnd])
       
    }
    // console.log(pswstr)
    ps1.innerText = pswstr

    for (let i = 0; i < 15; i++) {
        rnd2 = Math.floor(Math.random() * characters.length)
        pswstr2+= characters[rnd2]
        // console.log(i+" "+characters[rnd])
       
    }
    // console.log(pswstr)
    ps2.innerText = pswstr2
    
}
