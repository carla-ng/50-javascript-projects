const toggles = document.querySelectorAll('.toggle')
const good    = document.querySelector('#good')
const cheap   = document.querySelector('#cheap')
const fast    = document.querySelector('#fast')


// Add change event listener to all toggles
toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))


// Logic of good, cheap and fast
function doTheTrick(theClickedOne) {
    if ( good.checked && cheap.checked && fast.checked ) {
        if (good === theClickedOne) fast.checked = false
        if (cheap === theClickedOne) good.checked = false
        if (fast === theClickedOne) cheap.checked = false
    }
}
