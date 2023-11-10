const labels = document.querySelectorAll('.form-control label')


// Trigger input click when label is clicked
labels.forEach(function ( label ) {
    label.addEventListener('click', function () {
        const inputId = label.getAttribute('for')
        const input = document.getElementById(inputId)

        if ( input ) {
            input.click()
        }
    })
})


// Transition
labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span class="letter" style="transition-delay: ${idx * 50}ms">${letter}</span>`)
        .join('')
})
