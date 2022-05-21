const tagsElem = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (event) => {
    createTags(event.target.value)

    if (event.key == 'Enter') {
        setTimeout(() => {
            event.target.value = ''
            
            textarea.disabled = true;
            textarea.value = 'Please wait...';
        })
        
        randomSelect()
    }
})

// Creation of tags with choices, separated by commas
function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())

    tagsElem.innerHTML = ''

    tags.forEach(tag => {
        const tagElem = document.createElement('span')
        tagElem.classList.add('tag')
        tagElem.innerText = tag
        tagsElem.appendChild(tagElem)
    })
}


// Goes through the choices the user entered and picks one
function randomSelect() {
    const times = 30


    // Highlighting and unhighlighting options
    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        highlighTagToggle(randomTag,'add')

        setTimeout(() => {
            highlighTagToggle(randomTag,'remove')
        }, 100)

    }, 100)


    // Stopping and picking and option
    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()
            highlighTagToggle(randomTag,'add')

            textarea.value = '';
            textarea.disabled = false;
        }, 100)

    }, times * 100)

}


// Randomly selects one of the choices the user entered
function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')

    return tags[Math.floor(Math.random() * tags.length)]
}


// Highlights or unhighlights a tag
function highlighTagToggle(tag, action) {
    action = action || 'add'

    if (action == 'add') {
        tag.classList.add('highlight')
    } else {
        tag.classList.remove('highlight')
    }
}
