const {
    vowels,
    recursion
} = require('./index');

describe('vowels', () => {
    test("=> 'Hi There!' ", () => {
        expect(vowels('Hi There!')).toBe(3);
        expect(recursion('Hi There!')).toBe(3);
    });

    test("=> 'Why do you ask?' ", () => {
        expect(vowels('Why do you ask?')).toBe(4);
        expect(recursion('Why do you ask?')).toBe(4);
    });

    test("=> 'Why' ", () => {
        expect(vowels('Why')).toBe(0);
        expect(recursion('Why')).toBe(0);
    });
});