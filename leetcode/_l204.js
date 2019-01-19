/**
 * @param {number} n
 * @return {number}
 */
let isZhi = function(n) {
    if(n == 0 || n == 1) return false
    for(let i = n - 1; i > 1;i--) {
        if(n % i === 0) { 
            return false;
        }
    }
    return true;
};

let countPrimes = function(n) {
    let ret = 0;
    for(i = 1;i < n; i++ ) {
        if(isZhi(i)) {
            // ret.push(i);
            ret++;
        }
    }
    //  超时问题
    return ret;
}