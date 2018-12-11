// 循环消除闭包
// 要想形成闭包一个必要的条件，你得有一个父级的函数，包括住延时器，当延时器在被调用的时候，延时器与foo内部的上下文形成闭包
(function() {
    for(var i = 0; i < 5;i++) {
        function ppp(j){
            setTimeout(function() {
                console.log(j);
            }, 0)
        }
        ppp(i);
    }
})();

// 私有化，授权访问

function auth() {
    /* ... */
    return {
        a: 1,
        b: 2,
        c: 3
    }
}
let person = auth();
person.a // 1
person.b // 2
person.c // 3

// 偏函数
function add(a) {
    return (b) => {
        return a + b;
    }
}

add(3)(5) // 3 + 5 = 8