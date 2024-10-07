/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;

    for (let i = 0; i < s.length; i++) {
        // Check if the current value is less than the next value
        if (i < s.length - 1 && romanMap[s[i]] < romanMap[s[i + 1]]) {
            total -= romanMap[s[i]]; // Subtract if the next value is larger
        } else {
            total += romanMap[s[i]]; // Otherwise, add the value
        }
    }

    return total; // Return the total value
};

// Export the function for testing
module.exports = { romanToInt };
