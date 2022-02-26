
const panels = document.querySelectorAll('.panel')


// Change active panel on click event
panels.forEach( panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})


/*********************
 *     FUNCTIONS     *
 *********************/

// Removes the class 'active' from an element
function removeActiveClasses() {
    panels.forEach( panel => {
        panel.classList.remove('active')
    })
}
