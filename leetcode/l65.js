/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    s = s.trim();
    if(s == ".") return false;
    if((/^(\+|-)*\d*\.\d*$/).test(s)) return true;
    if((/^(\+|-)*\d+e(\+|-)*\d+$/).test(s)) return true;
    if((/^(\+|-)*\d+$/).test(s)) return true;
    return false;
};