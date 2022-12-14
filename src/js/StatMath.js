import Character from "./Character";

export default class StatMath extends Character {
    constructor(name, type, dist = 1) {
        super(name, type);
        this.dist = dist;
    }

    get attack() {
        const multiply = this._attack * (1 - (this.dist - 1) / 10);
        return multiply >= 0 ? multiply : 0;
    }

    set attack(num) {
        this._attack = num;
    }

    get stoned() {
        const multiply = Math.floor(this.attack - Math.log2(this.dist) * 5);
        return multiply >= 0 ? multiply : 0;
    }

    set stoned(num) {
        this._stoned = num;
    }
}
