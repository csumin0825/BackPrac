//백준 제출용
// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("\n");

const n = Number(input.shift());
input = input.map((x) => x.split(" ").map(Number));

let arr = new Array(101).fill(0);
for (let i = 0; i < 101; i++) {
  let miniArr = new Array(101).fill(0);
  arr[i] = miniArr;
}

for (let el of input) {
  const [x, y] = el;
  for (let i = x; i < x + 10; i++) {
    for (let j = y; j < y + 10; j++) {
      if (arr[i][j]) continue;
      arr[i][j] = 1;
    }
  }
}
let cnt = 0;
for (let i = 0; i < 101; i++) {
  for (let j = 0; j < 101; j++) {
    if (arr[i][j]) cnt++;
  }
}

console.log(cnt);
