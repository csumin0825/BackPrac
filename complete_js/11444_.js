//백준 제출용
// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split(" ");

const N = Number(input[0]) - 1;
let arr = new Array(N);

console.log(fibonacci(N) % 1000000007);

// console.log("HI");
function fibonacci(n) {
  if (n === 0) return 1;
  else if (n === 1) return 1;

  if (!arr[n]) {
    arr[n] = fibonacci(n - 1) + fibonacci(n - 2);
  } else {
    return arr[n];
  }
  return arr[n];
}
