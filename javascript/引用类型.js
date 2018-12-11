// js数据基本类型
new Number();
new String();
new Boolean();
new Symbol();// 独一无二的键值

null;
undefined;

// js数据的引用类型
// 也就是对象类型Object type，比如：Object 、Array 、Function 、Data等。
let obj1 = new Object();
let obj2 = obj1;
obj2.name = "我有名字了";
console.log(obj1.name); // 我有名字了

// 函数名称实际是一个指向函数对象的指针，不会与某一个函数进行绑定。
function asd() {
    console.log(123);
}
let aaa = asd;
aaa(); // 123
function asd() {
    console.log(321);
}
aaa() // 123