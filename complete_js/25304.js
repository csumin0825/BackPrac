//백준 제출용
//let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("\n");

const BILL = input[0];
const N = input[1];
let total = 0;

for (let i = 0; i < N; i++) {
  let split_input = input[i + 2].split(" ");
  total += split_input[0] * split_input[1];
}

console.log(total == BILL ? "Yes" : "No");
