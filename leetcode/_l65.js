/**
 * @param {string} s
 * @return {boolean}
 */
// 正负号有且只能有一个
var isNumber = function(s) {
    s = s.trim();
    if(s == ".") return false;
    if((/^(\+|-)*\d*\.\d*$/).test(s)) return true;
    if((/^(\+|-)*\d+e(\+|-)*\d+$/).test(s)) return true;
    if((/^(\+|-)*\d+$/).test(s)) return true;
    return false;
};