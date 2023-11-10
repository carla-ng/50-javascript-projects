
const header      = document.getElementById('header')
const title       = document.getElementById('title')
const excerpt     = document.getElementById('excerpt')
const profile_img = document.getElementById('profile-img')
const name        = document.getElementById('name')
const date        = document.getElementById('date')

const animated_bgs      = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

// Defines data to be inserted
function getData() {
    header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1616070698578-e5e634af7e8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Playing Zelda for Nintendo Switch" />'
    title.innerHTML = 'Lorem ipsum dolor sit amet'
    excerpt.innerHTML =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis'
    profile_img.innerHTML =
    '<img src="https://api.dicebear.com/7.x/adventurer/svg?seed=Callie" alt="Portrait of the author" />'
    name.innerHTML = 'Jane Doe'
    date.innerHTML = 'Oct 08, 2022'

    animated_bgs.forEach( ( background ) => background.classList.remove('animated-bg') )
    animated_bg_texts.forEach( ( background ) => background.classList.remove('animated-bg-text') )
}
