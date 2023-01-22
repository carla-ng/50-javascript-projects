const container = document.getElementById('container')
const colors    = ['#f58cb5', '#dd7eeb', '#9b9ff3', '#75e78b', '#f7b27b']
const squares   = 500

// Create board
for(let i = 0; i < squares; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => addColor(square))
    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
}


// Add color to square
function addColor(element) {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}


// Remove color from square
function removeColor(element) {
    element.style.background = '#fff'
    element.style.boxShadow = '0 0 2px #000'
}


// Get random color to add to current square
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}
