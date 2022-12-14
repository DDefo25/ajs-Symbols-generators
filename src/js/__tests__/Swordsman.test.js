import Swordsman from "../Swordsman";

test("creating new Swordsman", () => {
    const expectings = {
        name: "Ivan", health: 100, level: 1, type: "Swordsman", attack: 40, defence: 10,
    };
    const result = new Swordsman("Ivan");
    expect(result).toEqual(expectings);
});
