const secondHand=document.querySelector(".second-hand")


function setDate(){
    const now = new Date();
    const second = now.getSeconds();
    const secondsDegree=((seconds/60)*360);
     
    secondHand.style.transsform=`rotate(${secondsDegrees}deg)`
    console.log(seconds);
}