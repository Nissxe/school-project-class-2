
function zegarki() {

let time = new Date;

let hour = time.getHours(); 
let min = time.getMinutes();
let sec = time.getSeconds();

let czasNaZegarzePolski =  hour + ":" + min + ":" + sec;
const zegarPol = document.getElementById("zegarPol");
zegarPol.innerText = "Czas w Polsce: " + czasNaZegarzePolski;


if(hour<8){
    hour+=24
}

let czasNaZegarzeUSA = hour-8 + ":" + min + ":" + sec;
const zegarYellowstone = document.getElementById("zegarUSA");
zegarYellowstone.innerText = "Czas w Yellowstone: " + czasNaZegarzeUSA;
}

setInterval(zegarki,500)