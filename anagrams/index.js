function anagrams(stringA, stringB) {
    const hashA = {};
    const hashB = {};
    stringA = stringA.replace(/[^\w]/g, '').toLowerCase();
    stringB = stringB.replace(/[^\w]/g, '').toLowerCase();
    if (stringA.length !== stringB.length) return false;
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

function anagramsWithSort(stringA, stringB) {
    stringA = stringA.replace(/[^\w]/g, '').toLowerCase();
    stringB = stringB.replace(/[^\w]/g, '').toLowerCase();
    if (stringA.length !== stringB.length) return false;
    const sortedA = stringA.split('').sort((a, b) => a > b ? -1 : 1);
    const sortedB = stringA.split('').sort((a, b) => a > b ? -1 : 1);
    for (let i = 0; i < stringA.length; i++) {
        if (sortedA[i] !== sortedB[i]) return false;
    }
    return true;
}

module.exports.anagrams = anagrams;
module.exports.anagramsWithSort = anagramsWithSort;