
const container = document.querySelector('.container')
const left = document.querySelector('.left')
const right = document.querySelector('.right')

// Hover on left section
left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

// Hover on right section
right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))
