
const factBox =document.getElementById('fact-box')



fetch('https://catfact.ninja/fact')
.then(response => response.json())
.then(data => console.log(data))


// factBox.innerText = data.fact;
console.log(data.fact);