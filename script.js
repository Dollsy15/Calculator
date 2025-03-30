const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const valueEl = document.querySelector('.value');

const acEl = document.querySelector('.ac');
const pmEl = document.querySelector('.pm');
const percentEl = document.querySelector('.percent');

const additionEl = document.querySelector('.addition');
const subtractionEl = document.querySelector('.subtraction');
const multiplicationEl = document.querySelector('.multiplication');
const divisionEl = document.querySelector('.division');
const equalEl = document.querySelector('.equal');

const updateTime = () => {
    const currentTime = new Date();

    let currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();

    if(currentHour>12){
        currentHour -= 12;
    }

    hourEl.textContent = currentHour.toString();
    minuteEl.textContent = currentMinute.toString().padStart(2,'0');
}
setInterval(updateTime, 1000);
updateTime();