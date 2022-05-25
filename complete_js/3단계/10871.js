const fs = require("fs");

let input = fs.readFileSync("input.txt").toString().split("\n");

const n1 = input[0].split(" ");
const x = parseInt(n1[1]);

const n2 = input[1].split(" ");

let res = "";
for (i = 0; i < n1[0]; i++) {
  if (n2[i] < x) {
    console.log(n2[i]);
  }
}
