import StatMath from "./StatMath";

export default class Daemon extends StatMath {
    constructor(name, type = "Daemon", ...args) {
        super(name, type, ...args);
        this.defence = 40;
        this.attack = 100;
    }
}
