const monthEl = document.querySelector(".date h1");
const fullDateEl = document.querySelector(".date p");
const daysEl = document.querySelector(".days");

const monthIndex = new Date().getMonth();
const lastDay = new Date(new Date().getFullYear(), monthIndex + 1, 0).getDate(); // date#, 1 day before next month
const firstDay = new Date(new Date().getFullYear(), monthIndex , 1).getDay(); // dotw, 1st day of current month
// console.log(firstDay);
// console.log(lastDay);

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

monthEl.innerText = months[monthIndex];
fullDateEl.innerText = new Date().toDateString();

let days = "";

// fill days with empty (ones that are not in current month)
for(let i=firstDay; i > 0; i--){
    days += `<div class="empty"></div>`
}


// fill rest of days
for (let i=1; i<=lastDay; i++){
    if(i === new Date().getDate()){
        // highlighted day (today)
        days += `<div class="today" onClick="parent.open('http://www.google.com/search?q=${"What is happening on " + months[monthIndex] + " " + i + ", " + new Date().getFullYear()}')">${i}</div>`
    }else{
        // every other day
        days += `<div onClick="parent.open('http://www.google.com/search?q=${"What is happening on " + months[monthIndex] + " " + i + ", " + new Date().getFullYear()}')">${i}</div>`
    }
}

daysEl.innerHTML = days;