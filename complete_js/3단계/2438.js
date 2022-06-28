const fs = require("fs");

// let input = fs.readFileSync("input.txt").toString().split(" ");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

for (i = 0; i < input[0]; i++) {
  ans = "*";
  for (j = 0; j < i; j++) {
    ans += "*";
  }
  console.log(ans);
}
