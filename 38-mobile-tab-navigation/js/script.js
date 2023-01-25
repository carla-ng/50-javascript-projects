const contents  = document.querySelectorAll('.content')
const listItems = document.querySelectorAll('nav ul li')


// Listeners
listItems.forEach((item, idx) => {
    item.addEventListener('click', () => {
        hideAllContents()
        hideAllItems()

        item.classList.add('active')
        contents[idx].classList.add('show')
    })
})


// Remove class 'show' from all images
function hideAllContents() {
    contents.forEach(content => content.classList.remove('show'))
}


// Remove class 'active' from all elements
function hideAllItems() {
    listItems.forEach(item => item.classList.remove('active'))
}
