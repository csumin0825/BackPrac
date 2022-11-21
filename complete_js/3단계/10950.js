const fs = require("fs");

//let input = fs.readFileSync("input.txt").toString().split("\n");
let input = fs.readFileSync("input.txt").toString().split("\n");
let t = parseInt(input[0]);
console.log(typeof t);

for (i = 0; i < t; i++) {
  const num = input[i + 1].split(" ");
  const a = parseInt(num[0]);
  const b = parseInt(num[1]);

  console.log(`${a + b}`);
}
