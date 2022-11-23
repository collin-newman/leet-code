/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 1) {
        return strs[0]
    }
    let result = ''
    
    let words = strs.sort((w1, w2) => w1.length - w2.length)
    const longestWord = strs.pop()
    for (let i = 0; i <= longestWord.length; i++) {
        if (words.every(word => word.startsWith(longestWord.slice(0, i)))) {
            result = longestWord.slice(0, i)
        }
    }

    
    return result
};



