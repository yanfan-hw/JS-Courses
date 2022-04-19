import { Node } from "./core/Node.js";
import { Sprite } from "./core/Sprite.js";
import { Card } from "./components/Card.js";

class Game extends Node {
    constructor() {
        super();
        this.canClick = true;
        this.firstCard = null;
        this.secondCard = null;
        this._init();
    }
    _init() {
        this._createCards();
        // this._createScore();
    }
    _createCards() {
        this.cards = [];
        for (let index = 0; index < 20; index++) {
            let card = new Card(index);
            card.width = 100;
            card.height = 100;
            let row = index % 5;
            let col = Math.floor(index / 5);
            card.x = row * 100;
            card.y = col * 100;
            card.setValue(index % 10);
            card.elm.addEventListener("click", this.onClickCard.bind(this, card));
            this.addChild(card);
            this.cards.push(card);
        }
        // console.log(this.cards[0])
    }
    _createScore() {

    }

    onClickCard(card) {
        if (!this.canClick) return;
        if (card === this.firstCard) return;
        if (this.firstCard === null) {
            this.firstCard = card;
            // * Open firstCard
            console.log("firstCard", card.value);
        } else {
            this.canClick = false;
            this.secondCard = card;
            // * Open secondCard
            console.log("secondCard", card.value);
            // * CompareCard
            this.compareCard();
        }
    }
    compareCard() {
        if (this.firstCard.value === this.secondCard.value) {
            setTimeout(() => {
                console.log(true, "Hide");
            }, 3000)
        } else {
            setTimeout(() => {
                console.log(false, "Close");
            }, 3000)
        }
        this.canClick = true;
        this.firstCard = null;
        this.secondCard = null;
    }
    resetGame() {

    }
}

let game = new Game();
game.width = 500;
game.height = 400;
game.elm.style.position = "relative";
game.elm.style.margin = "auto";

document.body.appendChild(game.elm);

