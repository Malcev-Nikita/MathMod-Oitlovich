const minelm = require('./src/js/minelm');


test(
    'Проверка функции minelm',
    () => {
        expect(minelm([900, -100, -200, 0], undefined, undefined)).toBe(-200);
    }
)

test(
    'Проверка функции minelm',
    () => {
        expect(minelm([900, -100, -200, 0], true, true)).toBe(2);
    }
)

test(
    'Проверка функции minelm',
    () => {
        expect(minelm([900, -100, -200, 0], undefined, undefined)).toBe(-200);
    }
)

test(
    'Проверка функции minelm',
    () => {
        expect(minelm([-0, -1, -200], undefined, undefined)).toBe(-20);
    }
)

test(
    'Проверка функции minelm',
    () => {
        expect(minelm([-0, -1, -200], true, true)).toBe(1);
    }
)

test(
    'Проверка функции minelm',
    () => {
        expect(minelm([500, -100, 200, 12000], false, true)).toBe(-100);
    }
)

test(
    'Проверка функции minelm',
    () => {
        expect(minelm([500, -100, 200, 12000], true, true)).toBe(1);
    }
)

test(
    'Проверка функции minelm',
    () => {
        expect(minelm([500, -100, 200, 12000], undefined, undefined)).toBe(-100);
    }
)

test(
    'Проверка функции minelm',
    () => {
        expect(minelm([-1, -0, -100], undefined, undefined)).toBe(-100);
    }
)

test(
    'Проверка функции minelm',
    () => {
        expect(minelm([-1, -0, -100], true, true)).toBe(0);
    }
)