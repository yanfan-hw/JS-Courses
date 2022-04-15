const boardGame = document.createElement('div')
const BOARDGAME_STYLE = {
    backgroundColor: 'pink',
    position: 'relative',
    margin: '0 auto',
    width: '560px',
    height: '600px'
}

Object.assign(boardGame.style, BOARDGAME_STYLE)
document.body.appendChild(boardGame)

const BASE_URL =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white";
const pokemonImg = [
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

const CARD_STYLE = {
    position: 'absolute',
    fontSize: '16px',
    width: '100px',
    height: '100px',
    top: '',
    left: '',
    borderRadius: '5px',
    backgroundColor: 'hotpink'
}
let cardLeft = 10, cardTop = 10

for (let i = 0; i < 20; i++) {
    const card = document.createElement('div')
    CARD_STYLE.left = `${cardLeft}px`
    CARD_STYLE.top = `${cardTop}px`
    Object.assign(card.style, CARD_STYLE)
    boardGame.appendChild(card)
    if ((i + 1) % 5 === 0) {
        cardLeft = 10
        cardTop += 110
    } else {
        cardLeft += 110
    }
}