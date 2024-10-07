/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // Create a stack to track opening parentheses
    let stack = [];
    
    // Create a map of matching parentheses
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    
    // Loop through each character in the string
    for (let char of s) {
        // If the character is an opening bracket, push it onto the stack
        if (map[char]) {
            stack.push(char);
        } else {
            // If it's a closing bracket, check if it matches the last opened one
            let last = stack.pop();
            if (map[last] !== char) {
                return false;
            }
        }
    }
    
    // If the stack is empty at the end, it means all brackets were properly closed
    return stack.length === 0;
};

module.exports = { isValid };


