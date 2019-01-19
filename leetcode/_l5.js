/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    for(var i = 0; i < s.length;i ++) {
        
    }
    return s;
};


var isHui = function(s) {
    for(var i = 0;i < s.length / 2;i ++) {
        if(s[i] !== s[s.length - i -1]) {
            return false;
        }
    }

    return s;
}