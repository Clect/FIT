/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    let tar = num;

    if(tar <= 0) {
        return false;
    }
    
    while(tar > 1) {
        tar /= 4;
        if(tar % 1 != 0) {
            return false;
        }
    }

    return true;
};