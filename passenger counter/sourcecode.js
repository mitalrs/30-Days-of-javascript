let personCount=document.getElementById("person-count")
console.log(personCount)

let count=0
function increment(){
    count+=1
    personCount.textContent=count
    console.log(count)
}


// function increement(){
//     console.log("clicked")
// }
let saveEl=document.getElementById("save-el")
console.log(saveEl)

function save(){
    // console.log(count)
    let save=count+" - "
    saveEl.textContent+=save
    // console.log(saveEl)
}
