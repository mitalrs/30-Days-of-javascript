let hasCompletedCourse = true
let givensCertificate = true

if(hasCompletedCourse===true && givensCertificate===true){
    generateCertificate()
}
function generateCertificate()
{
    console.log("Generste the certificate.......")
}


let hasSolvedChallenge = false 
let hasHintLeft = false

if(hasSolvedChallenge===false && hasHintLeft===false){
    showSolution()
}

function showSolution(){
    console.log("showing solution")
}


// or operato ||
let likesDocumenteries = false
let likesStartup = true

if(likesDocumenteries===true || likesStartup===true){
    recommendedMovie()
}

function recommendedMovie(){
    console.log("Hey, Check out this film we think you will like!!")
}

