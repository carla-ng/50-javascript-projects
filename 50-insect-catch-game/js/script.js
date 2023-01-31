const screens = document.querySelectorAll('.screen');
const chooseInsectBtns = document.querySelectorAll('.choose-insect-btn');
const startBtn = document.getElementById('start-btn')
const gameContainer = document.getElementById('game-container')
const timeElem = document.getElementById('time')
const scoreElem = document.getElementById('score')
const message = document.getElementById('message')

let seconds = 0
let score = 0
let selectedInsect = {}


// Click button to start game / change screen
startBtn.addEventListener('click', () => screens[0].classList.add('up'))


// Choose insect to play game with
chooseInsectBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img')
        const src = img.getAttribute('src')
        const alt = img.getAttribute('alt')

        selectedInsect = { src, alt }
        screens[1].classList.add('up')
        setTimeout(createInsect, 1000)
        startGame()
    })
})


// Start game
function startGame() {
    setInterval(increaseTime, 1000)
}


// Timer
function increaseTime() {
    let min = Math.floor(seconds / 60)
    let sec = seconds % 60

    min = min < 10 ? `0${min}` : min
    sec = sec < 10 ? `0${sec}` : sec

    timeElem.innerHTML = `Time: ${min}:${sec}`
    seconds++
}


// Add insect to DOM
function createInsect() {
    const insect = document.createElement('div')
    insect.classList.add('insect')

    const { x, y } = getRandomLocation()
    insect.style.top = `${y}px`
    insect.style.left = `${x}px`
    insect.innerHTML = `<img src="${selectedInsect.src}" alt="${selectedInsect.alt}" style="transform: rotate(${Math.random() * 360}deg)" />`

    insect.addEventListener('click', catchInsect)

    gameContainer.appendChild(insect)
}


// Get random location on screen to place insect
function getRandomLocation() {
    const width = window.innerWidth
    const height = window.innerHeight
    const x = Math.random() * (width - 200) + 100
    const y = Math.random() * (height - 200) + 100

    return { x, y }
}


// Catch insect
function catchInsect() {
    increaseScore()
    this.classList.add('caught')
    setTimeout(() => this.remove(), 2000)
    addInsects()
}


// Add insects
function addInsects() {
    setTimeout(createInsect, 1000)
    setTimeout(createInsect, 1500)
}


// Increase score
function increaseScore() {
    score++

    // Show message
    if ( score > 19 ) {
        message.classList.add('visible')
    }

    scoreElem.innerHTML = `Score: ${score}`
}
