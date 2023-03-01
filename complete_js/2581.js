//백준 제출용
// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("\n");

const [m, n] = input.map(Number);
// console.log(m, n);

let arr = [];
for (let i = m; i <= n; i++) {
  if (i === 1 || i === 0) continue;
  if (i === 2 || i === 3) {
    arr.push(i);
    continue;
  }
  let x = Math.floor(Math.sqrt(i));
  for (let j = 2; j <= x; j++) {
    if (i % j === 0) break;
    if (j === x) arr.push(i);
  }
}

if (arr.length === 0) {
  console.log(-1);
} else {
  console.log(arr.reduce((acc, cur) => (acc += cur)));
  console.log(Math.min(...arr));
}
