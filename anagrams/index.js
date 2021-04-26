function anagrams(stringA, stringB) {
    const hashA = {};
    const hashB = {};
    stringA = stringA.replace(/[^\w]/g, '').toLowerCase();
    stringB = stringB.replace(/[^\w]/g, '').toLowerCase();
    for (let i = 0; i < stringA.length; i++) {
        const charA = stringA[i];
        const charB = stringB[i];
        hashA[charA] = hashA[charA]++ || 1;
        hashB[charB] = hashB[charB]++ || 1;
    }

    for (let key in hashA) {
        if (hashA[key] !== hashB[key]) return false;
    }
    return true;
}

module.exports = anagrams;