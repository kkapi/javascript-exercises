const removeFromArray = function(array, ...extraValues) {
    const result = [];
    const values = Array.from(extraValues);
    for (let i = 0; i < array.length; i++){
        let flag = true;
        for (let j = 0; j < values.length; j++) {
            if (array[i] === values[j]) {
                flag = false;
            }
        }
        if (flag) {
            result.push(array[i]);
        }
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
