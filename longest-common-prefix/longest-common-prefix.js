/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = '';
    let length = 0;
    if (typeof strs[0] === 'string') {
        length = strs[0].length;
    }
    for (let i = 0; i < length; i++) {
        const letter = strs[0][i];
        let add = true;
        for (let j = 0; j < strs.length; j++) {
            console.log(strs[j][i], letter);
            if (strs[j][i] !== letter) {
                add = false;
                break;
            }
        }
        if (add) {
            prefix += letter;    
        } else {
            break;
        }
    }
    return prefix;
};