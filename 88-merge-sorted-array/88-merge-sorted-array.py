class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        if len(nums1) == 0:
            nums1 = nums2
            return
        
        if len(nums1) == 1 and nums1[0] == 0:
            for num in nums2:
                nums1.append(num)
                nums1.pop(0)
            return
        
        
        mergeArray = nums1
        insertIndex = 0
        inserts = 0
        for _ in range(len(nums2)):
            numToInsert = nums2[0]
            for index in range(insertIndex, (m + n)):
                if (index) < (m + n):
                    if numToInsert <= mergeArray[index] or (mergeArray[index] == 0 and index >= (m + inserts)):
                        insertIndex = index
                        mergeArray.insert(insertIndex, numToInsert)
                        nums2.pop(0)
                        mergeArray.pop(len(mergeArray) - 1)
                        inserts += 1
                        break
                    else:
                        continue
                else:
                    insertIndex = len(mergeArray) - 1
                    mergeArray.insert(numToInsert, insertIndex)
                    nums2.pop(0)
                    mergeArray.pop(len(mergeArray) - 1)
                    break
            
