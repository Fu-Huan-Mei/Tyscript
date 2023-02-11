/*TS的类型声明 */
//声明一个变量a，同时指定它的类型未number
let a :number;
//a的类型设置为number，在以后的使用中a的值只能是数字
a = 10;
// a = "hello";//代码会报错
let b : string;
b = "hello";
// b = 123;//报错
//声明变量后直接赋值
let c :boolean = false;
//变量声明和赋值同时进行，TS可以自动对变量进行类型检查
let d = true;
//JS中的函数不考虑参数的类型和个数
function sum(a:number,b:number):number{//:number函数返回值的类型是number
    return a+b;
}
console.log(sum(123,456));

