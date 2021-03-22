/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const testString = String(x);
    const limiter = Math.floor(testString.length / 2);
    for (let i = 0; i < limiter; i++) {
        const left = i;
        const right = testString.length - (i + 1);
        if (testString[left] === testString[right]) {
            continue;
        } else {
            return false;
        }
    }
    return true;
};