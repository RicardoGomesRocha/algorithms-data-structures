const {
    pyramid,
    recursion
} = require('./index');

describe('pyramid', () => {
    test("=> '(3)' ", () => {
        pyramid(10);
        recursion(10);
    });
});