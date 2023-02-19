//백준 제출용
// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const fs = require("fs");
let input = fs
  .readFileSync("example.txt")
  .toString()
  .split("\n")
  .map((x) => Number(x))
  .reverse();

let sum = input[0];
let cnt = 1;
for (let i = 1; i < input.length; i++) {
  if (input[i + 1] >= input[i]) {
    sum += input[i + 1];
    cnt = 1;
    i++;
    continue;
  } else {
    cnt++;
    if (cnt === 3) {
      if (input.indexOf(input[i + 1] === input.length - 1)) {
        break;
      }
      sum += input[i + 1];
      cnt = 1;
      i++;
      continue;
    }
    sum += input[i];
  }
}

console.log(sum);
