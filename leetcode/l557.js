 /**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    if(nums == [0]) return [1];
    let n = 1;
    let length = nums.length;
    nums.forEach(x => n *= x);
    let ret = new Array(length).fill(n);
    return ret.map((x, id) => x === 0 ? 0 : x / nums[id]);
};

//[1,2,3,4]
//[24,12,8,6]
// FIX 不要用除法