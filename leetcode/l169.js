/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let temp = [];
    let max = 0;
    let maxId = 0;
    nums.forEach(x => {
        if(!temp[x]) {
            temp[x] = 1;
        }
        else {
            temp[x]++;
        }
    });
    console.log(temp)
    for(let i = 0;i < temp.length;i ++) {
        let that = temp[i];
        maxId = that ? (that > max ? i : maxId) : maxId;
        max = that ? (that > max ? that : max) : max;
    }
    return maxId;
};