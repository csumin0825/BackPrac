//백준 제출용
// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("\n");

const N = input[0];
let lst = input[1].split(" ").map((x) => Number(x));

console.log(Math.min(...lst), Math.max(...lst));
