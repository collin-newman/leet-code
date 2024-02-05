/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const freq = {}
    
    nums.forEach(num => {
        if (freq[num]) {
            freq[num]++
        } else {
            freq[num] = 1
        }
    })
    
    const sortedEntries = Object.entries(freq).sort((e1, e2) => {
        return e2[1] - e1[1]
    });
    
    return sortedEntries.slice(0, k).map(e => e[0])
};