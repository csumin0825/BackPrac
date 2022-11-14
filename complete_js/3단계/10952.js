const fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().split("\n");


let i = 0;

while (true) {
  const n = input[i].split(" ");
  const a = parseInt(n[0]);
  const b = parseInt(n[1]);

  if (a == b && b == 0) {
    break;
  } else {
    console.log(a + b);
  }
  i++;
}
