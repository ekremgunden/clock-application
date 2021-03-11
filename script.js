window.onload = startTime;

function startTime() {
    let hour = document.getElementById("hour");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");

    var saat = new Date().getHours(); 
    var dakika = new Date().getMinutes(); 
    var saniye = new Date().getSeconds(); 

    saat = checkTime(saat);
    dakika = checkTime(dakika);
    saniye = checkTime(saniye);

    hour.innerText=saat+" :";
    minutes.innerText=dakika+" :";
    seconds.innerText=saniye;
    t = setTimeout('startTime()',1000);
}

function checkTime(i) {
    if (i < 10){
        i = "0"+ i;
    }
    return i;
}

