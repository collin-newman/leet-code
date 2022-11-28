/**
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, indexDiff, valueDiff) {
    for (let i = 0; i < nums.length - 1; i++) {
        const jMax = i + indexDiff > nums.length ? nums.length - 1 : i + indexDiff
        for (let j = i + 1; j <= jMax; j++) {
            if (i !== j && Math.abs(i - j) <= indexDiff && Math.abs(nums[i] - nums[j]) <= valueDiff) {
                return true
            }
        }
    }
    return false
};