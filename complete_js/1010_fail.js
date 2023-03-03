//백준 제출용
// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("\n");

const t = Number(input.shift());
input = input.map((x) => x.split(" ").map(Number));

let arr = new Array(30 + 1).fill(0);
for (let i = 0; i < 30 + 1; i++) {
  let miniArr = new Array(30 + 1).fill(0);
  arr[i] = miniArr;
}

for (let i = 1; i <= 30; i++) {
  for (let j = i; j <= 30; j++) {
    if (i === 1) arr[i][j] = j;
    else if (i === j) arr[i][j] = 1;
    else if (i < j) {
      arr[i][j] = arr[i - 1][j - 1] + arr[i][j - 1];
    }
  }
}

input.forEach((el) => {
  const [n, m] = el;

  console.log(arr[n][m]);
});
