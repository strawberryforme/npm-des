// 其次，全局对象（window在浏览器中）不应位于变量的作用域链中。

var a = 10; // 全局变量

function test() {
    var a = 20; // 局部变量
    console.log(a); // 输出 20，因为在函数作用域内使用了局部变量
}

test();
console.log(a); // 输出 10，因为在全局作用域使用了全局变量