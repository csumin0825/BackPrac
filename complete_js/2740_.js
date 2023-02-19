//백준 제출용
// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("\n");

const a = input[0].split(" ").map((x) => Number(x));
let A = input.slice(1, a[0] + 1).map((x) => x.split(" ").map((x) => Number(x)));

const b = input[a[0] + 1].split(" ").map((x) => Number(x));
let B = input.slice(a[0] + 2, a[0] + b[0] + 2).map((x) => x.split(" ").map((x) => Number(x)));

let C = [];

function multi() {
  for (let i = 0; i < a[0]; i++) {
    let newLst = [];
    for (let j = 0; j < b[1]; j++) {
      newLst.push(A[0][i] * B[j][0] + A[1][i]);
    }
  }
}

console.log(a, A);
console.log(b, B);
