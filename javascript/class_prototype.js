class Point {
    // ...
}
typeof Point // "function"
Point === Point.prototype.constructor
// 也就是说
function Point() {
    // xxx
}
// 等同于
class Point {
    constructor() {
        // xxx
    }
}
// 等同于
Point.prototype = {
    constructor() {
        // xxx
    }
}

/* -------------------------------------------------------------------- */

class Point {
    constructor() {
        // ...
    }

    toString() {
        // ...
    }

    toValue() {
        // ...
    }
}
  
  // 等同于

Point.prototype = {
    constructor() {},
    toString() {},
    toValue() {},
};

/* -------------------------------------------------------------------- */

class Point {
    constructor() {
        return {
            a: 11,
            b: 22
        }
    }
}

let p = new Point();
p instanceof Point; // false
new Date() instanceof Date; // true
// constructor 不返回对象就是true

/* -------------------------------------------------------------------- */

// 使用__proto__需谨慎，不推荐使用

var p1 = new Point(2,3);
var p2 = new Point(3,2);

p1.__proto__ === p2.__proto__; // true

p1.__proto__.printName = function () { return 'Oops' };

p1.printName() // "Oops"
p2.printName() // "Oops"

var p3 = new Point(4,2);
p3.printName() // "Oops"
/* -------------------------------------------------------------------- */
// 子类的__proto__属性，表示构造函数的继承，总是指向父类。
// 子类的prototype属性的__proto__属性，表示方法的继承，总是指向父类的prototype属性。

class A {
}

class B extends A {
}

B.__proto__ === A // true
B.prototype.__proto__ === A.prototype // true