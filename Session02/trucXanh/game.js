const boardGame = document.createElement('div')
const BOARDGAME_STYLE = {
    background: 'radial-gradient(circle,#020024 0,#090979 35%,#00d4ff 100%)',
    position: 'relative',
    margin: '0 auto',
    width: '560px',
    height: '450px'
}

Object.assign(boardGame.style, BOARDGAME_STYLE)
document.body.appendChild(boardGame)

const BASE_URL =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white";
const pokemonImgs = [
    { id: "poke-0", image: `${BASE_URL}/1.png` },
    { id: "poke-1", image: `${BASE_URL}/2.png` },
    { id: "poke-2", image: `${BASE_URL}/3.png` },
    { id: "poke-3", image: `${BASE_URL}/4.png` },
    { id: "poke-5", image: `${BASE_URL}/5.png` },
    { id: "poke-4", image: `${BASE_URL}/6.png` },
    { id: "poke-6", image: `${BASE_URL}/7.png` },
    { id: "poke-7", image: `${BASE_URL}/8.png` },
    { id: "poke-8", image: `${BASE_URL}/9.png` },
    { id: "poke-9", image: `${BASE_URL}/10.png` }
]

var pokemons = []

for(let i =0; i < 10; i++) {
    let pokemon = {
        id: i,
        matched: false,
        image: `${pokemonImgs[i].image}`
    }
    pokemons.push(pokemon)
    pokemons.push(pokemon)
}
pokemons = pokemons.sort(function () {
    return Math.random() - 0.5
})

const CARD_STYLE = {
    position: 'absolute',
    fontSize: '16px',
    width: '100px',
    height: '100px',
    top: '',
    left: '',
    borderRadius: '5px',
    border: '2px solid #fff',
    backgroundColor: '#26a0da',
    backgroundPosition: '50%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundImage: `url(${pokemonImgs[8].image})`
}
// console.log(CARD_STYLE.backgroundImage)
let cardLeft = 10, cardTop = 10

for (let i = 0; i < 20; i++) {
    const card = document.createElement('div')
    CARD_STYLE.left = `${cardLeft}px`
    CARD_STYLE.top = `${cardTop}px`
    Object.assign(card.style, CARD_STYLE)
    boardGame.appendChild(card)
    // console.log(card.style.backgroundPosition)
    // pokemon.push(card)
    if ((i + 1) % 5 === 0) {
        cardLeft = 10
        cardTop += 110
    } else {
        cardLeft += 110
    }
}