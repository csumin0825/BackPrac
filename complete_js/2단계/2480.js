const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

const a = parseInt(input[0]);
const b = parseInt(input[1]);
const c = parseInt(input[2]);

let res = 0;

if (a == b && a == c) {
  res = 10000 + a * 1000;
} else if (a == b || a == c) {
  res = 1000 + a * 100;
} else if (b == c) {
  res = 1000 + b * 100;
} else {
  maxNum = Math.max(a, b, c);
  res = maxNum * 100;
}
console.log(res);
