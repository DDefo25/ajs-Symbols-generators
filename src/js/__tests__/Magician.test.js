import Magician from "../Magician";

test("creating new Magician", () => {
    const expectings = {
        name: "Ivan", health: 100, level: 1, type: "Magician", _attack: 100, defence: 40, dist: 1,
    };
    const result = new Magician("Ivan");
    expect(result).toEqual(expectings);
});
