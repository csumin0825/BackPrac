const fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString();

const a = parseInt(input);

for (i = 1; i < 10; i++) {
  console.log(`${a} * ${i} = ${a * i}`);
}
