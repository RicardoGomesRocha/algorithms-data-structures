function maxChar(str) {
    const hash = {};
    let maxChar = null;
    let max = -1;
    for (let i = 0; i < str.length; i++) {
        if (!hash[str[i]]) hash[str[i]] = 0;
        ++hash[str[i]];
        if (hash[str[i]] > max) {
            max = hash[str[i]];
            maxChar = i;
        }
    }
    return maxChar;
}

module.exports = maxChar;