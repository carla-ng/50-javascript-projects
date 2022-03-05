
const boxes = document.querySelectorAll('.box')


// Fire event when user scrolls page
window.addEventListener('scroll', checkBoxes)

checkBoxes()


// Show/hide elements when user scrolls
function checkBoxes() {
    const windowPortion = 0.8  //Stores the percentage of the window that will be used on the trigger
    const triggerBottom = window.innerHeight * windowPortion

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if (boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}
