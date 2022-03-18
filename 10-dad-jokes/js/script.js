const joke_element = document.getElementById('joke')
const joke_btn = document.getElementById('joke-btn')


generateJoke()
joke_btn.addEventListener('click', generateJoke)


// Getting a dad joke
async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    }
  }

  const response = await fetch('https://icanhazdadjoke.com', config)
  const data = await response.json()

  joke_element.innerHTML = data.joke
}
