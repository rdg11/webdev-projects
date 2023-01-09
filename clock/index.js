const hourE1 = document.querySelector(".hour")
const minuteE1 = document.querySelector(".minute")
const secondE1 = document.querySelector(".second")

function updateClock(){
    const currentDate = new Date();
    //setTimeout(updateClock, 1000);
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();
    const hourDeg = (hour / 12) * 360;
    hourE1.style.transform = `rotate(${hourDeg}deg)`
    const minuteDeg = (minute / 60) * 360;
    minuteE1.style.transform = `rotate(${minuteDeg}deg)`
    const secondDeg = (second / 60) * 360;
    secondE1.style.transform = `rotate(${secondDeg}deg)`

    //console.log(hour, minute, second);
}

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
}

setInterval(updateClock, 1000)
setInterval(showTime, 1000)
