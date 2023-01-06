
/********************
 *    VARIABLES     *
 ********************/

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');
const sizeElem = document.getElementById('size');
const colorElem = document.getElementById('color');
const clearButton = document.getElementById('clear');

let size = 10
let x
let y
let isPressed = false

colorElem.value = '#c87fd2'
let color = colorElem.value



/********************
 *    FUNCTIONS     *
 ********************/

// Draws a circle
function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

// Draws a line
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}

// Modifies number of the size of the brush on screen
function updateSizeOnScreen() {
    sizeElem.innerText = size
}


/********************
 *      EVENTS      *
 ********************/

// Detects when mouse is pressed down and get position
canvas.addEventListener('mousedown', (e) => {
    isPressed = true

    x = e.offsetX
    y = e.offsetY
})

// Detects when mouse is not being pressed down anymore and reset position
document.addEventListener('mouseup', (e) => {
    isPressed = false

    x = undefined
    y = undefined
})

// Detects mouse movement when it is being pressed down
canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)

        x = x2
        y = y2
    }
})

// Increases the size of the brush
increaseButton.addEventListener('click', () => {
    size += 5

    if (size > 50) {
        size = 50
        alert('The size of the brush cannot be bigger than 50')
    }

    updateSizeOnScreen()
})

// Decreases the size of the brush
decreaseButton.addEventListener('click', () => {
    size -= 5

    if (size < 5) {
        size = 5
        alert('The size of the brush cannot be smaller than 5')
    }

    updateSizeOnScreen()
})

// Changes the color of the brush
colorElem.addEventListener('change', (e) => color = e.target.value)

// Clears the canvas
clearButton.addEventListener('click', () => ctx.clearRect(0,0, canvas.width, canvas.height))