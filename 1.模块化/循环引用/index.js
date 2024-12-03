// const  { sum,wait,blockingModule,example } = require('./sum');
// // require(`./${sum}`)

// // console.log(wait(),wait);

// // console.log(sum(1,2));

// console.log("This message will be printed after the blocking operation in the module.");

// console.log(blockingModule);
// console.log(example);

// console.log(module);
// console.log(require);


const {log} = require('./lib.js');
module.exports = {
    name: 'index'
};
log();
