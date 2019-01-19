/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let arr = nums.sort();
    let len = arr.length;

    if(arr[0] !== arr[1]) {
        return arr[0];
    }

    if(arr[len - 1] !== arr[len - 2]) {
        return arr[len - 1];
    }

    for(var i = 1; i < arr.length - 1; i++) {
        if(arr[i] !== arr[i - 1] && arr[i] !== arr[i + 1]) {
            return arr[i];
        }
    }
};