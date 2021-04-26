function vowels(str) {
    let count = 0;
    for (let char of str) {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            count++
        }
    }
    return count;

}

function recursion(str, count = 0) {
    if (!str) return count;
    const char = str[0];
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        count++
    }
    return recursion(str.slice(1, str.length), count);
}

module.exports.vowels = vowels;
module.exports.recursion = recursion;