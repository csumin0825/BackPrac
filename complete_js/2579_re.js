//백준 제출용
// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const fs = require("fs");
let input = fs
  .readFileSync("example.txt")
  .toString()
  .split("\n")
  .map((x) => Number(x));

let n = input[0];
let stair = input.slice(1, n + 1);
let dp = new Array(n).fill(0);

dp[0] = stair[0];
dp[1] = Math.max(stair[0] + stair[1], stair[1]);
dp[2] = Math.max(stair[0] + stair[2], stair[1] + stair[2]);

for (let i = 3; i < n; i++) {
  dp[i] = Math.max(dp[i - 2] + stair[i], dp[i - 3] + stair[i] + stair[i - 1]);
}

console.log(dp[n - 1]);
