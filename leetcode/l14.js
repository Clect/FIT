/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let key = strs[0];
    if(strs.length == 0) {
        return "";
    }
    if(strs.length == 1 || key.length === 0) {
        return key;
    }

    let ret = "";

    for(let i = 0;i < key.length;i++ ) {
        let index = strs[0][i];
        for(let j = 0;j < strs.length;j++) {
            let that = strs[j][i];
            if(!that) {
                return ret;
            }

            if(that !== index) {
                return ret
            }
        }
        ret += index;
    }

    return ret;
};