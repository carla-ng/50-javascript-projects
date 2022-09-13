const hourElem = document.querySelector('.hour')
const minuteElem = document.querySelector('.minute')
const secondElem = document.querySelector('.second')

const timeElem = document.querySelector('.time')
const dateElem = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}


setTime()

setInterval(setTime, 1000)  // Calling every second


// Toggle theme
toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html')

    if ( html.classList.contains('dark') ) {
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark mode'
    } else {
        html.classList.add('dark')
        e.target.innerHTML = 'Light mode'
    }
})


// Set current time
function setTime() {
    const time = new Date();
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()

    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const ampm = ( hours >= 12 ) ? 'pm' : 'am'

    hourElem.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`
    minuteElem.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`
    secondElem.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`

    timeElem.innerHTML = `${ hoursForClock }:${ minutes < 10 ? `0${ minutes }` : minutes } ${ ampm }`
    dateElem.innerHTML = `${ days[day] }, ${ months[month] } ${ date }`
}
