//백준 제출용
// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("\n");

const N = Number(input[0]);
let result = 1;

function factorial(n) {
  if (!n) return 1;
  result = n * factorial(n - 1);
  return result;
}

console.log(factorial(N));
