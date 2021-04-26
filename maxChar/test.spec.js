const maxChar = require('./index');

describe('maxChar', () => {
    test("=> 'abcccccd' ", () => {
        const char = maxChar('abcccccd');
        expect(char).toBe(char);
    });

    test("=> 'apple 1231111' ", () => {
        const char = maxChar('1231111');
        expect(char).toBe(char);
    });
});