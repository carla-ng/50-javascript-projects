const imgs     = document.getElementById('imgs')
const leftBtn  = document.getElementById('left')
const rightBtn = document.getElementById('right')
const img      = document.querySelectorAll('#imgs img')

let index = 0
let interval = setInterval(run, 2000)


// Start functionality / animation
function run() {
    index++
    changeImage()
}


// Change image
function changeImage() {
    if ( index > img.length - 1 ) {
        index = 0

    } else if ( index < 0 ) {
        index = img.length - 1
    }

    imgs.style.transform = `translateX(${-index * 500}px)`
}


// Reset animation interval
function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}


// Buttons listeners
rightBtn.addEventListener('click', () => {
    index++
    changeImage()
    resetInterval()
})
leftBtn.addEventListener('click', () => {
    index--
    changeImage()
    resetInterval()
})