let pCount=document.getElementById("p-count")
console.log(pCount)

let count=0
function increement(){
    count=count+1
    pCount.innerText=count
}

function save(){
    console.log(count)
}