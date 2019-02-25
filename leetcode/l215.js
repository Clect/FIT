/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let tar = nums.sort((a, b) => a - b > 0);
    return tar[tar.length - k];
};