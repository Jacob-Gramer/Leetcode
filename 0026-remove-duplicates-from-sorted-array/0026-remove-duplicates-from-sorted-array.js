/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // declare a current number variable
    let curr = nums[0];
    let i = 1;
    // iterate over nums array
    while (i <= nums.length) {
        if (nums[i] <= curr) {
            nums.splice(i, 1);
        } else {
            curr = nums[i];
            i++;
        }
    }
    return nums.length;
};