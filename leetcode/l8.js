/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let t = str.trim();
    if((/^(\+\d+|-\d+|\d+)$/).test(t)) return checkNum(+t);
    if(!(/^(\+\d+|-\d+|\d+)/).test(t)) return 0;
    let temp = t.match(/(\+\d+|-\d+|\d+)/);
    return checkNum(+temp[0]);
};

var checkNum = function(t) {
    if(t > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;
    if(t < Math.pow(-2, 31)) return Math.pow(-2, 31);
    return t;
}