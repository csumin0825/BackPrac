const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split(" ");

// let input = fs.readFileSync("input.txt").toString().split(" ");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

const n = parseInt(input[0]);

let ans = "";

for (let i = input[0]; i >= 1; i--) {
  ans += i + "\n";
}
console.log(ans);
