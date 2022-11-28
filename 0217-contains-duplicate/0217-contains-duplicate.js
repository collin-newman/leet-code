/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let previous = new Set()
    for (let num of nums) {
        if (previous.has(num)) {
            return true
        }
        previous.add(num)
    }
    return false
};