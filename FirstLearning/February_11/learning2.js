"use strict";
//直接使用字面量进行类型声明
let a2;
a2 = 10;
//使用|来连接多个类型（联合类型）
let b2;
b2 = "male";
b2 = "female";
let c2;
c2 = true;
c2 = "hello";
//显式any：any表示任意类型：一个变量设置为any后相当于对该变量关闭了TS的类型检测；不建议使用
let d2;
d2 = 10;
//隐式any：如果声明变量不指定类型，则TS解释器会自动判断变量的类型未any
let e2 = 123;
//unknown:未知类型，类型安全的any，unknow类型的变量不能直接给其他变量赋值
let w2;
w2 = 2;
if (typeof w2 === "number") {
    w2 = a2;
}
/*类型断言：
作用：用来告知解析器变量的实际类型
语法：变量 as 类型  或  <类型> 变量*/
w2 = a2; //a2就是数值
w2 = a2;
/*函数的返回值：void和never*/
function fn() {
}
function fn2() {
    throw new Error("报错了！"); //函数报错后立即结束代码
}
