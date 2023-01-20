const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split(" ");
//ㅣlet

const n = parseInt(input[0]);

for (i = 1; i < n + 1; i++) {
  ans = "";
  for (j = 1; j < n - i + 1; j++) {
    ans += " ";
  }
  for (j = 0; j < i; j++) {
    ans += "*";
  }
  console.log(ans);
}
