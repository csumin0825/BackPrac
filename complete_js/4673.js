//백준 제출용
// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("\n");

const N = input[0];
let sumArr = [];
let result = [];

let arr = new Array(10000);
for (let i = 0; i < arr.length; i++) {
  arr[i] = i + 1;
}

for (let i = 0; i < 9973; i++) {
  let lst = (i + 1)
    .toString()
    .split("")
    .map((x) => Number(x));

  let sum = i + 1;

  for (let j = 0; j < lst.length; j++) {
    sum += lst[j];
  }
  sumArr.push(sum);
}
result = arr.filter((num) => sumArr.includes(num) == false);

console.log(result.join("\n"));
