/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n > 2048) {
        return isPowerOfTwoBig(n);
    }
    else {
        return isPowerOfTwoSmall(n);
    }
}

var isPowerOfTwoSmall = function(n) {
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

let P10 = 1024;
var isPowerOfTwoBig = function(n) {
    let tar = n;
    if(n <= 0) {
        return false;
    }

    while(tar > P10) {
        tar /= P10;
        if(tar % 1 != 0) {
            return false;
        }
    }

    if(tar === 1 || tar === 2 || tar === 4 || 
        tar === 8 || tar === 16 || tar === 32 || 
        tar === 64 || tar === 128 || tar === 256 || 
        tar === 512 || tar === 1024) {
        return true;
    }

    return false;
}