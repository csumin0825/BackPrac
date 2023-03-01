//백준 제출용
// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("\n");

let n = Number(input[0]);
let count = 0;

while (true) {
  if (n % 5 === 0) {
    console.log(n / 5 + count);
    break;
  }

  if (0 > n) {
    console.log(-1);
    break;
  }

  count++;
  n -= 3;
}
