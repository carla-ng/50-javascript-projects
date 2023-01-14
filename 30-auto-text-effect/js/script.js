const textElem = document.getElementById('text')
const speedElem = document.getElementById('speed')
const text = 'We Love Programming!'

let index = 1
let speed = 300 / speedElem.value


writeText()


// Write automatic text
function writeText() {
    textElem.innerText = text.slice(0, index)
    index++

    if ( index > text.length ) {
        index = 1
    }

    setTimeout(writeText, speed)
}


// Listeners 
speedElem.addEventListener('input', (e) => speed = 300 / e.target.value)
