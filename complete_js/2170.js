//백준 제출용
// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const fs = require("fs");
let input_ = fs
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const [n] = input_.shift();

let input = input_.sort((a, b) => a[0] - b[0]);

let length = 0;
let start = input[0][0];
let end = input[0][1];

for (let i = 1; i < n; i++) {
  if (end < input[i][0]) {
    length += end - start;
    start = input[i][0];
    end = input[i][1];
  } else if (end >= input[i][0] && end <= input[i][1]) {
    end = input[i][1];
  }
}
length += end - start;
console.log(length);
