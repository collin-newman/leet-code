class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        index = 0
        while index < len(nums):
            if nums.count(nums[index]) > 1:
                del nums[index]
            else:
                index = index + 1
        
                        
                            
                            
                    
                