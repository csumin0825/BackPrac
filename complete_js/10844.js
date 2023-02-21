//백준 제출용
// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("\n");

const N = Number(input[0]);
const MOD = 1000000000;

let dp = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1];

for (let i = 1; i < N; i++) {
  let dp_copy = [...dp];
  for (let j = 0; j < 10; j++) {
    if (j === 0) {
      dp[0] = dp_copy[1] % MOD;
    } else if (j === 9) {
      dp[9] = dp_copy[8] % MOD;
    } else {
      dp[j] = (dp_copy[j - 1] + dp_copy[j + 1]) % MOD;
    }
  }
}

console.log(dp.reduce((a, c) => (a + c) % MOD, 0));
