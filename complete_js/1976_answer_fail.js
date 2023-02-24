//백준 제출용
// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// const fs = require("fs");
// const { get } = require("http");
// let input = fs.readFileSync("example.txt").toString().split("\n");

// const readFileSyncAddress = "example.txt";

const input = require("fs").readFileSync("example.txt").toString().trimEnd().split("\n");

const n = Number(input[0]);
const m = Number(input[1]);
const city = input.slice(2, 2 + n).map((el) => el.trimEnd().split(" ").map(Number));
const paths = input[n + 2].split(" ").map((el) => Number(el) - 1);
const indexArr = new Array(n).fill(0);
// console.log(n, m, plan);
for (let i = 1; i < n; i++) indexArr[i] = i;
// console.log(indexArr);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (city[i][j] === 1) {
      union(i, j);
    }
  }
}
// console.log(indexArr);

for (let i = 1; i < m; i++) {
  if (!findParent(paths[i - 1], paths[i])) {
    console.log("NO");
    return;
  }
}
console.log("YES");

function getParent(num) {
  if (indexArr[num] === num) return num;
  return (indexArr[num] = getParent(indexArr[num]));
}

function findParent(a, b) {
  a = getParent(a);
  b = getParent(b);
  if (a === b) return true;
  else return true;
}

function union(a, b) {
  a = getParent(a);
  b = getParent(b);
  if (a < b) indexArr[b] = a;
  else indexArr[a] = b;
}
