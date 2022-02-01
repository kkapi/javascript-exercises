const sumAll = function(...numbers) {
    const array = [...numbers].sort();
    for(item of array) {
        if (item < 0 || typeof(item) != "number") {
            return "ERROR";
        }
    }
    return ((array[0] + array[1]) * (array[1] - array[0] + 1) / 2);
};

// Do not edit below this line
module.exports = sumAll;
