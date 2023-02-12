//백준 제출용
// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const fs = require("fs");
let input = fs
  .readFileSync("example.txt")
  .toString()
  .split(" ")
  .map((x) => Number(x));

const A = input[0],
  B = input[1],
  C = input[2];

function check(A, B, C) {
  if (A + B - C <= A + B * 2 - C * 2) {
    return -1;
  }
  let minus = A + B - C;
  let decrease = A + B - C - (A + B * 2 - C * 2);
  return Math.floor(minus / decrease + 2);
}

console.log(check(A, B, C));
