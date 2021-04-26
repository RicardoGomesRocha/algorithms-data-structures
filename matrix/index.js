function matrix(n) {
    let mtx = getEmptyMatrix(n);
    let count = 1;
    const max = (n * n) + 1;
    let row = 0;
    let column = 0;
    let direction = 'right';
    let completeCycles = 0;
    while (count < max) {
        mtx[row][column] = count;
        if (direction === 'right') {
            if (column + 1 >= n - completeCycles) direction = 'down';
            else ++column;
        }

        if (direction === 'down') {
            if (row + 1 >= n - completeCycles) direction = 'left';
            else ++row;
        }

        if (direction === 'left') {
            if (column - 1 === (-1 + completeCycles)) direction = 'up';
            else --column;
        }

        if (direction === 'up') {
            if (row - 1 === completeCycles) {
                direction = 'right';
                completeCycles++;
                row = completeCycles;
                column = completeCycles;
            } else row--;
        }
        ++count;
    }
    return mtx;
}

function getEmptyMatrix(n) {
    let mtx = [];
    for (let i = 0; i < n; i++) {
        let aux = []
        for (let j = 0; j < n; j++) {
            aux.push(-1);
        }
        mtx.push(aux);
    }
    return mtx;
}

module.exports.matrix = matrix;
module.exports.recursion = recursion;