function arrayChunk(array, size) {
    const returnArray = [];
    let subArray = []
    for (let i = 0; i < array.length; i++) {
        subArray.push(array[i]);
        if (subArray.length === size) {
            returnArray.push(subArray);
            subArray = [];
        }
    }
    if (subArray.length > 0) returnArray.push(subArray);
    return returnArray;
}

module.exports = arrayChunk;