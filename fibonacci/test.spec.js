const {
    fib,
    fibRecursive
} = require('./index');

describe('fibonacci', () => {
    test('Fib function is defined', () => {
        expect(typeof fib).toBe('function');
        expect(typeof fibRecursive).toBe('function');
    });

    test('calculates correct fib value for 1', () => {
        expect(fib(1)).toEqual(1);
        expect(fibRecursive(1)).toEqual(1);
    });

    test('calculates correct fib value for 2', () => {
        expect(fib(2)).toEqual(1);
        expect(fibRecursive(2)).toEqual(1);
    });

    test('calculates correct fib value for 3', () => {
        expect(fib(3)).toEqual(2);
        expect(fibRecursive(3)).toEqual(2);
    });

    test('calculates correct fib value for 4', () => {
        expect(fib(4)).toEqual(3);
        expect(fibRecursive(4)).toEqual(3);
    });

    test('calculates correct fib value for 5', () => {
        expect(fib(5)).toEqual(5);
        expect(fibRecursive(5)).toEqual(5);
    });

    test('calculates correct fib value for 5', () => {
        expect(fib(8)).toEqual(21);
        expect(fibRecursive(8)).toEqual(21);
    });

    test('calculates correct fib value for 15', () => {
        expect(fib(39)).toBe(63245986);
        expect(fibRecursive(39)).toBe(63245986);
    });
});