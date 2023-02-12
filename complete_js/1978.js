//백준 제출용
// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("\n");

const N = input[0];
let num = input[1]
  .toString()
  .split(" ")
  .map((x) => Number(x));

let result = 0;
for (const x of num) {
  let cnt = 0;
  for (let i = 1; i <= x; i++) {
    if (x % i == 0) {
      cnt += 1;
    }
  }
  if (cnt == 2) {
    result += 1;
  }
}
console.log(result);
