//백준 제출용
// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("-");

let result = [];
input.forEach((x) => {
  let num = x.split("+").map((x) => Number(x));
  const sum = num.reduce((accumulator, current) => accumulator + current, 0);
  result.push(sum);
});

console.log(result.reduce((acc, cur) => acc - cur));
