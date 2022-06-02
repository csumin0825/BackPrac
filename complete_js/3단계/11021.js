const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let ans = "";

for (let i = 1; i <= input[0]; i++) {
  const num = input[i].split(" ");
  const a = parseInt(num[0]);
  const b = parseInt(num[1]);
  ans += `Case #${i}: ${a + b}\n`;
}
console.log(ans);
