//백준 제출용
// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("\n");

const N = input[0];
let total = 0;

for (let i = 0; i < N; i++) {
  let result = input[i + 1].split("");
  sum(result);
  console.log(total);
}

function sum(lst) {
  let num = 0;
  total = 0;
  lst.forEach(function (x) {
    if (x == "O") {
      num += 1;
    } else num = 0;
    total += num;
  });
}
