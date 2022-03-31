const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split(" ");

// let input = fs.readFileSync("input.txt").toString().split(" ");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");
let sum = 0;

for (i = 1; i < parseInt(input[0]) + 1; i++) {
  sum += i;
}
console.log(sum);
