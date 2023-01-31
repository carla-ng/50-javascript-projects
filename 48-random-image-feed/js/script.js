const container = document.querySelector('.container')
const unsplashUrl = 'https://source.unsplash.com/random/'
const rows = 10


// Add images to DOM
for ( let i = 0; i < rows * 3; i++ ) {
    const img = document.createElement('img')
    img.src = `${unsplashUrl}${getRandomSize()}`
    container.appendChild(img)
}


// Get random image size
function getRandomSize() {
    return `${getRandomNumber()}x${getRandomNumber()}`
}


// Get random number
function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 300
}