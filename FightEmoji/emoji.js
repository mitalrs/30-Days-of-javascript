let fighters = ["🐉", "🐥", "🐊", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

const fightButton = document.getElementById("fightButton")
const stage = document.getElementById("stage")

fightButton.addEventListener("click", function(){
    let rnd1 = Math.floor(Math.random()*fighters.length)
    let emoj1 = fighters[rnd1];

    let rnd2 = Math.floor(Math.random()*fighters.length)
    let emoj2 = fighters[rnd2];

    stage.innerText = `${emoj1} vs ${emoj2}`
})