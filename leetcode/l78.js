/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let temp = handle(nums);
    let ret = [];
    let tempLen = temp.length;
    // FIX 已有有序无重数组，如何得到子集
    
};

var handle = function(nums) {
    let temp = nums.sort();
    let ret = [temp[0]];
    for(var i = 0;i < temp.length;i++){
        var retLen = ret.length;
        var that = temp[i];
        if(ret[retLen - 1] !== that) {
            ret.push(that);
        }
    }
    return ret;
}