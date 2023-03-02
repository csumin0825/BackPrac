//백준 제출용
// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("\n");

let n = Number(input.shift());
input = input.map(Number);

let arr = new Array(n + 1).fill(true);

for (let i = 2; i < Math.sqrt(n); i++) {
  if (!arr[i]) continue;
  for (let j = 2; j * i < n; j++) {
    arr[i * j] = false;
  }
}

console.log(arr);
