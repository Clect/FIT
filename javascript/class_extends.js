// 私有方法 && 静态方法
// 私有方法可以通过Symbol变相解决
const bar = Symbol('bar');
const snaf = Symbol('snaf');
export default class myClass{
  // 公有方法
  foo(baz) {
    this[bar](baz);
  }
  // 私有方法
  [bar](baz) {
    return this[snaf] = baz;
  }
  // ...
};
// 静态方法 可以被子类继承 不可被实例继承
class Foo {
    static classMethod() {
        return 'hello';
    }
}
/* -------------------------------------------------------------------- */
// super作为函数调用时，代表父类的构造函数。ES6 要求，子类的构造函数必须执行一次super函数。
class A {}
class B extends A {
  constructor() {
    super();
    // super()在这里相当于A.prototype.constructor.call(this)
  }
}
// super作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类。
class Parent {
    static myMethod(msg) {
        console.log('static', msg);
    }
  
    myMethod(msg) {
        console.log('instance', msg);
    }
}
  
class Child extends Parent {
    static myMethod(msg) {
        super.myMethod(msg);
    }
  
    myMethod(msg) {
        super.myMethod(msg);
    }
}
  
  Child.myMethod(1); // static 1
  var child = new Child();
  child.myMethod(2); // instance 2
