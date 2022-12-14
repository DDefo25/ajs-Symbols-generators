export default class Team {
    constructor() {
        this.members = new Set();
    }

    add(character) {
        if (!this.members.has(character)) {
            this.members.add(character);
        } else {
            throw new Error("Персонаж уже в команде");
        }
    }

    addAll(...characters) {
        characters.forEach((character) => {
            this.members.add(character);
        });
    }

    toArray() {
        return [...this.members];
    }

    * [Symbol.iterator]() {
        const iterable = this.members.values();
        for (let i = 0; i < this.members.size; i += 1) {
            yield iterable.next().value;
        }
    }
}
