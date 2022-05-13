const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

const h = parseInt(input[0]);
const m = parseInt(input[1]);

if (m >= 45) {
  console.log(`${h} ${m - 45}`);
} else {
  if (h < 1) {
    console.log(`23 ${m - 45 + 60}`);
  } else {
    console.log(`${h - 1} ${m - 45 + 60}`);
  }
}
