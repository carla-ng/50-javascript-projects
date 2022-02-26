
const progress = document.getElementById('progress')
const prev     = document.getElementById('prev')
const next     = document.getElementById('next')
const circles  = document.querySelectorAll('.circle')

let currentActive = 1


// Advance to next step
next.addEventListener('click', () => {
    currentActive++

    if (currentActive > circles.length) {
        currentActive = circles.length
    }

    updateProgress()
});


// Go back to the previous step
prev.addEventListener('click', () => {
    currentActive--

    if (currentActive < 1) {
        currentActive = 1
    }

    updateProgress()
});


/*********************
 *     FUNCTIONS     *
 *********************/

// Updates progress of steps
function updateProgress() {

    // Mark as active the steps that the user already completed
    circles.forEach( (circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }        
    })


    // Change width of progress bar
    const actives = document.querySelectorAll('.active')
    progress.style.width = ( (actives.length - 1) / (circles.length - 1) ) * 100 + '%'


    // Disable buttons when there are no more steps available
    if (currentActive == 1) {
        prev.disabled = true
    } else if (currentActive == circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}
