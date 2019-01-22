var spiralOrder = function (matrix) {
    if (!matrix) return [];
    if (!matrix.length) return [];
    var m = matrix.length;
    var n = matrix[0].length;
    if (!n) return [];
    var loop = ((Math.min(m, n) + 1) / 2) >> 0;
    var ret = [];
    for (var i = 0; i < loop; i++) {
        for (var j = i; j < n - i; j++) {
            ret.push(matrix[i][j]);
        }
        for (var j = i + 1; j < m - i; j++) {
            ret.push(matrix[j][n - 1 - i]);
        }
        if (m - i == i + 1 || i + 1 == n - i) break;
        for (var j = i + 1; j < n - i; j++) {
            ret.push(matrix[m - 1 - i][n - 1 - j]);
        }
        for (var j = i + 1; j < m - i - 1; j++) {
            ret.push(matrix[m - 1 - j][i]);
        }
    }
    return ret;
};