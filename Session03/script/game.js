import { Node } from "./core/Node.js";
import { Card } from "./components/Card.js";

class Game extends Node {
    constructor() {
        super();
        this.canClick = true;
        this.firstCard = null;
        this.secondCard = null;
        this.score = 100;
        this._init();
    }
    _init() {
        this._createCards();
        this._createScore();
    }
    _createCards() {
        this.cards = [];
        for (let index = 0; index < 20; index++) {
            let card = new Card(index);
            card.elm.style.transition = "transform 0.5s ease-in-out 0s";
            card.elm.style.transformStyle = "preserve-3d";
            card.width = 100;
            card.height = 100;
            let row = index % 5;
            let col = Math.floor(index / 5);
            card.x = row * 100;
            card.y = col * 100;
            card.elm.addEventListener("click", this.onClickCard.bind(this, card));
            this.addChild(card);
            this.cards.push(card);
        }
        this.shuffleCards(this.cards)
    }
    _createScore() {
        let scoreSpanText = document.createElement("span");
        game.appendChild(scoreSpanText)
    }

    shuffleCards(array) {
        // array = array.sort(() => {
        //     return Math.random() - 0.5
        // })
        array.forEach(element => {
            element.setValue(element.index % 10)
        });
    }

    onClickCard(card) {
        if (!this.canClick) return;
        if (card === this.firstCard) return;
        if (this.firstCard === null) {
            this.firstCard = card;
            // * Open firstCard
            this.firstCard.open()
            console.log("firstCard", card.value);
        } else {
            this.canClick = false;
            this.secondCard = card;
            // * Open secondCard
            this.secondCard.open();
            console.log("secondCard", card.value);
            // * CompareCard
            this.compareCard();
        }
    }
    compareCard() {
        if (this.firstCard.value === this.secondCard.value) {
            setTimeout(() => {
                this.firstCard.hide();
                this.secondCard.hide();
                console.log(true, "Hide");
            }, 5000)
        } else {
            setTimeout(() => {
                this.firstCard.close();
                this.secondCard.close();
                console.log(false, "Close");
            }, 5000)
        }
        setTimeout(() => {
            this.canClick = true;
            this.firstCard = null;
            this.secondCard = null;
        }, 5000)
    }
    resetGame() {
        this.canClick = true;
        this.firstCard = null;
        this.secondCard = null;
        this.cards = []
        this.removeChild(game.children)
    }
}

let game = new Game();
game.width = 500;
game.height = 400;
game.elm.style.position = "relative";
game.elm.style.margin = "auto";

document.body.appendChild(game.elm);

game.resetGame()
// console.log(game)

