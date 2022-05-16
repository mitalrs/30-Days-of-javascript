let sentence = ["hello", "my", "name", "is", "per"]
let sen = document.querySelector("#prg")

for (let i = 0; i < sentence.length; i++) {
    console.log(sentence[i])
    sen.textContent += sentence[i] + " "
}
