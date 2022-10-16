const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
//let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let ans = "";

for (i = 0; i < input[0]; i++) {
  const num = input[i + 1].split(" ");
  ans += parseInt(num[0]) + parseInt(num[1]) + "\n";
}
console.log(ans);
