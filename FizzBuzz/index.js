function fizzBuzz(n) {
    const array = []
    for (let i = 1; i <= n; i++) {
        let string = '';
        if (i % 3 === 0) {
            string += 'fizz';
        } else if (i % 5 === 0) {
            string += 'buzz';
        }
        if (string && string.length > 0) array.push(string);
        else array.push(`${i}`);
    }
    return array;

}

module.exports = fizzBuzz;