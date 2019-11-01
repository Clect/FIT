/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let aArray = prices.map((x, id) => (x - (prices[id - 1] || 0)));
    let aChange = 0;
    let ret = 0;
    aArray.forEach((x, id) => {
        if(x < 0) return;
        else {
            aChange += x;
        }
        if(x < 0 && aChange > 0 && x + aChange < 0) {

        }
    })

    // 需要动态规划的方式来思考

    return ret;
};