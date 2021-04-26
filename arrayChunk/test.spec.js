const arrayChunk = require('./index');

describe('arrayChunk', () => {
    test("=> ([1,2,3,4], 2) ", () => {
        const result = arrayChunk([1, 2, 3, 4], 2);
        expect(result).toEqual([
            [1, 2],
            [3, 4]
        ]);
    });

    test("=> ([1,2,3,4,5], 2) ", () => {
        const result = arrayChunk([1, 2, 3, 4, 5], 2);
        expect(result).toEqual([
            [1, 2],
            [3, 4],
            [5]
        ]);
    });

    test("=> ([1,2,3,4,5,6,7,8], 3) ", () => {
        const result = arrayChunk([1, 2, 3, 4, 5, 6, 7, 8], 3);
        expect(result).toEqual([
            [1, 2, 3],
            [4, 5, 6],
            [7, 8]
        ]);
    });

    test("=> ([1,2,3,4,5], 4) ", () => {
        const result = arrayChunk([1, 2, 3, 4, 5], 4);
        expect(result).toEqual([
            [1, 2, 3, 4],
            [5]
        ]);
    });

    test("=> ([1,2,3,4,5], 10) ", () => {
        const result = arrayChunk([1, 2, 3, 4, 5], 10);
        expect(result).toEqual([
            [1, 2, 3, 4, 5]
        ]);
    });
});