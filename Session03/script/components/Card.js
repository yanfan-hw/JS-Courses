import { Node } from "../core/Node.js";
import { Sprite } from "../core/Sprite.js";
import { Label } from "../core/Label.js";
const BASE_URL =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white";

export class Card extends Node {
    constructor(index) {
        super();
        this.index = index;
        this.value = null;
        this._createSprite();
        this._createCover();
        this._createLabel();
    }
    _createSprite() {
        this.sprite = new Sprite();
        this.sprite.width = 100;
        this.sprite.height = 100;
        this.addChild(this.sprite);
    }
    _createCover() {
        let cover = new Node();
        cover.width = 100;
        cover.height = 100;
        // cover.elm.style.backgroundColor = "orange";
        // cover.elm.style.border = "solid 1px blue";
        cover.elm.style.backfaceVisibility = "hidden";
        cover.elm.style.cursor = "pointer";
        this.cover = cover;
        this.addChild(this.cover);
    }
    _createLabel() {
        let label = new Label();
        label.text = this.index;
        label.elm.style.color = "#fff"
        label.elm.style.fontSize = "20px";
        label.elm.style.lineHeight = 1;
        label.elm.style.cursor = "pointer";
        label.elm.style.backfaceVisibility = "hidden";
        label.x = 40;
        label.y = 40;
        this.label = label;
        this.addChild(this.label);
    }
    setValue(value) {
        this.value = value;
        this.sprite.path = `${BASE_URL}/${value + 1}.png`
    }
    open() {
        this.elm.style.transform = "rotateY(180deg)";
    }
    close() {
        this.elm.style.transform = "unset";
    }
    hide() {
        this.elm.style.display = "none";
    }
}