const fizzBuzz = require('./index');

describe('FizzBuzz', () => {
    test("=> 7 ", () => {
        const result = fizzBuzz(7);
        expect(result).toEqual(['1', '2', 'fizz', '4', 'buzz', 'fizz', '7'])
    });
});