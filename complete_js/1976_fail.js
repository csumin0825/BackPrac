//백준 제출용
// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const fs = require("fs");
const { get } = require("http");
let input = fs.readFileSync("example.txt").toString().split("\n");

const n = Number(input.shift());
const m = Number(input.shift());
const plan = input.pop().split(" ").map(Number);
// console.log(n, m, plan);

let arr = new Array(n);
for (let i = 1; i <= n; i++) {
  arr[i] = i;
  input[i - 1] = input[i - 1].split(" ").map(Number);
}
// console.log(arr);

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (input[i - 1][j - 1] === 1) {
      unionParent(arr, i, j);
    }
  }
}
// console.log(arr);
console.log(checkParent(arr, plan));

function getParent(arr, n) {
  if (arr[n] === n) return n;
  return (arr[n] = getParent(arr, arr[n]));
}

function checkParent(arr, plan) {
  let check = [];
  plan.forEach((x) => {
    check.push(getParent(arr, x));
  });
  // console.log(check);
  let set = new Set(check);
  if (set.size === 1) return "YES";
  else return "NO";
}

function unionParent(arr, a, b) {
  a = getParent(arr, a);
  b = getParent(arr, b);
  if (a < b) arr[b] = a;
  else arr[a] = b;
}
