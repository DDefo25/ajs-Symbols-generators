export default class Character {
    constructor(name, type) {
        const possibleTypes = [
            "Bowman",
            "Swordsman",
            "Magician",
            "Daemon",
            "Undead",
            "Zombie",
        ];

        if (!typeof name === "string" || name.length < 2 || name.length > 10) {
            throw new Error("Имя персонажа не соответствует требованиям: строка, min - 2 символа, max - 10");
        }

        if (!possibleTypes.includes(type) && type !== "undefined") {
            throw new Error("Тип персонажа не соответствует существующим");
        }

        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
    }
}
