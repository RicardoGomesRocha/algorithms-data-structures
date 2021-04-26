function pyramid(n) {
    const midpoint = Math.floor((2 * (n - 1) / 2));
    for (let row = 0; row < n; row++) {
        let line = '';
        for (let column = 0; column < 2 * n - 1; column++) {
            if (midpoint - row <= column && midpoint + row >= column) {
                line += '#'
            } else {
                line += ' '
            }
        }
        console.log(line);
    }
}

function recursion(n, row = 0, level = '') {
    if (row === n) {
        return;
    }

    if (level.length === 2 * n - 1) {
        console.log(level);
        return pyramid(n, row + 1);
    }

    const midPoint = Math.floor((2 * n - 1) / 2);
    let char;
    if (midPoint - row <= level.length && midPoint + row >= level.length) {
        char = '#';
    } else {
        char = ' ';
    }
    return recursion(n, row, `${level}${char}`);
}

module.exports.pyramid = pyramid;
module.exports.recursion = recursion;