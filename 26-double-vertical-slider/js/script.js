const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll('div').length

let activeSlideNumber = 0

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`


// Listeners
upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))


// Change slide
const changeSlide = ( direction ) => {
    const sliderHeight = sliderContainer.clientHeight

    if ( direction === 'up' ) {
        activeSlideNumber++

        if ( activeSlideNumber > slidesLength - 1 ) {
            activeSlideNumber = 0
        }
    } else if ( direction === 'down' ) {
        activeSlideNumber--

        if ( activeSlideNumber < 0 ) {
            activeSlideNumber = slidesLength - 1
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideNumber * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideNumber * sliderHeight}px)`
}
