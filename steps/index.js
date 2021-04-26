function directions(n) {
    for (let i = 0; i < n; i++) {
        let line = '';
        for (let j = 0; j < n; j++) {
            if (i <= j) {
                line += '#'
            } else {
                line += ' '
            }
        }
        console.log(line);
    }
}

function recursion(n, row = 0, stair = '') {
    if (n === row) {
        return;
    }

    if (n === stair.length) {
        console.log(stair);
        return recursion(n, ++row);
    }

    if (stair.length <= row) {
        return recursion(n, row, `${stair}#`);
    }

    return recursion(n, row, `${stair} `);
}

module.exports.directions = directions;
module.exports.recursion = recursion;