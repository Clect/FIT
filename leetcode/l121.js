/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    var max = 0;
    for (var i = 0; i < prices.length; i++) {
        var cur = prices[i];
        for (var j = i + 1; j < prices.length; j++) {
            var after = prices[j];
            if (after - cur > max) {
                max = after - cur;
            }
        }
    }

    return max;
};