const pokeContainer = document.getElementById('poke-container')
const pokeLimit = 150
const pokeColors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}
const pokeMainTypes = Object.keys(pokeColors)


// Get first 150 Pokemon
const fetchPokemons = async () => {
    for ( let i = 1; i <= pokeLimit; i++ ) {
        await getPokemon(i)
    }
}


// Fetch Pokemon by its number
const getPokemon = async ( id ) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()

    createPokemonCard(data)
}


// Create Pokemon card to show in DOM
const createPokemonCard = ( pokemon ) => {
    const pokemonElem = document.createElement('div')
    pokemonElem.classList.add('pokemon')

    const name  = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
    const id    = pokemon.id.toString().padStart(3,'0')
    const types = pokemon.types.map(type => type.type.name)
    const type  = pokeMainTypes.find(type => types.indexOf(type) > -1)
    const color = pokeColors[type]

    pokemonElem.style.backgroundColor = color

    const pokemonInnerHTML = `
                            <div class="img-container">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"" alt="${name}">
                            </div>
                            <div class="info">
                                <span class="number">#${id}</span>
                                <h3 class="name">${name}</h3>
                                <small class="type">Type: <span>${type}</span> </small>
                            </div>
                            `

    pokemonElem.innerHTML = pokemonInnerHTML
    pokeContainer.appendChild(pokemonElem)
}


// Run
fetchPokemons()
