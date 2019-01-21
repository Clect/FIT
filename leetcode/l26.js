/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    for(let i = 1;i < nums.length;i++) {
        let that = nums[i];
        let last = nums[i - 1];
        if(that == last) {
            // 如何在时间浮浮复杂度为N 的情况下，删除数组指定项
        }
    }
    return nums;
};