const anagrams = require('./index');

describe('anagrams', () => {
    test("=> ('rail safety', 'fairy tales')", () => {
        const stringA = 'rail safety';
        const stringB = 'fairy tales';
        expect(anagrams(stringA, stringB)).toBeTruthy();
    });

    test("=> ('rail safety', 'fairy tales')", () => {
        const stringA = 'rail safety';
        const stringB = 'fairy tales';
        expect(anagrams(stringA, stringB)).toBeTruthy();
    });

    test("=> ('RAIL! SAFETY', 'FAIRY TALES')", () => {
        const stringA = 'RAIL! SAFETY!';
        const stringB = 'FAIRY TALES';
        expect(anagrams(stringA, stringB)).toBeTruthy();
    });

    test("=> ('Hi there', 'Bye there')", () => {
        const stringA = 'Hi there';
        const stringB = 'Bye there';
        expect(anagrams(stringA, stringB)).toBeFalsy();
    });
});