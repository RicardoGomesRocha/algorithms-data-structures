const capitalization = require('./index');

describe('capitalization', () => {
    test("=> 'a short sentence' ", () => {
        const str = capitalization('a short sentence');
        expect(str).toBe('A Short Sentence');
    });

    test("=> 'a lazy fox' ", () => {
        const str = capitalization('a lazy fox');
        expect(str).toBe('A Lazy Fox');
    });

    test("=> 'look, it is working!' ", () => {
        const str = capitalization('look, it is working!');
        expect(str).toBe('Look, It Is Working!');
    });
});