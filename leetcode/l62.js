/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    return ccc(m + n - 2, m > n ? n - 1 : m - 1)
};

// 排列组合
var ccc = function (n, m) {
    return factorial(n) / factorial(n - m) / factorial(m)
}

var aaa = function(n, m) {
    return factorial(n) / factorial(m);
}

function factorial(num) {
    if (num < 0) {
        return -1;
    } else if (num === 0 || num === 1) {
        return 1;
    } else {
        return (num * factorial(num - 1));
    }
}