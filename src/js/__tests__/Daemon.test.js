import Daemon from "../Daemon";

test("creating new Daemon", () => {
    const expectings = {
        name: "Ivan", health: 100, level: 1, type: "Daemon", _attack: 100, defence: 40, dist: 1,
    };
    const result = new Daemon("Ivan");
    expect(result).toEqual(expectings);
});

test("set stoned", () => {
    const expectings = 90;
    const result = new Daemon("Ivan");
    result.dist = 2;
    result.stoned = 85;
    expect(result.attack).toEqual(expectings);
});

test.each([
    ["attack on 1 cell", 1, 100],
    ["attack on 6 cell", 6, 50],
    ["attack on 12 cell", 12, 0],
])(
    ("test %s with %d"),
    (_, dist, result) => {
        const daemon = new Daemon("Ivan");
        daemon.dist = dist;
        expect(daemon.attack).toBe(result);
    },
);

test.each([
    ["stoned attack on 1 cell", 1, 100],
    ["stoned attack on 2 cell", 2, 85],
    ["stoned attack on 6 cell", 6, 37],
    ["stoned attack on 9 cell", 9, 4],
    ["stoned attack on 10 cell", 10, 0],
])(
    ("test %s with %d"),
    (_, dist, result) => {
        const daemon = new Daemon("Ivan");
        daemon.dist = dist;
        expect(daemon.stoned).toBe(result);
    },
);
