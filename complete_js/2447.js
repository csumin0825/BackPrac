//백준 제출용
// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split(" ");

const N = Number(input[0]);

let stars = [];

print(N);
console.log(stars.join(""));

function print(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      star(i, j, n);
    }
    stars.push("\n");
  }
}

function star(i, j, num) {
  if (i % 3 === 1 && j % 3 === 1) {
    // 1 1, 1 4, 1 7, 1 10, 1 13, 4 1, 4 4, 4 7,,,
    stars.push(" ");
  } else {
    if (num === 1) {
      stars.push("*");
    } else {
      star(parseInt(i / 3), parseInt(j / 3), parseInt(num / 3));
    }
  }
}
