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

const arrCards = []

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