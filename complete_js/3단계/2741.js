const fs = require("fs");

// let input = fs.readFileSync("input.txt").toString().split(" ");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

let ans = "";

for (i = 1; i <= input[0]; i++) {
  ans += i + "\n";
}
console.log(ans);
