//백준 제출용
// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("\n");

const N = Number(input[0]);
let cnt = 0;
let result = [];

function hanoi(n, start, end, other) {
  if (!n) return;
  hanoi(n - 1, start, other, end);
  result.push(`${start} ${end}`);
  cnt++;
  hanoi(n - 1, other, start, end);
}
hanoi(N, 1, 2, 3);
console.log(cnt);
console.log(result.join("\n"));
