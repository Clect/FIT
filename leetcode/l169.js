/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let temp = nums.sort();
    let val = temp[0];
    let val_ = temp[0];
    let count = 0;
    let count_ = 0;
    let len =  nums.lengthl

    for(let i = 1;i < temp.length;i++) {
        let that = temp[i];
        let last = temp[i - 1];
        if(that == last) {
            count++;
            val = that;
            if(count > len / 2) {
                return that;
            }
            val_ = count > count_ ? val : val_;
            count_ = count > count_ ? count : count_;
        }
        else {
            if(count > len / 2) {
                return that;
            }
            val_ = count > count_ ? val : val_;
            count_ = count > count_ ? count : count_;
            count = 0;
        }
    }

    console.log(val, val_, count, count_);

    return val_;
};