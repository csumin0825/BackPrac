//백준 제출용
// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const fs = require("fs");
let input = fs.readFileSync("example.txt").toString().trim().split("\n");

const n = Number(input.shift());
let set = new Set(input);
const words = [...set];

console.log(words.sort((a, b) => a.length - b.length || a.localeCompare(b)).join("\n"));
