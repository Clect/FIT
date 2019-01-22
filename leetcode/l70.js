/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let isJi = n % 2;
    let maxNum2 = Math.floor(n / 2);
    let ret = 1;
    for (let i = 1;i <= maxNum2;i++) {
        let total = i + (maxNum2 - i) * 2 + isJi;
        ret += ccc(total, i);
    }
    return ret;
};


var ccc = function (n, m) {

    return factorial(n) / factorial(n - m) / factorial(m)
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