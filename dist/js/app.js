let i;

const daysOfTheWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const days = new Date();

const printDay = daysOfTheWeek[days.getDay()];
console.log(printDay);

const day = document.querySelector("#day");
console.log(day);

const time = new Date();

const printTime = time.getUTCMilliseconds();


const appendTime = document.querySelector("#time");
appendTime.textContent = `UTC TIME(MILLISECONDS):${printTime}`;
console.log(appendTime);

day.textContent = `Day of the Week:${printDay}`;



