/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (new Set(s).size === 1) {
        return s
    }
    if (s.length == 2) {
        return s[0] === s[1] ? s : s[0]
    }

    if (s.length === 3) {
        if (s[0] === s[2]) {
            return s
        }
        if (s[0] === s[1]) {
            return s.slice(0,2)
        }
        if (s[1] === s[2]) {
            return s.slice(1, 3)
        }
        return s[0]
    }
    let left = 0
    let mid = 1
    let right = 2
    const result = []
    let iterations = 0
    
    // Three pointer
    while (s[mid + 1] && iterations < 1000000) {    
        iterations++
        console.log(s[left], s[mid], s[right])
        if (s[left] === s[right] && s[left]) {
            result.push(s.slice(left, right + 1))
            left--
            right++ 
        } else {
            mid++
            left = mid - 1
            right = mid + 1
        }   
    }
    left = 1
    right = 2
    let pointer = 2
    iterations = 0
    // 2 pointer
    while (s[right] && s[pointer - 1] && iterations < 1000000) {   
        iterations++
        if (s[left] === s[right] && s[left]) {
            result.push(s.slice(left, right + 1))
            // pointer++
            left--
            right++ 
        } else {
            left = pointer - 1
            right = pointer
            pointer++
        }   
        // console.log(s[left], s[right], left, right, pointer)
    }
    return result.sort((w1, w2) => w2.length - w1.length)[0] || s[0]
};