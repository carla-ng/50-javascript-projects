
const loadingText = document.querySelector('.loading-text')
const bg          = document.querySelector('.bg')

let load     = 0
let interval = setInterval(blurring, 25)  // every 25 milliseconds


// Increment load value to remove blur from image (till 100% is reached)
function blurring() {
    load++

    if (load > 99) {
        clearInterval(interval)
    }

    // Text animation
    loadingText.innerText = `${ load }%`
    loadingText.style.opacity = scale(load, 0, 100, 1, 0)
    
    // Background image animation
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}


// Convert a number that falls within a range of numbers into a number within a different range
// Reference: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
}
