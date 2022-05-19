
/*
querySelectorAll (toggle buttons)
loop through node list 
addEventListener
toggle the active class on the parent node(.parentNode & classList.toggle() )
*/

const toggle_buttons = document.querySelectorAll('.faq-toggle')

toggle_buttons.forEach(toggle => {
    toggle.addEventListener('click', (event) => {
        toggle.parentNode.classList.toggle('active')

    })
    
})
