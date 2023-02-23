//백준 제출용
// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const num = input[1].split(" ").map(Number);
let max = 0;
console.log(blackJack(N, M));

function blackJack(n, m) {
  for (let a = 0; a < n; a++) {
    for (let b = a + 1; b < n; b++) {
      for (let c = b + 1; c < n; c++) {
        if (max < num[a] + num[b] + num[c] && num[a] + num[b] + num[c] <= m) {
          max = num[a] + num[b] + num[c];
        }
      }
    }
  }
  return max;
}
