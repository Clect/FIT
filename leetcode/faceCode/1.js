/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    var sum = 0;
    var both = 0;
    for(var i = 0;i < s.length;i++) {
        var char = s[i];
        if(char === "(") {
            sum++;
        }
        else if(char === ")") {
            sum--;
        }
        else {
            both++;
        }

        if(sum < 0 - both) {
            return false;
        }
    }

    if(sum > both) {
        return false;
    }

    return true;
};