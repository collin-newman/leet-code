/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // create 2 pointers
    // left index is 0
    // right index is the length of the array -1 
    // calculat volume
    let left = 0;
    let right = height.length - 1;
    let width = Math.abs(right - left)
    let minValue = Math.min(height[left], height[right])
    let volume = width * minValue

    
    // while the left does not equal the right
    while(left !== right) {
        // calculate the value and update if larger
        width = Math.abs(right - left)
        minValue = Math.min(height[left], height[right])
        const currentVolume = width * minValue
        if (currentVolume > volume) {
            volume = currentVolume
        }
        // move the lower pointer in by 1
        height[left] > height[right] ? right-- : left++
    }
    
    return volume
};