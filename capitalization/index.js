function capitalization(str) {
    const array = str.split(' ');
    const words = []
    for (let i = 0; i < array.length; i++) {
        words.push(array[i][0].toUpperCase() + array[i].slice(1));
    }
    return words.join(' ');
}

module.exports = capitalization;