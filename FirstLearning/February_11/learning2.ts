//直接使用字面量进行类型声明
let a2: 10;
a2 = 10;
//使用|来连接多个类型（联合类型）
let b2:"male"|"female";
b2 = "male";
b2 = "female";
let c2 : boolean | string;
c2 = true;
c2 = "hello";
//显式any：any表示任意类型：一个变量设置为any后相当于对该变量关闭了TS的类型检测；不建议使用
let d2:any;
d2 = 10;
//隐式any：如果声明变量不指定类型，则TS解释器会自动判断变量的类型未any
let e2 = 123;
//unknown:未知类型
let w2 :unknown;