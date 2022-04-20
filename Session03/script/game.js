import { Node } from "./core/Node.js";
import { Card } from "./components/Card.js";
import { Label } from "./core/Label.js";

class Game extends Node {
    constructor() {
        super();
        this.canClick = true;
        this.firstCard = null;
        this.secondCard = null;
        this.score = 10;
        this.coutCardFlipped = 0;
        this._init();
    }
    _init() {
        this._createCards();
        this._createScore();
        this._createReplayGameBtn();
    }
    _createCards() {
        this.cards = [];
        for (let index = 0; index < 20; index++) {
            let card = new Card(index);
            card.elm.style.transition = "transform 0.5s ease-in-out 0s";
            card.elm.style.transformStyle = "preserve-3d";
            card.elm.style.backgroundColor = "rgb(38, 160, 218)";
            card.elm.style.borderRadius = "5px";
            card.elm.style.border = "2px solid rgb(255, 255, 255)";
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
        this.scoreText = new Label();
        this.scoreText.elm.style.color = "black";
        this.scoreText.elm.style.fontSize = "30px";
        this.scoreText.elm.style.lineHeight = 2;
        this.scoreText.elm.style.width = "100%";
        this.scoreText.elm.style.fontWeight = "bold";
        this.scoreText.elm.style.backgroundColor = "#fff";
        this.scoreText.elm.style.borderRadius = "10px";
        this.scoreText.y = 420;
        this.scoreText.text = "Score: " + this.score;

        this.addChild(this.scoreText);
    }
    _createReplayGameBtn() {
        this.btnReplayGame = new Label();
        this.btnReplayGame.elm.style.color = "rgb(38, 160, 218)"
        this.btnReplayGame.elm.style.fontWeight = "bold";
        this.btnReplayGame.elm.style.textAlign = "center";
        this, this.btnReplayGame.elm.style.cursor = "pointer";
        this.btnReplayGame.elm.style.width = "40%";
        this.btnReplayGame.elm.style.fontSize = "30px";
        this.btnReplayGame.elm.style.lineHeight = 2;
        this.btnReplayGame.elm.style.backgroundColor = "#fff";
        this.btnReplayGame.elm.style.border = "1px solid rgb(38, 160, 218)"
        this.btnReplayGame.elm.style.borderRadius = "10px";
        this.btnReplayGame.y = 420;
        this.btnReplayGame.x = 305;
        this.btnReplayGame.text = "REPLAY GAME";
        this.btnReplayGame.elm.addEventListener("click", this.resetGame.bind(this, this.btnReplayGame));
        this.addChild(this.btnReplayGame);
    }
    animationScore(startScore, endScore) {
        // console.log(startScore, endScore);
        if (startScore === endScore) return;
        const range = endScore - startScore;
        let current = startScore;
        const increment = endScore > startScore ? 1 : -1;
        const stepTime = Math.abs(Math.floor(1000 / range));
        let timeAnimateScore = setInterval(() => {
            current += increment
            this.scoreText.text = "Score: " + current;
            if (current === endScore) {
                clearInterval(timeAnimateScore);
            }
        }, stepTime);
    }
    plusScore(bonusScore) {
        this.animationScore(this.score, this.score + bonusScore);
        this.score = this.score + bonusScore;
        if(this.coutCardFlipped === 10) this.gameWin();
    }
    minusScore(penaltyScore) {
        this.animationScore(this.score, this.score - penaltyScore);
        this.score = this.score - penaltyScore;
        if (this.score === 0) this.gameLose();
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
            this.coutCardFlipped += 1;
            this.plusScore(10);
            setTimeout(() => {
                this.firstCard.hide();
                this.secondCard.hide();
                console.log(true, "Hide");
            }, 500)
        } else {
            this.minusScore(10);
            setTimeout(() => {
                this.firstCard.close();
                this.secondCard.close();
                console.log(false, "Close");
            }, 500)
        }
        setTimeout(() => {
            this.canClick = true;
            this.firstCard = null;
            this.secondCard = null;
        }, 500)
    }
    resetGame() {
        this.canClick = true;
        this.firstCard = null;
        this.secondCard = null;
        this.cards = [];
        this.score = 10;
        this.coutCardFlipped = 0;
        this.scoreText.text = "Score: " + this.score;
        const cards = document.body.getElementsByTagName("div")[0];
        cards.innerHTML = "";
        this._init();
    }
    gamePopup() {
        const cards = document.body.getElementsByTagName("div")[0];
        cards.innerHTML = "";
        this.textPopup = new Label();
        this.textPopup.elm.style.color = "red";
        this.textPopup.elm.style.width = "100%";
        this.textPopup.elm.style.textAlign = "center";
        this.textPopup.elm.style.fontWeight = "bold";
        this.textPopup.elm.style.fontSize = "50px";
        this.textPopup.elm.style.backgroundColor = "#fff";
        this.addChild(this.textPopup);
        return this.textPopup
    }
    gameLose() {
        this.coutCardFlipped = 0;
        const gameLoseText = this.gamePopup();
        gameLoseText.text = "GAME OVER!";
        this._createReplayGameBtn();
    }
    gameWin() {
        this.coutCardFlipped = 0;
        const gameWinText = this.gamePopup();
        gameWinText.text = "WIN! YOUR SCORE: " + this.score;
        this,this._createReplayGameBtn();
    }
}

let game = new Game();
game.width = 505;
game.height = 470;
game.elm.style.position = "relative";
// game.elm.style.borderRadius = "10px";
// game.elm.style.backgroundColor = "#fff";
game.elm.style.margin = "auto";

document.body.appendChild(game.elm);
// console.log(game.children)

