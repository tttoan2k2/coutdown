const newYear = '1 Jan 2022';

const dayEl = document.getElementById('days')
const hourEl = document.getElementById('hours')
const minEL = document.getElementById('mins')
const secondEl = document.getElementById('seconds')

function countdown() {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate) / 1000;
    
    const days = Math.floor(totalSeconds / 3600 / 24);

    const hours = Math.floor(totalSeconds / 3600) % 24;

    const mins = Math.floor(totalSeconds / 60) % 60

    const seconds = Math.floor(totalSeconds % 60)
    
    dayEl.innerHTML = formatTime(days);
    hourEl.innerHTML = formatTime(hours);
    minEL.innerHTML = formatTime(mins);
    secondEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
countdown();
setInterval(countdown, 1000)