const openBtn  = document.querySelector('.open-btn')
const closeBtn = document.querySelector('.close-btn')
const nav      = document.querySelectorAll('.nav')


// Open navigation
openBtn.addEventListener('click', () => {
    nav.forEach(navEl => navEl.classList.add('visible'))
})


// Close navigation
closeBtn.addEventListener('click', () => {
    nav.forEach(navEl => navEl.classList.remove('visible'))
})
