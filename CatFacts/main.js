
const factBox =document.getElementById('fact-box')



fetch('https://catfact.ninja/fact')
.then((response) =>{
return response.json()})
.then((data) =>{ console.log(data)
   
factBox.innerText = data.fact;

})

