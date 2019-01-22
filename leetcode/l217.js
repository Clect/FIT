/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let temp = nums.sort();
    for(let i = 1;i < temp.length;i++) {
        let that = temp[i];
        let last = temp[i - 1]
        if(last == that) {
            return true;
        }
    }

    return false;
};