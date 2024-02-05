function longestConsecutive(nums: number[]): number {
  const numSet = new Set(nums)
  let count = 0;

  nums.forEach((num, index) => {
    if (!numSet.has(num - 1)) {
      let tempCount = 0
      let tempNum = num
      tempCount++;
      while (numSet.has(tempNum + 1)) {
        tempCount++;
        tempNum++;
      }
      if (tempCount > count) {
        count = tempCount
      }
    }
  })
  return count
};