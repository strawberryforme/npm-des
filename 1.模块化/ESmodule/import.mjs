// 静态 import 语句用于导入由另一个模块导出的绑定。无论是否声明了 strict mode，导入的模块都运行在严格模式下。
// 在浏览器中，import 语句只能在声明了 type="module" 的 script 的标签中使用。

// 此外，还有一个类似函数的动态 import()，它不需要依赖 type="module" 的 script 标签。 在你希望按照一定的条件或者按需加载模块的时候，动态 import() 是非常有用的。
//  而静态型的 import 是初始化加载依赖项的最优选择，使用静态 import 更容易从代码静态分析工具和 tree shaking 中受益。

// 在 script 标签中使用 nomodule 属性，可以确保向后兼容。


// 1. 导入整个模块的内容
//import * as myModule from "/modules/my-module.js";

// import * as dmoudlue from './d.mjs';

// console.log(dmoudlue.a);

//2.导入单个接口

// import { a} from './d.mjs'; // 目录必须是./从当前开始。

// console.log(a);
// 3.导入多个接口
// import { a,d} from './d.mjs';

// console.log(a,d);

// 4. 导入带有别名的接口 你可以在导入时重命名接口。例如，将 shortName 插入当前作用域。
// import { a as aaa} from './d.mjs';

// console.log(aaa,);
// console.log(a);

// 5. 导入时重命名多个接口
// import { a as aaa,d as ddd} from './d.mjs';

// console.log(aaa,ddd);
// console.log(a);

// 6.仅为副作用而导入一个模块 整个模块仅为副作用（中性词，无贬义含义）而导入，而不导入模块中的任何内容（接口）。这将运行模块中的全局代码，但实际上不导入任何值。
// import "/modules/my-module.js";

// 7 导入默认值,引入模块可能有一个 default export（无论它是对象，函数，类等）可用。然后可以使用 import 语句来导入这样的默认接口。
// 最简单的用法是直接导入默认值：

// import pp from './d.mjs';
// console.log(pp);

// 7. 默认导出实际上只是一个具有特殊名称的命名导出default。也就是说，以下两个语句是等效的：

// import { default as foo } from 'lib';
// import foo from 'lib';

// 8.二合一
// import mydefualtpp , * as module from './d.mjs'; 
// console.log(mydefualtpp, module)

// import mydefualtpp, {a,d} from './d.mjs';
// console.log(mydefualtpp, a,d)

(async () => {
  if (true) {
    const {
      default: myDefault,
      a,
      d,
    } = await import("./d.mjs");

    console.log(myDefault,a,d);
  }
})();