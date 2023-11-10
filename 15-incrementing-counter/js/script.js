const counters = document.querySelectorAll('.counter')

// Adding counter numbers
counters.forEach( counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const targetNum = +counter.getAttribute('data-target')  // the + sign turns the string into a number. can also user parseInt or Number
        const counterNum = +counter.innerText

        const increment = targetNum / 200

        if (counterNum < targetNum) {
            counter.innerText = `${ Math.ceil( counterNum + increment ) }`
            setTimeout( updateCounter, 1)
        } else {
            counter.innerText = targetNum
        }
    }

    updateCounter()
})