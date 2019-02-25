/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let ret = []
    for(let i = 0;i < numRows;i++) {
        let temp = [];
        temp[0] = 1;
        temp[i] = 1;
        for(let j = 0;j < i;j++) {
            let key = j + 1;
            temp[j] = ccc(i, j);
        }
        ret.push(temp)
    }
    return ret;
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