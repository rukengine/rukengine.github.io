
let label_Days = document.querySelector("#days");
let label_Hours = document.querySelector("#hours");
let label_Minutes = document.querySelector("#minutes");
let label_Seconds = document.querySelector("#seconds");

let targetDateTime = new Date("Apr 4, 2024 10:00:00").getTime();

function updateCountdown() {
    
    let currentDateTime = new Date().getTime();
    let differenceDateTime = targetDateTime - currentDateTime;
    
    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;
    
    let differenceDays = Math.floor(differenceDateTime / day);
    let differenceHours = Math.floor((differenceDateTime % day) / hour);
    let differenceMinutes = Math.floor((differenceDateTime % hour) / minute);
    let differenceSeconds = Math.floor((differenceDateTime % minute) / second);

    if(differenceDays < 10) differenceDays = "0" + differenceDays;
    if(differenceHours < 10) differenceHours = "0" + differenceHours;
    if(differenceMinutes < 10) differenceMinutes = "0" + differenceMinutes;
    if(differenceSeconds < 10) differenceSeconds = "0" + differenceSeconds;

    label_Days.innerHTML = differenceDays;
    label_Hours.innerHTML = differenceHours;
    label_Minutes.innerHTML = differenceMinutes;
    label_Seconds.innerHTML = differenceSeconds;

}

setInterval(updateCountdown, 1000);

updateCountdown();