import Zombie from "../Zombie";

test("creating new Zombie", () => {
    const expectings = {
        name: "Ivan", health: 100, level: 1, type: "Zombie", attack: 40, defence: 10,
    };
    const result = new Zombie("Ivan");
    expect(result).toEqual(expectings);
});
