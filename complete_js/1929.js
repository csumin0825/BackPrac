//백준 제출용
// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split(" ");

const a = Number(input[0]);
const b = Number(input[1]);

let arr = Array(b + 1).fill(true);
arr[0] = arr[1] = false;

for (let i = 2; i <= Math.sqrt(b); i++) {
  if (!arr[i]) continue;
  for (let j = 2; j * i <= b; j++) {
    arr[i * j] = false;
  }
}

for (let i = a; i <= arr.length; i++) {
  if (arr[i]) console.log(i);
}
