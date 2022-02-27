
const open      = document.getElementById('open')
const close     = document.getElementById('close')
const container = document.querySelector('.container')


// Open Nav on click when it's closed
open.addEventListener('click', () => container.classList.add('show-nav'))

// Close Nav on click when it's open
close.addEventListener('click', () => container.classList.remove('show-nav'))