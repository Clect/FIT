/**
 * @param {number[]} digits
 * @return {number[]}
 */


var ppp = function(d) {
    let n = 0;
    n = String(+d.join("") + 1).split("");
    return n.map(s => +s);
};

 // js 数字最大 6145390195186705000

var plusOne = function(d) {
    var ttt = d;
    var l = d.length;
    var last = l - 1 < 0 ? 0 : l - 1;
    let all9 = true;

    for(var i = last;i >= 0;i--) {
        if(ttt[i] != 9) {
            all9 = false;
            ttt[i] += 1;
            break;
        }
        else {
            ttt[i] = 0;
        }
    }

    if(all9) {
        ttt.unshift(1);
        return ttt;
    }

    return ttt;

}