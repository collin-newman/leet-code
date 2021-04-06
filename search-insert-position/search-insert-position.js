/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (nums.length === 0) { return 0; }
    
    const index = nums.indexOf(target);
    if (index !== -1) { return index; }
    
    if (nums[0] < target) {
        let num = target;
        while (nums.indexOf(num) === -1) {
            num--;
        }
        let index = nums.indexOf(num);
        return index + 1;
    } else {
        return 0;
    }
};