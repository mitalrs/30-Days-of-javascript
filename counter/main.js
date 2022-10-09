const home = document.getElementById("home")
let homeCount=0;

function homeOne(){
    homeCount = homeCount+1;
    home.innerText=homeCount;
}

function homeTwo(){
    homeCount = homeCount+ 2;
    home.innerText = homeCount;
}

function homeThree(){
    homeCount +=3;
    home.innerText = homeCount;
}


const guest = document.getElementById("guest")
let guestCount=0;

function guestOne(){
    guestCount = guestCount+1;
    guest.innerText=guestCount;
}

function guestTwo(){
    guestCount = guestCount+ 2;
    guest.innerText = guestCount;
}

function guestThree(){
    guestCount +=3;
    guest.innerText = guestCount;
}