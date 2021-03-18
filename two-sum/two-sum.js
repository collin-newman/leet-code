/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const remainder = target - nums[i];
        const otherNums = nums.slice();
        otherNums[i] = Infinity;
        if (otherNums.indexOf(remainder) !== -1) {
            return [i, otherNums.indexOf(remainder)];
        }
    }
};