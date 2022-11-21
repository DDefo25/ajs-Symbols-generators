import Team from "../Team";

test("Добавление персонажа в команду", () => {
    const expecting = [{ name: "Ivan" }];
    const team = new Team();
    const char = { name: "Ivan" };
    team.add(char);
    expect(team.toArray()).toEqual(expecting);
});

test("Добавление нескольких персонажей в команду", () => {
    const expecting = [{ name: "Ivan" }, { name: "Petr" }];
    const team = new Team();
    const char1 = { name: "Ivan" };
    const char2 = { name: "Petr" };

    team.addAll(char1, char2, char1);
    expect(team.toArray()).toEqual(expecting);
});

test("Ошибка при добавлении персонажа, который уже в команде", () => {
    const expecting = new Error("Персонаж уже в команде");
    const team = new Team();
    const char = { name: "Ivan" };
    team.add(char);
    const duplicateAdding = () => {
        team.add(char);
    };
    expect(duplicateAdding).toThrow(expecting);
});
