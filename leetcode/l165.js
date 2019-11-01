/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
    var v1 = version1.split(".");
    var v2 = version2.split(".");
    var length = v1.length > v2.length ? v1.length : v2.length;

    for (var i = 0; i < length; i++) {
        var v1num = +v1[i];
        var v2num = +v2[i];
        if (!v1num) {
            if (v2num) {
                return -1;
            }
            else {
                continue;
            }
        }
        else if (!v2num) {
            if (v1num) {
                return 1;
            }
            else {
                continue;
            }
        }

        if (v1num && v2num) {
            if (v1num > v2num) {
                return 1;
            }
            else if (v1num < v2num) {
                return -1;
            }
            else {
                continue;
            }
        }
    }


    return 0;
};