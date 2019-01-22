/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let tar = n;
    if(n <= 0) {
        return false;
    }
    while(tar > 2) {
        tar /= 2;
        if(tar % 1 != 0) {
            return false;
        }
    }

    return true;
};