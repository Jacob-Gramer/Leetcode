class Solution(object):
    def twoSum(self, nums, target):
        map = {}
        for i in range(len(nums)):
            if nums[i] not in map:
                map[target-nums[i]] = i
            else:
                return map[nums[i]], i

        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """