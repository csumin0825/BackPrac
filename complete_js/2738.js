//백준 제출용
// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("\n");

const N = Number(input[0].toString().split(" ")[0]);
const M = Number(input[0].toString().split(" ")[1]);

let inputLst = [];

for (let i = 1; i < input.length; i++) {
  inputLst.push(
    input[i]
      .toString()
      .split(" ")
      .map((x) => Number(x))
  );
}

for (let i = 0; i < N; i++) {
  let arr = [];
  for (let j = 0; j < M; j++) {
    arr.push(inputLst[i][j] + inputLst[i + N][j]);
  }
  console.log(arr.join(" "));
}
