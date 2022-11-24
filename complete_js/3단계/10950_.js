const fs = require("fs")

//let input = fs.readFileSync("input.txt").toString().split("\n");
let input = fs.readFileSync("input.txt").toString().split("\n");

for (i = 0; i < input[0]; i++) {
  const num = input[i + 1].split(" ");
  console.log(parseInt(num[0]) + parseInt(num[1]));
}
