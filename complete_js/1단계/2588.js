const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split(" ");

// let input = fs.readFileSync("input.txt").toString().split("\n");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let a = parseInt(input[0]);

let b = parseInt(input[1]);
let b_0 = parseInt(input[1][0]);
let b_1 = parseInt(input[1][1]);
let b_2 = parseInt(input[1][2]);

console.log(a * b_2);
console.log(a * b_1);
console.log(a * b_0);
console.log(a * b);
