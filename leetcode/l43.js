/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    let temp = [];
    let ret = 0;
    for(let i = 0;i < num1.length;i++) {
        let x = +num1[i] * Math.pow(10, num1.length - i - 1);
        for(let j = 0;j < num2.length;j++) {
            let y = +num2[j] * Math.pow(10, num2.length - j - 1);;
            temp.push(x * y);
        }
    }
    console.log(temp);
    // 此处可以特殊处理一下，分段转成string
    temp.forEach(x => ret += x);
    return ret + "";
};