//백준 제출용
// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("\n");

let n = Number(input[0]);
let paper = input.slice(1, n + 1).map((x) => x.split(" ").map((x) => Number(x)));

let white = 0;
let blue = 0;

divide(0, 0, n);
console.log(white, blue);

function divide(x, y, length) {
  let sum = 0;
  for (let i = x; i < x + length; i++) {
    for (let j = y; j < y + length; j++) {
      sum += paper[i][j];
    }
  }
  if (sum === 0) {
    white++;
  } else if (sum === length * length) {
    blue++;
  } else {
    divide(x, y, length / 2);

    divide(x + length / 2, y, length / 2);

    divide(x, y + length / 2, length / 2);

    divide(x + length / 2, y + length / 2, length / 2);
  }
}
