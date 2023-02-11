"use strict";
/*TS类型 */
//object表示一个js对象
let o;
o = {};
o = function () { };
/*{}指定对象中可以包含哪些属性
语法：{属性名:属性值,属性名:属性值
注意：在属性名后加?表示属性是可选的*/
let o2;
o2 = { name: '孙悟空', age: 18 };
let o3; //表示o3中只可以添加name属性，不能添加其他属性，否则会报错
o3 = { name: '猪八戒' };
//[propName:string]:any表示任意类型的属性
let o4; //JS中的属性名默认都是字符串
o4 = { name: "沙师弟", age: 28, gender: "男" };
/*设置函数结构的类型声明：语法:(形参：类型，形参：类型...)=>返回值*/
let o5;
o5 = function (a3, b3) {
    return a3 + b3;
};
/*数组的类型声明：类型[]、Array<类型>*/
//string[]表示字符串数组
let arr;
arr = ["1", "2", "3"];
//number[]表示数值数组
let arr1;
arr1 = [1, 2, 3];
/*元组：固定长度的数组 */
let tuple;
tuple = ["hello", "hello"];
//enum表示枚举
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
let enu;
enu = {
    name: "孙悟空",
    gender: Gender.Male
};
console.log(enu.gender === Gender.Male);
//&表示同时
let j;
let k;
let l;
let m;
