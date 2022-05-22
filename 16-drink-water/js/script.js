const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')


updateBigCup()

smallCups.forEach((cup, index) => {
    cup.addEventListener('click', () => highlightCups(index))
})


// Fill cups
function highlightCups(index) {

    // Empty glass if it is the last one that is full
    if (smallCups[index].classList.contains('full')) {
        if (smallCups[index].nextElementSibling && !smallCups[index].nextElementSibling.classList.contains('full')
            ||
            !smallCups[index].nextElementSibling )
        {
            index--
        }
    }

    // Fill cups until the one that was clicked
    smallCups.forEach((cup, index2) => {
        if (index2 <= index) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })

    updateBigCup()
}


// Fill big cup according to selected small cups
function updateBigCup() {
    const fullCupsLength = document.querySelectorAll('.cup-small.full').length
    const totalCupsLength = smallCups.length

    if (fullCupsLength === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${ fullCupsLength / totalCupsLength * 330 }px`  // 330px is the cup's height in the css
        percentage.innerText = `${ fullCupsLength / totalCupsLength * 100 }%`
    }

    if (fullCupsLength === totalCupsLength) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        liters.innerText = `${ 2 - (250 * fullCupsLength / 1000) }L`  // 2: total of lts. 250: mls per cup.
    }
}
