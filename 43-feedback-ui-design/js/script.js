const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.ratings-container')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
let selectedRating = 'Satisfied'


// Listener
ratingsContainer.addEventListener('click', (e) => {
    console.log('e.target.nextElementSibling: ',e.target.nextElementSibling)
    console.log(' e.target.previousElementSibling: ', e.target.previousElementSibling)
    
    if ( e.target.parentNode.classList.contains('rating') && e.target.nextElementSibling ) {
        removeActive()
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.nextElementSibling.innerHTML
    } else if (
        e.target.parentNode.classList.contains('rating') &&
        e.target.previousSibling &&
        e.target.previousElementSibling.nodeName === 'IMG'
    ) {
        removeActive()
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.innerHTML
    }

})


// Message to show after sending rating
sendBtn.addEventListener('click', (e) => {
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `
})


// Remove class of active from ratings
function removeActive() {
    for ( let i = 0; i < ratings.length; i++ ) {
        ratings[i].classList.remove('active')
    }
}
