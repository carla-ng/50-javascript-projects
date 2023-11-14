const codes = document.querySelectorAll('.code')


// Add focus to first element
codes[0].focus()


// Keydown event listeners
codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
        if ( e.key >= 0 && e.key <= 9 ) {
            codes[idx].value = ''
            if ( codes[idx + 1] ) setTimeout(() => codes[idx + 1].focus(), 10)
            
        } else if (e.key === 'Backspace') {
            if ( codes[idx - 1] ) setTimeout(() => codes[idx - 1].focus(), 10)
        }
    })
})
