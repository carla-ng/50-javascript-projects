
const search = document.querySelector('.search')
const btn    = document.querySelector('.btn   ')
const input  = document.querySelector('.input ')


// Mark search as active on click of button
btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})
