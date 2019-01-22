/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let temp = quChongArray(nums);
    for(let i = 0; i < temp.length;i++) {
        let that = temp[i];
        if(that != i + 1){
            return i + 1;
        }
    }

    return temp.length + 1;
};

var quChongArray = function(nums) {
    let temp = nums.filter(x => x > 0).sort((x,y) => x - y);
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

var firstMissingPositive = function(nums) {
    let ret = [];
    for(let i = 0;i < nums.length;i++) {
        if(nums[i] > 0) {
            ret[nums[i]] = 1;
        }
    }

    if(ret.length == 0) {
        return 1;
    }

    for(let i = 1;i < ret.length;i++) {
        if(!ret[i]) {
            return i;
        }
    }

    return ret.length;
}