let course={
    title:"Learn Grid for free",
    lessons:16,
    creator:"hearaid borgen",
    level:2,
    length:63,
    isFree:true,
    tags:["html", "css"]
}
console.log(course.length)
console.log(course["tags"])


let airbnbCastle={
    castleName:"Monselice, Italy",
    bookNow:158,
    available:true,
    similarAnother:["Easkey, Ireland", "Rions, France","Kilmartin, Scotland"]
}

console.log(airbnbCastle.bookNow)
console.log(airbnbCastle.available)


//function in side of object
let player={
    name:"some",
    chip:200,
    demofn: function(){
        console.log("hii")
    }

}
player.demofn()