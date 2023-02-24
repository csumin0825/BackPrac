//백준 제출용
// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("\n").map(Number);

const n = input.shift();
const k = input.shift();

console.log(n, k);

let arrA = new Array(n + 1);
for (let i = 0; i < n; i++) {
  arrA[i].push([]);
}
console.log(arrA);

for (let i = 1; i < n; i++) {
  for (let j = 1; i < n; j++) {
    arrA[i][j] = i * j;
  }
}
console.log(arrA);
