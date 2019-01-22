/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    let tar = n;

    if(tar <= 0) {
        return false;
    }
    
    while(tar > 1) {
        tar /= 3;
        if(tar % 1 != 0) {
            return false;
        }
    }

    return true;
};