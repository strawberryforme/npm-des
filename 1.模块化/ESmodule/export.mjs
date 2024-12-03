
// export 语句用于从模块中导出实时绑定的函数。对象。或原始值。

// 以便其他程序可以通过 import 语句使用它们。被导出的绑定值依然可以在本地进行修改。
// 在使用 import 进行导入时，这些绑定值只能被导入模块所读取，但在 export 导出模块中对这些绑定值进行修改，所修改的值也会实时地更新。

// 无论你是否声明，导出的模块都处于严格模式。export 语句不能用在嵌入式脚本中。

//存在两种 exports 导出方式：

// 命名导出（每个模块 包含 任意数量） 你能够在每一个模块中定义多个命名导出， 在导出多个值时，命名导出非常有用。在导入期间，必须使用相应对象的相同名称。
// 导出事先定义的特性
export { myFunction, myVariable };

// 导出单个特性（可以导出 var，let，
//const,function,class）
export let myVariable = Math.sqrt(2);
export function myFunction() {  };

// 默认导出（每个模块 包含 一个）但是只允许有一个默认导出。
// 导出事先定义的特性作为默认值
export { myFunction as default };

// 导出单个特性作为默认值
export default function () {  }
export default class (){ }


// 文件 test.js
let k;
export default k = 12;

import m from "./test"; // 由于 k 是默认导出，所以可以自由使用 import m 替代 import k
console.log(m); // 输出为 12

// // 导出单个特性
// export let name1, name2, …, nameN; // also var, const
// export let name1 = …, name2 = …, …, nameN; // also var, const
// export function FunctionName(){...} 
// export class ClassName {...}

// 导出列表
// export { name1, name2, …, nameN }; 导出变量名称。

// 重命名导出
// export { name1 as name2, variable2 as name2, …, nameN };

// 解构导出并重命名
// export const { name1, name2: bar } = o; exports

// obj = {name1:123,name2:'蓝莓'}
export const { name1, name2: bar } = o;


// 默认导出
// export default function () {};
// export default {1:1}; // also class, function*
// export default function name1(…) { … } // also class, function*
// export { name1 as default, … };

// 导出模块合集
// export * from …; // does not set the default export
// export * as name1 from …; // Draft ECMAScript® 2O21
// export { name1, name2, …, nameN } from …;
// export { import1 as name1, import2 as name2, …, nameN } from …;
// export { default } from …;

// 16.4.5.2默认导出只是另一个命名导出
// //------ module1.js ------
export default function foo() {} // function declaration!

//------ module2.js ------
function foo() {}
// export { foo as default }
// 16.4.5.3default : 可以作为导出名称，但不能作为变量名称
// export { foo as default };
console.log(default);