//백준 제출용
// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("\n");

const N = input[0];

console.log(N);
let cnt = 1;
let a = 1;

while (cnt != N) {
  for (let i = 1; i <= a; i++) {
    for (let j = 1; j <= a; j++) {
      console.log(`${i}/${j}`);
      cnt += 1;
    }
  }
  a += 1;
  console.log(cnt);
}
