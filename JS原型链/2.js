// 12.6name函数的性质#

let func1 = function () {};
console.log(func1.name); // func1

const func2 = function () {};
console.log(func2.name); // func2

var func3 = function () {};
console.log(func3.name); // func3


const func = () => {};
console.log(func.name); // func



function foo() {}
console.log(foo.name); // foo


class Foo {}
console.log(Foo.name); // Foo


class C {
  m1() {}
  ['m' + '2']() {} // computed property key

  static classMethod() {}
}
console.log(C.prototype.m1.name); // m1


// 以下所有语句均设置name为'default'：

// export default function () {}
// export default (function () {});

// export default class {}
// export default (class {});

// export default () => {};