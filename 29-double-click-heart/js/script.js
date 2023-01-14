const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')

let clickTime = 0
let timesClicked = 0


// Listeners - we create our own double click
loveMe.addEventListener('click', (ev) => {
    if ( clickTime === 0 ) {
        clickTime = new Date().getTime()
    } else {
        if ( (new Date().getTime() - clickTime) < 800 ) {
            createHeart(ev)
            clickTime = 0
        } else {
            clickTime = new Date().getTime()
        }
    }
})


// Create heart when user likes image
const createHeart = (ev) => {
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    const x = ev.clientX
    const y = ev.clientY

    const leftOffset = ev.target.offsetLeft
    const topOffset = ev.target.offsetTop

    const xInside = x - leftOffset
    const yInside = y - topOffset

    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`

    loveMe.appendChild(heart)

    times.innerHTML = ++timesClicked

    setTimeout( () => heart.remove(), 1000 )
}
