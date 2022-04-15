const boardGame = document.createElement('div')
const boardGame_style = {
    backgroundColor: 'pink',
    position: 'relative',
    margin: '0 auto',
    width: '700px',
    height: '800px'
}

Object.assign(boardGame.style, boardGame_style)
document.body.appendChild(boardGame)

const arrCards = []
const card = document.createElement('div')
const card_style = {
    position: 'absolute',
    fontSize: '16px',
    width: '100px',
    height: '100px',
    top: '0',
    left: '0',
    borderRadius: '5px',
    backgroundColor: 'red'
}
Object.assign(card.style, card_style)

for (let i = 0; i < 20; i++) {
    
    boardGame.appendChild(card)
}

console.log(card.style)