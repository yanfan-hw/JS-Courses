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
var score = 100
// * Senconds
var timeNum = 100

function createBoardGame() {
    const boardGame = document.createElement('div')
    const BOARDGAME_STYLE = {
        // background: 'radial-gradient(circle,#020024 0,#090979 35%,#00d4ff 100%)',
        position: 'relative',
        margin: '0 auto',
        width: '560px',
        height: '450px'
    }

    Object.assign(boardGame.style, BOARDGAME_STYLE)
    document.body.appendChild(boardGame)

    return boardGame
}

function createGameControl() {
    const gameControl = document.createElement('div')
    const GAMECONTROL_STYLE = {
        display: 'flex',
        flexDirection: 'column'
    }
    Object.assign(gameControl.style, GAMECONTROL_STYLE)
    document.body.appendChild(gameControl)

    return gameControl
}

function createScore() {
    const scoreGame = document.createElement('div')
    scoreGame.id = 'score-game'
    scoreGame.innerText = `Score: ${score}`
    const SCOREGAME_STYLE = {
        color: '#fff',
        fontSize: '20px',
        marginBottom: '10px'
    }
    Object.assign(scoreGame.style, SCOREGAME_STYLE)
    return scoreGame
}

function createTimeRemaining() {
    const timeRemaining = document.createElement('div')
    timeRemaining.id = 'coutdown-time'
    timeRemaining.innerText = `TimingRemaining: ${timeNum}s`
    const TIMEREMAINING_STYLE = {
        color: '#fff',
        fontSize: '20px',
        marginBottom: '10px'
    }
    Object.assign(timeRemaining.style, TIMEREMAINING_STYLE)
    return timeRemaining
}

function createBtnReplayGame() {
    const btnReaplayGame = document.createElement('button')
    btnReaplayGame.classList.add('play-game')
    btnReaplayGame.innerText = 'RE-PLAY GAME'
    btnReaplayGame.onclick = () => {
        replayGame()
    }
    return btnReaplayGame
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

            // * Disabled btnPokemonSelect
            const btnPokemonSlect = document.getElementById('pokemon-' + selectedPokemonIndex)
            btnPokemonSlect.disabled = true
            const cardPokemonSelect = document.getElementById('pokemon-card-' + index)
            cardPokemonSelect.style.transform = 'rotateY(180deg)'
        } else {
            // * Open card Pokemon
            const cardPokemonSelect = document.getElementById('pokemon-card-' + index)
            cardPokemonSelect.style.transform = 'rotateY(180deg)'

            // * Pokemon 1 == Pokemon 2
            if (pokemonsArr[selectedPokemonIndex] == pokemonsArr[index]) {
                setTimeout(() => {
                    const btnPokemonSelect1 = document.getElementById('pokemon-' + selectedPokemonIndex)
                    btnPokemonSelect1.remove()
                    // btnPokemonSelect1.disabled = true
                    const btnPokemonSelect2 = document.getElementById('pokemon-' + index)
                    // btnPokemonSelect2.disabled = true
                    btnPokemonSelect2.remove()
                    selectedPokemonIndex = null

                    // * ++Score
                    plusScorePlayer(100)
                    // score += 100
                }, 800)
            } else {

                isDisabled = true
                // * Hidden two pokemons selected not right
                setTimeout(() => {
                    const btnPokemonSelect1 = document.getElementById('pokemon-' + selectedPokemonIndex)
                    btnPokemonSelect1.disabled = false
                    const cardPokemonSelect1 = document.getElementById('pokemon-card-' + selectedPokemonIndex)
                    cardPokemonSelect1.style.transform = 'unset'
                    const cardPokemonSelect2 = document.getElementById('pokemon-card-' + index)
                    cardPokemonSelect2.style.transform = 'unset'

                    selectedPokemonIndex = null
                    isDisabled = false
                }, 700)

                // * --Score
                minusScorePlayer(50)
                // score -= 50
                console.log('False', score)
                // console.log(isDisabled)
            }
        }
    }
}

function plusScorePlayer(bonusScore) {
    const scoreGame = document.getElementById('score-game')
    score += bonusScore
    console.log('Matched!', score)
    scoreGame.innerText = `Score: ${score}`
    return score
}

function minusScorePlayer(penaltyScore) {
    const scoreGame = document.getElementById('score-game')
    score -= penaltyScore
    score === 0 ? scoreGame.innerText = 'Lose game!' : scoreGame.innerText = `Score: ${score}`
    return score
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

    // * Create GameControl
    let gameControl = createGameControl()
    let score = createScore()
    let timeRemaining = createTimeRemaining()
    let btnReaplayGame = createBtnReplayGame()
    gameControl.appendChild(score)
    gameControl.appendChild(timeRemaining)
    gameControl.appendChild(btnReaplayGame)

    // * Create boardGame
    let boardGame = createBoardGame()
    // * Positon default btnPokemon

    // console.log(score)

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
        console.log(i, idmagePokemon)
    }
}

function gameStart() {
    createPokemons()

    // * Hidden btnPlayGame
    const btnPlayGame = document.getElementById('play-game')
    btnPlayGame.style.display = 'none'

    // * Coutdowning Time
    coutdownTime(timeNum)
}

function coutdownTime(num) {
    if (num >= 0 && score > 0) {
        setTimeout(() => {
            // * Display time coutdown
            displayTimeCoutdown(num)
            coutdownTime(num - 1)
        }, 1000)
    } else {
        gameOver()
    }
}

function displayTimeCoutdown(num) {
    let timeTxt = ''
    if (num <= 0) {
        timeTxt = '00:00s'
    }
    const minutes = Math.floor(num / 60)
    const seconds = num % 60
    timeTxt = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0')
    // console.log(timeTxt)
    const timeRemaining = document.getElementById('coutdown-time')
    timeRemaining.innerText = `Timing remaining: ${timeTxt}`
}

function gameOver() {
    const scoreGame = document.getElementById('score-game')
    scoreGame.innerText = 'Game over!'
    score = 0
    console.log(score)
    return score
}

function replayGame() {
    const boardGame = document.selec
}
