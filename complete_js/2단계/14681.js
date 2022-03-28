const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split(" ");

// let input = fs.readFileSync("input.txt").toString().split("\n");
let input = fs.readFileSync(0).toString().split("\n");

const x = parseInt(input[0]);
const y = parseInt(input[1]);

if (x > 0) {
  if (y > 0) {
    console.log("1");
  } else if (y < 0) {
    console.log("4");
  }
} else if (x < 0) {
  if (y > 0) {
    console.log("2");
  } else if (y < 0) {
    console.log("3");
  }
}
