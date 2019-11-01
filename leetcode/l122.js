/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let ret = 0;
    for (let i = 1; i < prices.length; i++) {
        let num = prices[i] - prices[i - 1];
        if (num > 0) {
            ret += num;
        }
    }

    return ret;
};