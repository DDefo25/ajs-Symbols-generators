import StatMath from "./StatMath";

export default class Magician extends StatMath {
    constructor(name, type = "Magician") {
        super(name, type);
        this.attack = 100;
        this.defence = 40;
    }
}
