/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let minDiff = Infinity
    const numSet = {}
    
    for (let i = 0; i < nums.length; i++) {
        if (numSet[nums[i]] === undefined) {
            numSet[nums[i]] = i
        } else {
            const previousIndex = numSet[nums[i]]
            const diff = Math.abs(previousIndex - i)
            if (diff < minDiff) {
                minDiff = diff
            }
            
            numSet[nums[i]] = i
        }
    }

    return minDiff <= k
};