const toggle_buttons = document.querySelectorAll('.faq-toggle')

toggle_buttons.forEach(toggle => {
    toggle.addEventListener('click', (event) => {
        toggle.parentNode.classList.toggle('active')
    })
})
