//백준 제출용
// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("\n");

const N = input[0];

let cnt = 0;
let increase = 0;
while (cnt < N) {
  increase += 1;
  cnt += increase;
}
cnt = cnt - increase + 1;

print(increase % 2 != 0 ? true : false);

function print(odd) {
  let a = 0,
    b = 0;
  if (odd) {
    a = increase;
    b = 1;
    for (cnt; cnt < N; cnt++) {
      a -= 1;
      b += 1;
    }
  } else {
    a = 1;
    b = increase;
    for (cnt; cnt < N; cnt++) {
      a += 1;
      b -= 1;
    }
  }
  console.log(`${a}/${b}`);
}
