const repeatString = function(stringRepeat, timesRepeat) {
    let finalString = '';

    if (timesRepeat === 0) return '';

    if (timesRepeat === -1) return 'ERROR';

    if (timesRepeat === '') return '';

    for (let i = 0; i < timesRepeat; i++) {
        finalString += stringRepeat;
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
