import Character from "../Character";

test.each([
    ["too short name", ("I"), new Error("Имя персонажа не соответствует требованиям: строка, min - 2 символа, max - 10")],
    ["too long name", ("IvanMacGuffin"), new Error("Имя персонажа не соответствует требованиям: строка, min - 2 символа, max - 10")],
    ["wrong type", ("Ivan", "Tank"), new Error("Тип персонажа не соответствует существующим")],
])(
    ("test %s with %s"),
    (_, params, error) => {
        function createCharacter() {
            const character = new Character(params);
            return character;
        }
        expect(createCharacter).toThrow(error);
    },
);
