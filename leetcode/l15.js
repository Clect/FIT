/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let tep = nums.sort((a, b) => a - b);
    let tepLength = tep.length;
    for(let i = 0;i < tepLength - 1;i++) {
        let fir = tep[i];
        for(let j = i + 1;j < tepLength; j++) {
            let sec = tep[j];
            let thr = 0 - fir - sec;
            
        }
    }    
};