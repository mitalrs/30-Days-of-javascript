let personCount=document.getElementById("person-count")
console.log(personCount)

let count=0
function increement(){
    count=count+1
    personCount.innerText=count
    console.log(count)
}


// function increement(){
//     console.log("clicked")
// }
function save(){
    console.log(count)
}
 