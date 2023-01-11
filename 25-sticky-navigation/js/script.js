const nav = document.querySelector('.nav')

// Listeners
window.addEventListener('scroll', fixNav)


// Fix Nav when user scrolls down
function fixNav() {

    if ( window.scrollY > nav.offsetHeight + 150 ) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }

}
