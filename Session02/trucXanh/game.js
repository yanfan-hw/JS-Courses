// ! PokeAPI
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
const pokeballImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/512px-Pok%C3%A9_Ball_icon.png'
var pokemonsArr = []
var selectedPokemonIndex = null
var isDisabled
var score = 500

function createBoardGame() {
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

    return boardGame
}

function createBtnPokemon(index) {
    const btnPokemon = document.createElement('button')
    btnPokemon.id = `pokemon-${index}`
    const BTNPOKEMON_STYLE = {
        display: 'block',
        position: 'absolute',
        border: '0',
        width: '100px',
        height: '100px',
        top: 0,
        left: 0,
        padding: 0,
        backgroundColor: 'transparent',
        outline: 0,
        cursor: 'pointer'
    }

    Object.assign(btnPokemon.style, BTNPOKEMON_STYLE)
    btnPokemon.onclick = () => {
        onPokemonSelect(index)
    }
    return btnPokemon
}

function onPokemonSelect(index) {
    if (!isDisabled && score > 0) {
        // * Pokemon don't be selected
        if (selectedPokemonIndex === null) {
            selectedPokemonIndex = index
            // * Open card Pokemon of btn[index]
            const cardPokemonSelect = document.getElementById('pokemon-card-' + index)
            cardPokemonSelect.style.transform = 'rotateY(180deg)'
        } else {
            // * Open card Pokemon
            const cardPokemonSelect = document.getElementById('pokemon-card-' + index)
            cardPokemonSelect.style.transform = 'rotateY(180deg)'

            // * Pokemon 1 == Pokemon 2
            if (pokemonsArr[selectedPokemonIndex] == pokemonsArr[index]) {
                const btnPokemonSelect1 = document.getElementById('pokemon-' + selectedPokemonIndex)
                btnPokemonSelect1.disabled = true
                const btnPokemonSelect2 = document.getElementById('pokemon-' + index)
                btnPokemonSelect2.disabled = true
                selectedPokemonIndex = null

                score += 100
                console.log('Matched!', score)
            } else {

                isDisabled = true
                // * Hidden two pokemons selected not right
                setTimeout(() => {
                    const cardPokemonSelect1 = document.getElementById('pokemon-card-' + selectedPokemonIndex)
                    cardPokemonSelect1.style.transform = 'unset'
                    const cardPokemonSelect2 = document.getElementById('pokemon-card-' + index)
                    cardPokemonSelect2.style.transform = 'unset'
                    selectedPokemonIndex = null
                    isDisabled = false
                }, 700)

                score -= 50
                console.log('False', score)

                if (score === 0)
                console.log('Loser')
            }
        }
    }
}

function createCardPokemon(index) {
    const cardPokemon = document.createElement('div')
    cardPokemon.id = `pokemon-card-${index}`
    const CARDPOKEMON_STYLE = {
        position: 'relative',
        width: '100%',
        height: '100%',
        borderRadius: '5px',
        border: '2px solid #fff',
        textAlign: 'center',
        backgroundColor: 'rgb(38, 160, 218)',
        transition: 'transform .5s ease-in-out',
        transformStyle: 'preserve-3d',
    }

    Object.assign(cardPokemon.style, CARDPOKEMON_STYLE)

    return cardPokemon
}

function createPokeball() {
    const coverPokemon = document.createElement('div')
    const COVERPOKEMON_STYLE = {
        // position: 'absolute',
        // top: 0,
        // left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url(${pokeballImg})`,
        backgroundSize: '48px 48px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backfaceVisibility: 'hidden'
    }

    Object.assign(coverPokemon.style, COVERPOKEMON_STYLE)
    return coverPokemon
}

function createImgPokemon(index) {
    const imgPokemon = document.createElement('img')
    const IMGPOKEMON_STYLE = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        textAlign: 'center',
        transform: 'rotateY(180deg)',
        backfaceVisibility: 'hidden'
    }
    imgPokemon.src = `${pokemonImgs[index].image}`
    imgPokemon.alt = `Pokemon ${index}`
    Object.assign(imgPokemon.style, IMGPOKEMON_STYLE)

    return imgPokemon
}

function createPokemons() {
    // * Create random pokemonsArr
    pokemonsArr = []

    for (let i = 0; i < 10; i++) {
        pokemonsArr.push(i)
        pokemonsArr.push(i)
    }

    pokemonsArr = pokemonsArr.sort(() => {
        return Math.random() - 0.5
    })

    // * Create boardGame
    let boardGame = createBoardGame()
    // * Positon btnPokemon
    let defaultTop = 10, defaultLeft = 10

    for (let i = 0; i < pokemonsArr.length; i++) {
        let btnPokemon = createBtnPokemon(i)
        btnPokemon.style.top = `${defaultTop}px`
        btnPokemon.style.left = `${defaultLeft}px`
        boardGame.appendChild(btnPokemon)


        if (((i + 1) % 5) === 0) {
            defaultTop = defaultTop + 110
            defaultLeft = 10
        } else {
            defaultLeft = defaultLeft + 110
        }

        let cardPokemon = createCardPokemon(i)
        btnPokemon.appendChild(cardPokemon)

        const idmagePokemon = pokemonsArr[i]
        let coverPokemon = createPokeball()
        cardPokemon.appendChild(coverPokemon)

        let imgPokemon = createImgPokemon(idmagePokemon)
        cardPokemon.appendChild(imgPokemon)
    }
}

function gameStart() {
    createPokemons()
}

// gameStart()