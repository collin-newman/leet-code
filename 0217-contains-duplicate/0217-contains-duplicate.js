/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let previous = new Set()
    for (let i = 0; i <= nums.length - 1; i++) {
        if (previous.has(nums[i])) {
            return true
        }
        previous.add(nums[i])
    }
    return false
};