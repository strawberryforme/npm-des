

exports.sum = (x, y) => x + y;

exports.wait = (x, y) => {
  setTimeout(() => {
    console.log(1111)
  }, 3000);
}

// blockingModule.js
function blockForSomeTime(seconds) {
  const start = Date.now();
  while (Date.now() - start < seconds * 1000) {}
}
console.log(123);
blockForSomeTime(3); // 模拟一个耗时操作

exports.example = "This code blocks the execution for 5 seconds.";