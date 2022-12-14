import Bowman from "../Bowman";

test("creating new Bowman", () => {
    const expectings = {
        name: "Ivan", health: 100, level: 1, type: "Bowman", attack: 25, defence: 25,
    };
    const result = new Bowman("Ivan");
    expect(result).toEqual(expectings);
});

test("error of wrong type", () => {
    const expecting = new Error("Тип персонажа не соответствует существующим");
    function createBowman() {
        const result = new Bowman("Ivan", "Tank");
        return result;
    }
    expect(createBowman).toThrow(expecting);
});
