//백준 제출용
// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("\n");

const N = input[0];

[n, ...time] = input;
// n = Number(n);
time = time
  .map((i) => i.split(" ").map((j) => Number(j)))
  .sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });

let cnt = 1;
let end = time[0][1];
for (let i = 1; i < N; i++) {
  if (end <= time[i][0]) {
    end = time[i][1];
    cnt++;
  }
}
console.log(cnt);

// let time = [];

// for (let i = 1; i < N; i++) {
//   time.push(input[i].split(" "));
// }
