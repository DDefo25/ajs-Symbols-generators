import Team from "../Team";
import Bowman from "../Bowman";

test("Добавление персонажа в команду", () => {
    const expecting = new Set([{ name: "Ivan" }]);
    const team = new Team();
    const char = { name: "Ivan" };
    team.add(char);
    expect(team.members).toEqual(expecting);
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

test("For of итерирует Team", () => {
    const expecting = [{
        name: "Ivan",
        type: "Bowman",
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    }, {
        name: "Petr",
        type: "Bowman",
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    }];
    const team = new Team();
    const char1 = new Bowman("Ivan");
    const char2 = new Bowman("Petr");
    team.addAll(char1, char2);

    const iteratored = () => {
        const result = [];
        for (const member of team) {
            result.push(member);
        }
        return result;
    };

    expect(iteratored()).toEqual(expecting);
});
