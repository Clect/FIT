/**
 * @param {number} num
 * @return {string}
 */

var key = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', '10'];
var max = Math.pow(16, 8);
var toHex = function(num) {
    let tar = num;
    let ret = "";
    if(num < 0) tar = max + num;
    while (tar > 16) {
        let yu = tar % 16;
        if(yu == 0) {
            ret = 0 + ret;
        }
        else {
            tar -= yu;
            ret = key[yu] + ret;
        }
        tar /= 16;
    }
    ret = key[tar] + ret;
    return ret;
};